import useApi from "../hooks/useApi";
import { useLayoutEffect, useRef, useMemo } from "react";
import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery } from "react-query";
import { columns } from "../components/Management/columns";
import { Table } from "../components/Table";
import { Container, Title } from "@mantine/core";

const Management = () => {
  const pb = useApi();
  const maxPages = useRef(1);
  const { ref, entry } = useIntersection({
    threshold: 1,
  });

  const getVariant = async ({ pageParam = 1 }) => {
    const response = await pb.collection("trees").getList(pageParam, 50, {
      sort: "number",
      expand: "variantId",
    });
    maxPages.current = response.totalPages;
    return response.items;
  };

  const { data, isLoading, isError, error, fetchNextPage } = useInfiniteQuery(
    ["trees"],
    getVariant,
    {
      getNextPageParam: (lastPage, pages) => {
        if (pages.length < maxPages.current) {
          return pages.length + 1;
        }
        return undefined;
      },
    }
  );

  const flatData = useMemo(() => data?.pages?.flat(), [data]);

  useLayoutEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry?.isIntersecting]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Container size={"xl"} className="flex flex-col gap-5">
      <Title order={1}>Management</Title>
      <Table
        ref={ref}
        columns={columns}
        data={flatData ?? []}
        loading={isLoading}
      />
    </Container>
  );
};

export default Management;

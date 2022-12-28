import useApi from "../hooks/useApi";
import {
  useLayoutEffect,
  useRef,
  useMemo,
  useState,
  createContext,
} from "react";
import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery } from "react-query";
import { columns } from "../components/Management/columns";
import { Table } from "../components/Table";
import { Container, Title, Group, Button } from "@mantine/core";
import EditModal from "../components/Management/EditModal";

export const ModalContext = createContext({
  openModal: () => {},
  closeModal: () => {},
});

const Management = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const pb = useApi();
  const maxPages = useRef(1);
  const { ref, entry } = useIntersection({
    threshold: 1,
  });

  const getVariant = async ({ pageParam = 1 }) => {
    const response = await pb.collection("trees").getList(pageParam, 25, {
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
    <ModalContext.Provider value={{ openModal, closeModal }}>
      <Container size={"xl"} className="flex flex-col gap-5">
        <div className="flex justify-between items-center py-5 px-3">
          <Title
            className="hover:underline cursor-default capitalize text-gray-700"
            order={1}
          >
            Management
          </Title>
          <Group>
            <Button variant="outline">Add Log</Button>
            <Button variant="outline">Record Yield</Button>
          </Group>
        </div>
        <Table
          ref={ref}
          columns={columns}
          data={flatData ?? []}
          loading={isLoading}
        />
        <EditModal opened={modalOpen} onClose={closeModal} />
      </Container>
    </ModalContext.Provider>
  );
};

export default Management;

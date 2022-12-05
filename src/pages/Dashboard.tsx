import useApi from "../hooks/useApi";
import { useEffect, useState, useRef } from "react";
import moment from "moment";
import { useIntersection } from "@mantine/hooks";

const formatTime = (time: string) => {
  return moment(time).format("DD MMM YYYY");
};

const countAge = (time: string) => {
  //check now - time in year
  return moment().diff(time, "years");
};

const Dashboard = () => {
  const pb = useApi();
  const [variant, setVariant] = useState<Array<any>>([]);
  const maxPages = useRef(1);
  const page = useRef(1);
  const { ref, entry } = useIntersection({
    threshold: 1,
  });

  const getVariant = async () => {
    if (maxPages.current >= page.current) {
      const response = await pb.collection("trees").getList(page.current, 50, {
        sort: "number",
      });
      setVariant((old) => [...old, ...response.items]);
      maxPages.current = response.totalPages;
      page.current += 1;
    }
  };

  useEffect(() => {
    if (entry?.isIntersecting) {
      getVariant();
    }
  }, [entry?.isIntersecting]);

  useEffect(() => {
    getVariant();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {variant.map((item: any, index: number) => (
        <div
          ref={index === variant.length - 10 ? ref : undefined}
          key={item.id}
        >
          <p>{item.number}</p>
          <p>{countAge(item.planting_time)} Years</p>
          <p></p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;

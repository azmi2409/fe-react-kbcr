import { useState, useEffect, useCallback, useRef } from "react";
import useAuth from "./hooks/useAuth";

function Seed() {
  const [data, setData] = useState([]);
  const variant = useRef("");
  const { auth, pb } = useAuth();

  const getVariant = useCallback(async () => {
    if (auth.token) {
      const response = await pb
        .collection("variants")
        .getFirstListItem('name="Kelengkeng"');
      variant.current = response.id;
      if (variant.current) {
        let number = 1;
        while (number <= 234) {
          await seedData(number);
          number += 1;
        }
      }
    }
  }, [auth.token]);

  const seedData = useCallback(async (nums = 2) => {
    const data = {
      number: nums,
      variantId: variant.current,
      planting_time: "2017-03-01",
    };
    const response = await pb.collection("trees").create(data);
    console.log(response);
  }, []);

  useEffect(() => {
    getVariant();
  }, [getVariant]);

  return <div>Hello World</div>;
}

export default Seed;

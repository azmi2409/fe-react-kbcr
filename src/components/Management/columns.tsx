import moment from "moment";
import { BsThreeDots } from "react-icons/bs";

const countAge = (time: string) => {
  //check now - time in year
  return moment().diff(time, "years");
};

export const columns = [
  {
    Header: "Tree No.",
    accessor: "number",
  },
  {
    Header: "Age (Years)",
    accessor: "planting_time",
    Cell: ({ value }: any) => {
      return countAge(value) + " years";
    },
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ value }: any) => value ?? "N/A",
  },
  {
    Header: "Type",
    accessor: "expand.variantId.name",
  },
  {
    Header: "Variant",
    accessor: "expand.variantId.variant",
  },
  {
    Header: "Location",
    accessor: "location",
  },
  {
    Header: CenterHeader({ value: "Action" }),
    id: "action",
    Cell: ActionCell,
  },
];

export function CenterHeader({ value }: any) {
  return (
    <div className="flex justify-center items-center text-center">{value}</div>
  );
}

export function ActionCell() {
  return (
    <span className="flex justify-center items-center">
      <BsThreeDots className="cursor-pointer text-xl" />
    </span>
  );
}

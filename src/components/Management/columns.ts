import moment from "moment";

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
    Header: "Action",
    id: "action",
  },
];

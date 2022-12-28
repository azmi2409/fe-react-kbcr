import { useContext, useMemo } from "react";
import moment from "moment";
import { BsThreeDots } from "react-icons/bs";
import { GrFormView, GrFormEdit } from "react-icons/gr";
import { Menu } from "@mantine/core";
import { ModalContext } from "../../pages/Management";

const countAge = (time: string) => {
  //check now - time in year
  return moment().diff(time, "years");
};

export const columns = [
  {
    Header: "Tree No.",
    accessor: "number",
    style: {
      width: "10%",
    },
  },
  {
    Header: "Age (Years)",
    accessor: "planting_time",
    Cell: ({ value }: any) => {
      return countAge(value) + " years";
    },
    style: {
      width: "10%",
    },
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ value }: any) => value ?? "N/A",
    style: {
      width: "15%",
    },
  },
  {
    Header: "Type",
    accessor: "expand.variantId.name",
    style: {
      width: "15%",
    },
  },
  {
    Header: "Variant",
    accessor: "expand.variantId.variant",
    style: {
      width: "15%",
    },
  },
  {
    Header: "Location",
    accessor: "location",
    style: {
      width: "25%",
    },
  },
  {
    Header: CenterHeader({ value: "Action" }),
    id: "action",
    Cell: ActionCell,
    style: {
      width: "10%",
    },
  },
];

export function CenterHeader({ value }: any) {
  return (
    <div className="flex justify-center items-center text-center">{value}</div>
  );
}

export function ActionCell() {
  const { openModal } = useContext(ModalContext);

  const actionMenus = useMemo(
    () => [
      {
        label: "View",
        Icon: GrFormView,
        handler: () => {},
      },
      {
        label: "Edit",
        Icon: GrFormEdit,
        handler: openModal,
      },
    ],
    []
  );

  return (
    <Menu shadow="md">
      <Menu.Target>
        <div className="flex justify-center items-center">
          <BsThreeDots className="cursor-pointer text-xl" />
        </div>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Actions</Menu.Label>
        {actionMenus.map(({ label, Icon, handler }) => (
          <Menu.Item key={label} onClick={handler} icon={<Icon />}>
            {label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}

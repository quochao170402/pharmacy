import dayjs from "dayjs";
import Pagination from "../../components/Pagination/Pagination";
import Table, { ColumnProps } from "../../components/Table/Table";
import Title from "../../components/Title/Title";
import { orders } from "../../types";
import { Order } from "../../types/order";

const defaultPageValue = {
  pageSize: 10,
  pageIndex: 1,
  totalItems: 100,
};
const OrderPage = () => {
  const columns: Array<ColumnProps<Order>> = [
    {
      key: "id",
      title: "STT",
      render: (_, record, index) => <>{index ? index + 1 : 1}</>,
    },
    {
      key: "customer",
      title: "Khách hàng",
      render: (_, record) => <span>{record.customer.name}</span>,
    },
    {
      key: "amount",
      title: "Doanh thu",
      render: (_, record) => <span>{record.amount}</span>,
    },
    {
      key: "user",
      title: "Dược sĩ",
      render: (_, record) => <span>{record.user.name}</span>,
    },
    {
      key: "createdAt",
      title: "Thời gian",
      render: (_, record) => (
        <span>{dayjs(record.createdAt).format("DD/MM/YYYY")}</span>
      ),
    },
  ];
  return (
    <>
      <Title title={"Đơn hàng"} />
      {/* Table */}
      <Table data={orders} columns={columns} />
      {/* Pagination */}
      <Pagination
        pageSize={defaultPageValue.pageSize}
        pageIndex={defaultPageValue.pageIndex}
        totalItems={defaultPageValue.totalItems}
        onPageChange={() => {
          console.log("Page change");
        }}
      />
    </>
  );
};

export default OrderPage;

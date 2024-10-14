import dayjs from "dayjs";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import Table, { ColumnProps } from "../../components/Table/Table";
import Title from "../../components/Title/Title";
import { orders } from "../../types";
import { Order } from "../../types/order";

const defaultPageValue = {
  pageSize: 20,
  pageIndex: 1,
};

const OrderPage = () => {
  const [pagination, setPagination] = useState<{
    pageSize: number;
    pageIndex: number;
  }>(defaultPageValue);

  const [renderedOrders, setRenderedOrders] = useState(
    orders.slice(
      (pagination.pageIndex - 1) * pagination.pageSize,
      pagination.pageIndex * pagination.pageSize
    )
  );

  useEffect(() => {
    setRenderedOrders(
      orders.slice(
        (pagination.pageIndex - 1) * pagination.pageSize,
        pagination.pageIndex * pagination.pageSize
      )
    );
  }, [pagination, orders]);

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
  console.log("🚀 ~ OrderPage ~ renderedOrders:", renderedOrders);

  return (
    <>
      <Title title={"Đơn hàng"} />
      {/* Table */}
      <Table data={renderedOrders} columns={columns} height={700} />
      {/* Pagination */}
      <Pagination
        pageSize={pagination.pageSize}
        pageIndex={pagination.pageIndex}
        totalItems={orders.length}
        onPageChange={(pageSize, pageIndex) => {
          setPagination({ pageSize, pageIndex });
        }}
      />
    </>
  );
};

export default OrderPage;

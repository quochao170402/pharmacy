import { FaMoneyBillAlt, FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { RiPassExpiredFill } from "react-icons/ri";
import BarChart from "../../components/Chart/BarChart";
import Table, { ColumnProps } from "../../components/Table/Table";
import { Customer } from "../../types/user";
import { textToCurrency } from "../../utils/currency";
import { customers } from "./dummy";

const cards: DashboardCards[] = [
  {
    label: "Số lượng đơn hàng",
    icon: <FiShoppingCart size={40} />,
    amount: "200",
  },
  {
    label: "Số lượng khách hàng",
    icon: <FaUser size={40} />,
    amount: "400",
  },
  {
    label: "Doanh thu trong ngày",
    icon: <FaMoneyBillAlt size={40} />,
    amount: textToCurrency(1000000),
  },
  {
    label: "Số lượng thuốc hết hạn",
    icon: <RiPassExpiredFill size={40} />,
    amount: "12",
  },
];

const Dashboard = () => {
  const columns: Array<ColumnProps<Customer>> = [
    {
      key: "name",
      title: "Tên",
    },
    {
      key: "gender",
      title: "Giới tính",
    },
    {
      key: "phone",
      title: "Số điện thoại",
      render: (_, record) => {
        return <div className="text-blue-500 font-bold">{record.phone}</div>;
      },
    },
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            className="flex flex-col items-center gap-4 bg-white rounded-lg p-6"
            key={card.label}
          >
            <div>{card.icon}</div>
            <span className="font-bold">{card.label}</span>
            <div className="text-2xl font-bold">{card.amount}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-row mt-6">
        <div className="basis-3/4">
          <BarChart type={"column"} />
        </div>
        <div className="bg-white basis-1/4 rounded-lg">
          <Table data={customers} columns={columns} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

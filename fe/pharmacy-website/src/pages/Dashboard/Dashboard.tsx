import { FaMoneyBillAlt, FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { RiPassExpiredFill } from "react-icons/ri";
import { textToCurrency } from "../../utils/currency";

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
      <div>
        
      </div>
    </>
  );
};

export default Dashboard;

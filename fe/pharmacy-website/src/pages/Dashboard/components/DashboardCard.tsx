interface DashboardCardProps {
  label: string;
  icon: React.ReactNode;
  amount: number;
}

const DashboardCard = ({ label, amount, icon }: DashboardCardProps) => {
  return (
    <>
      <div>
        <div>{icon}</div>
        <div>{label}</div>
        <div>{amount}</div>
      </div>
    </>
  );
};

export default DashboardCard;

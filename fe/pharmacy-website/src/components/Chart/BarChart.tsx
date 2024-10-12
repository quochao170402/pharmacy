import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

type BarChartType = "row" | "column";

interface BarChartProps {
  type: BarChartType;
}

const BarChart = ({ type }: BarChartProps) => {
  const data = [
    {
      label: "category A",
      value: 10,
    },
    {
      label: "category B",
      value: 18,
    },
    {
      label: "category C",
      value: 13,
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "bar",
    },
    series: [
      {
        data:
          type === "column"
            ? data.map((item) => ({
                x: item.label,
                y: item.value,
              }))
            : data.map((item) => ({
                x: item.value,
                y: item.label,
              })),
      },
    ],
    xaxis: {
      categories: data.map((item) => {
        console.log("item :>> ", item);

        return type === "column" ? item.label : item.value;
      }),
      labels: {
        show: true,
      },
      title: {
        text: "Thống kê doanh thu ngày",
      },
    },
    dataLabels: {
      //Show in column name
      enabled: true,
      formatter: function (value) {
        return `${value}`;
      },
    },
    tooltip: {
      enabled: true,
    },
  };

  return (
    <>
      <div>
        <Chart
          options={options}
          series={options.series}
          type="bar"
          height={350}
        />
      </div>
    </>
  );
};

export default BarChart;

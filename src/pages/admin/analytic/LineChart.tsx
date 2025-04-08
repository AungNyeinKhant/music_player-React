import { FC, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { registerChartComponents } from "../../../utils/chart";

// Register chart components on component mount
useEffect(() => {
  registerChartComponents();
}, []);

interface LineChartProps {
  labels: string[];
  data: number[];
  title: string;
  xAxisTitle: string;
  yAxisTitle: string;
}

const LineChart: FC<LineChartProps> = ({
  labels,
  data,
  title,
  xAxisTitle,
  yAxisTitle,
}) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: title,
        color: "#E5E7EB",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: xAxisTitle,
          color: "#E5E7EB",
        },
        ticks: {
          color: "#9CA3AF",
        },
        grid: {
          color: "rgba(75, 85, 99, 0.2)",
        },
      },
      y: {
        title: {
          display: true,
          text: yAxisTitle,
          color: "#E5E7EB",
        },
        ticks: {
          color: "#9CA3AF",
        },
        grid: {
          color: "rgba(75, 85, 99, 0.2)",
        },
      },
    },
  };

  return (
    <div className='w-full h-full bg-dashboard-primary p-4 rounded-lg shadow-md'>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;

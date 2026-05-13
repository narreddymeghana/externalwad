import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function WeatherChart({ data }) {
  if (!data) return null;

  const labels = data.list.slice(0, 8).map(item =>
    new Date(item.dt * 1000).toLocaleTimeString()
  );

  const temps = data.list.slice(0, 8).map(item => item.main.temp);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temps,
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <h4>Temperature Forecast</h4>
      <Line data={chartData} />
    </div>
  );
}

export default WeatherChart;
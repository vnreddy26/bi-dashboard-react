import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useAnalytics } from "../context/AnalyticsContext";

const ProductLineChart = () => {
  const { filteredProducts } = useAnalytics();

  return (
    <div className="chart-card">
      <h3>Stock Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={filteredProducts.slice(0, 10)}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" hide />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="stock" stroke="#10b981" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductLineChart;

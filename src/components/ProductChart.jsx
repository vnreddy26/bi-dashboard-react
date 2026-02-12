import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useAnalytics } from "../context/AnalyticsContext";

const ProductChart = () => {
  const { filteredProducts } = useAnalytics();

  return (
    <div className="chart-card">
      <h3>Price by Product</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={filteredProducts.slice(0, 10)}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" hide />
          <YAxis />
          <Tooltip />
          <Bar dataKey="price" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductChart;

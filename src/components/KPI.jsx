import { useAnalytics } from "../context/AnalyticsContext";

const KPI = () => {
  const { products } = useAnalytics();

  const totalProducts = products.length;

  const averagePrice =
    products.length > 0
      ? (
          products.reduce((sum, p) => sum + p.price, 0) /
          products.length
        ).toFixed(2)
      : 0;

  return (
    <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
      <div style={{ padding: "20px", border: "1px solid #ccc" }}>
        <h3>Total Products</h3>
        <p>{totalProducts}</p>
      </div>

      <div style={{ padding: "20px", border: "1px solid #ccc" }}>
        <h3>Average Price</h3>
        <p>${averagePrice}</p>
      </div>
    </div>
  );
};

export default KPI;

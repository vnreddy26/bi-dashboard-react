import { useAnalytics } from "../context/AnalyticsContext";

const KpiCards = () => {
  const { filteredProducts } = useAnalytics();

  const totalProducts = filteredProducts.length;
  const avgPrice =
    totalProducts > 0
      ? (
          filteredProducts.reduce((sum, p) => sum + p.price, 0) / totalProducts
        ).toFixed(2)
      : 0;

  const totalStock = filteredProducts.reduce((sum, p) => sum + p.stock, 0);

  return (
    <div className="kpi-container">
      <div className="kpi-card">
        <h4>Total Products</h4>
        <p>{totalProducts}</p>
      </div>

      <div className="kpi-card">
        <h4>Average Price</h4>
        <p>${avgPrice}</p>
      </div>

      <div className="kpi-card">
        <h4>Total Stock</h4>
        <p>{totalStock}</p>
      </div>
    </div>
  );
};

export default KpiCards;

import { useAnalytics } from "../context/AnalyticsContext";

const CategoryDropdown = () => {
  const { products, categoryFilter, setCategoryFilter } = useAnalytics();

  // Extract unique categories
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    <div style={{ marginBottom: "20px" }}>
      <label>Filter by Category: </label>
      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;

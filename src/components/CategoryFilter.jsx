import { useAnalytics } from "../context/AnalyticsContext";

const CategoryFilter = () => {
  const { categories, selectedCategory, setSelectedCategory, loading, error } =
    useAnalytics();

  if (loading) return <div className="loading">Loading data...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;

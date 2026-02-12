import { createContext, useContext, useEffect, useState } from "react";

const AnalyticsContext = createContext();

export const AnalyticsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        setProducts(data.products);
        setFilteredProducts(data.products);

        const uniqueCategories = [
          "all",
          ...new Set(data.products.map((p) => p.category)),
        ];
        setCategories(uniqueCategories);

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((p) => p.category === selectedCategory);
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  return (
    <AnalyticsContext.Provider
      value={{
        products,
        filteredProducts,
        categories,
        selectedCategory,
        setSelectedCategory,
        loading,
        error,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => useContext(AnalyticsContext);

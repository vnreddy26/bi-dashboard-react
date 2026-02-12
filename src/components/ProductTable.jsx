import { useAnalytics } from "../context/AnalyticsContext";

const ProductTable = () => {
  const { products } = useAnalytics();

  return (
    <div>
      <h3>Product List</h3>

      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;

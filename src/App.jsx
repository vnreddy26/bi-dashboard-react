import { AnalyticsProvider } from "./context/AnalyticsContext";
import DashboardLayout from "./components/DashboardLayout";
import CategoryFilter from "./components/CategoryFilter";
import KpiCards from "./components/KpiCards";
import ProductChart from "./components/ProductChart";
import ProductLineChart from "./components/ProductLineChart";

function App() {
  return (
    <AnalyticsProvider>
      <DashboardLayout>
        <CategoryFilter />
        <KpiCards />
        <ProductChart />
        <ProductLineChart />
      </DashboardLayout>
    </AnalyticsProvider>
  );
}

export default App;

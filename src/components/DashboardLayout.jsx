const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Business Intelligence Dashboard</h1>
        <p>Product Analytics Overview</p>
      </header>
      {children}
    </div>
  );
};

export default DashboardLayout;

export const Dashboard = ({ role }: { role: string }) => {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <p>My role: {role}</p>
    </div>
  );
};

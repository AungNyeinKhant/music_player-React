import { FC } from "react";
import AdminDashboard from "../../layouts/AdminDashboard";
import LineChart from "./analytic/LineChart";

const Home: FC = () => {
  // Dummy data for demonstration
  const monthlyListeners = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    data: [1200, 1900, 3000, 5000, 4200, 6800],
  };

  return (
    <AdminDashboard>
      <div className='space-y-6'>
        <div className='bg-dashboard-primary p-4 md:p-8 rounded-lg shadow-md'>
          <h1 className='text-3xl font-bold mb-6'>
            Welcome from admin Dashboard
          </h1>
          <p className='text-dashboard-primaryDarkText'>
            Manage your music, albums, and tracks from this dashboard.
          </p>
        </div>

        <div className='h-[400px]'>
          <LineChart
            labels={monthlyListeners.labels}
            data={monthlyListeners.data}
            title='Monthly Active Listeners'
            xAxisTitle='Month'
            yAxisTitle='Number of Listeners'
          />
        </div>
      </div>
    </AdminDashboard>
  );
};

export default Home;

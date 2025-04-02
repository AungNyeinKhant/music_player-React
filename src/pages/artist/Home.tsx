import { FC } from "react";
import Dashboard from "../../layouts/Dashboard";

const Home: FC = () => {
  return (
    <Dashboard>
      <div className='bg-dashboard-primary p-4 md:p-8 rounded-lg shadow-md'>
        <h1 className='text-3xl font-bold mb-6'>
          Welcome from Admin Dashboard
        </h1>
        <p className='text-dashboard-primaryDarkText'>
          Manage your music, albums, and tracks from this dashboard.
        </p>
      </div>
    </Dashboard>
  );
};

export default Home;

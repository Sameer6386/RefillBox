import Dashboard from "../../../components/Admin";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import Contact from "../../../components/Contact";

const AdminDashboard = () => {
  return (
    <main>
      <Breadcrumb pageName="Admin Dashboard" />
      <Dashboard />
      <Contact />
    </main>
  );
};

export default AdminDashboard;

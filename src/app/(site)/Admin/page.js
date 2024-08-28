import AdminDashboardContent from "../../../components/Admin";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import Contact from "../../../components/Contact";

const AdminDashboard = () => {
  return (
    <main>
      <Breadcrumb pageName="Admin Dashboard" />
      <AdminDashboardContent />
      <Contact />
    </main>
  );
};

export default AdminDashboard;

import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header/Header';
import Footer from '../components/footer/Footer';

function ClientLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header role="client" />
      <main className="flex-grow-1 layout-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default ClientLayout;

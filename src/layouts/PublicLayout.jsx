import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header/Header';
import Footer from '../components/footer/Footer';

function PublicLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header role="visitor" />
      <main className="flex-grow-1 layout-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default PublicLayout;

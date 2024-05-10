import { Outlet } from 'react-router-dom';
import Header from '../../widgets/header/ui/Header';
import './layout.css';
import Footer from '../../widgets/footer/ui/Footer';
import Subscribe from '../../widgets/subscribe/ui/Subscribe';

const layout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container main__container">
          <Outlet />
        </div>
      </main>
      <Subscribe />
      <Footer />
    </>
  );
};

export default layout;

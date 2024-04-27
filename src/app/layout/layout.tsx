import { Outlet } from 'react-router-dom';
import Header from '../../widgets/header/ui/Header';

const layout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};

export default layout;

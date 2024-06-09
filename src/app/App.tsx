import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import About from '../pages/About/About';
import NotFound from '../pages/NotFound/NotFound';
import Layout from './layout/layout';
import '../app/styles/App.css';
import Contact from '../pages/Contact/Contact';
import FAQ from '../pages/FAQ/FAQ';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/faq',
        element: <FAQ />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

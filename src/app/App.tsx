import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import About from '../pages/About/About';
import NotFound from '../pages/NotFound/NotFound';
import Layout from './layout/layout';
import '../app/styles/App.css';

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

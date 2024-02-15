import {useState,useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NotFound from './pages/404.jsx';
import Home from './pages/Home.jsx';
import Loading from './pages/Loading.jsx';
import ProductPage from './pages/ProductPage.jsx';
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'product',
        element: <ProductPage />,
      }
    ],
  },
]);

const Root = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching data with a delay
      await new Promise(resolve => setTimeout(resolve, 3000)); // 3 seconds delay
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <RouterProvider router={router}>
      {loading ? <Loading /> : <Routes />}
    </RouterProvider>
  );
};

// Render the Root component once
ReactDOM.createRoot(document.getElementById('root')).render(
  <Root />
);
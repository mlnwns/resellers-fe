import { createBrowserRouter } from 'react-router-dom';
import { PurchasePage } from "../pages/Purchase.page";
import App from '../App';
import ProductFormPage from '../pages/ProductFormPage';
import MainPage from '@/pages/MainPage';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: 'product-form',
        element: <ProductFormPage />,
      },
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: "purchase",
        element: <PurchasePage />,
      },
    ],
  },
]);

export default routes;

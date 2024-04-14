import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <section>Home</section>,
  },
  {
    path: "/products/:id",
    element: <section>Catergories</section>,
  },
  {
    path: "/product/:id",
    element: <section>Product</section>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

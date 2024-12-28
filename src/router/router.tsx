import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Faq from "../pages/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
]);

export default router;

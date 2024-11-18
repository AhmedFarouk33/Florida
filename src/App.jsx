import { RouterProvider } from "react-router-dom";
import { router } from "./Route/Route";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Fabric from "./components/Fabric";
import Konva from "./components/Konva";
import Leaflet from "./components/Leaflet";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "fabric",
        element: <Fabric />,
      },
      {
        path: "konva",
        element: <Konva />,
      },
      { path: "leaflet", element: <Leaflet /> },
    ],
  },
]);

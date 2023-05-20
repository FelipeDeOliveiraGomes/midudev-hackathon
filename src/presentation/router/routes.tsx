import { useRoutes } from "react-router-dom";

import { HomePage } from "../pages";

const Routes: React.FC = () =>
  useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "*", element: <>Not found</> },
  ]);

export default Routes;

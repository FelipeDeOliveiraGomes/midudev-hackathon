import { useRoutes } from "react-router-dom";

import { AnalyticsPage, HomePage } from "../pages";
import { routesRecord } from "./routes-record";

const { ANALYTICS } = routesRecord;

const Routes: React.FC = () =>
  useRoutes([
    { path: "/", element: <HomePage /> },
    { path: ANALYTICS, element: <AnalyticsPage /> },
    { path: "*", element: <>Not found</> },
  ]);

export default Routes;

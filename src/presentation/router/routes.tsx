import { useRoutes } from "react-router-dom";

const Routes: React.FC = () =>
  useRoutes([{ path: "*", element: <>Not found</> }]);

export default Routes;

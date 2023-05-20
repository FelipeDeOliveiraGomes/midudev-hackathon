import { Navigate } from 'react-router-dom';

type Props = {
  auth: any;
  children: React.ReactNode;
  redirectOnFailTo: string;
};

export const PrivateRoute: React.FC<Props> = ({
  auth,
  redirectOnFailTo,
  children,
}) => {
  if (!auth) {
    return <Navigate to={redirectOnFailTo} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;

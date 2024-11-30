import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

// If the route is private & the user is logged in - render the component,
// otherwise render <Navingate> to redirectTo

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

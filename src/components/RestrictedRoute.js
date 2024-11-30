import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

// If the route is restricted & the user is logged in - render a <Navigate> to redirectTo
// otherwise render the component

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

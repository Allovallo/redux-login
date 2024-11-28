import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from './Layout';

const HomePage = lazy(() => import('../pages/Home'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));
const TasksPage = lazy(() => import('../pages/Tasks'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/tasks" element={<TasksPage />}></Route>
      </Route>
    </Routes>
  );
};

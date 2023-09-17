import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Layout } from 'components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/operations';
import PrivateRoute from 'components/specialRoutes/PrivateRoute';
import PublicRoute from 'components/specialRoutes/PublicRoute';
import { selectors } from 'redux/selectors';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const NotFoundPage = lazy(() => import('pages/NotFound'));

function App() {
  const isRefreshing = useSelector(selectors.selectIsRefreshing);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="register"
              element={
                <PublicRoute
                  redirectTo={'/contacts'}
                  component={<Register />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/register" component={<Contacts />} />
              }
            />

            <Route
              path="login"
              element={
                <PublicRoute redirectTo={'/contacts'} component={<Login />} />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;

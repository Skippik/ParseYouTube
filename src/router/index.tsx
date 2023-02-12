import {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

const MainPage = lazy(() => import('../pages/main'));

const AppRouter = () => {
  const routes: string[] = [];

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;

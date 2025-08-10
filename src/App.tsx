import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import { Home } from './pages/Home';

import { MainLayout } from './components/MainLayout';
import { lazy, Suspense } from 'react';
import { Preloader } from './components/Preloader';

// import { CategoryDetailed } from './pages/CategoryDetailed'; // without lazy() and Suspense
const CategoryDetailed = lazy(() => import('./pages/CategoryDetailed'));

const Recipe = lazy(() => import('./pages/Recipe'));

const NotFound = lazy(() => import('./pages/NotFound'));

const About = lazy(() => import('./pages/About'));
const Contacts = lazy(() => import('./pages/Contacts'));

// API
// https://www.themealdb.com/api.php

function App() {
  return (
    <>
      <BrowserRouter basename='/food-shop-react-router-ts'>
        {/* basename используется для указания базового URL, который будет добавляться ко всем маршрутам вашего приложения. */}

        {/* <Header /> */}

        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route
              path='category/:categoryName'
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <CategoryDetailed />
                </Suspense>
              }
            />
            <Route
              path='recipe/:mealId'
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <Recipe />
                </Suspense>
              }
            />
            <Route
              path='about'
              element={
                <Suspense fallback={<Preloader />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path='contacts'
              element={
                <Suspense fallback={<Preloader />}>
                  <Contacts />
                </Suspense>
              }
            />
            <Route
              path='*'
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <NotFound />
                </Suspense>
              }
            />
          </Route>
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import { Home } from './pages/Home';

import { NotFound } from './pages/NotFound';
import { MainLayout } from './components/MainLayout';
import { CategoryDetailed } from './pages/CategoryDetailed';
import { Recipe } from './pages/Recipe';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';

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
              element={<CategoryDetailed />}
            />
            <Route path='recipe/:mealId' element={<Recipe />} />
            <Route path='about' element={<About />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

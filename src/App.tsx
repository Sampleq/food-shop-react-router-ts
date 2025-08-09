import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import { Footer } from './components/Footer';
import { Header } from './components/Header';

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
      <BrowserRouter basename='/'>
        {/* basename используется для указания базового URL, который будет добавляться ко всем маршрутам вашего приложения. */}

        <Header />

        {/* переделать нв MainLayout с Outlet */}
        <MainLayout>
          <Routes>
            <Route index element={<Home />} />
            <Route
              path='category/:categoryName'
              element={<CategoryDetailed />}
            />
            <Route path='recipe/:mealId' element={<Recipe />} />
            <Route path='*' element={<NotFound />} />

            <Route path='about' element={<About />} />
            <Route path='contacts' element={<Contacts />} />
            {/* 
            <Route path='units/:id/:lang?' element={<Unit />} />
            {/* :lang? - необязательный slug *\/}
          */}
          </Routes>
        </MainLayout>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  AnimatePresence,
} from "framer-motion";

import { useLocation }
  from "react-router-dom";

// Layouts  
import MainLayout from '../layouts/MainLayout'
// public pages
import HomePage from '../pages/public/HomePage'
import CollectionPage from '../pages/public/CollectionPage'
import ProductDetailsPage from '../pages/public/ProductDetailsPage'
import ContactPage from '../pages/public/ContactPage'

// protected pages
import CartPage from '../pages/protected/CartPage'
// import OrdersPage from '../pages/protected/OrdersPage'
import ProfilePage from '../pages/protected/ProfilePage'

// auth pages
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'

// route protection
import ProtectedRoute from './ProtectedRoute'
import AuthLayout from '../layouts/AuthLayout'
import WishlistPage from '../pages/protected/WishlistPage'
import NotFoundPage from './../pages/public/NotFoundPage';
import AboutPage from '../pages/public/AboutPage'
import CheckoutPage from './../pages/protected/orders/CheckoutPage';
import OrderDetailsPage from '../pages/protected/orders/OrderDetailsPage';
import PaymentPage from '../pages/protected/PaymentPage';
import OrdersPage from '../pages/protected/orders/OrdersPage';


const AppRoutes = () => {
  const location = useLocation();
  return (

    <AnimatePresence mode="wait">

      <Routes
        location={location}
        key={location.pathname}
      >

        {/* Public routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="collection" element={<CollectionPage />} />
          <Route path="product/:id" element={<ProductDetailsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />

          {/* Protected routes */}
          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route
          path="checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route path='wishlist' element={
          <ProtectedRoute>
            <WishlistPage />
          </ProtectedRoute>
        } />
        {/* <Route path="orders" element={
          <ProtectedRoute>
            <OrdersPage />
          </ProtectedRoute>
        } /> */}
        <Route path='profile'
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route path='/orders'
          element={
            <ProtectedRoute>
              <OrdersPage />
            </ProtectedRoute>
          } />


        <Route path='/orders/:orderId'
          element={
            <ProtectedRoute>
              <OrderDetailsPage />
            </ProtectedRoute>
          }
        />

        <Route path='/payment/:orderId'
          element={
            <ProtectedRoute>
              <PaymentPage />
            </ProtectedRoute>
          }
        />




        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFoundPage />} />



        {/* AUTH LAYOUT */}
        <Route element={<AuthLayout />}>

          <Route
            path="/login"
            element={<LoginPage />}
          />

          <Route
            path="/register"
            element={<RegisterPage />}
          />

        </Route>
      </Routes>

    </AnimatePresence>

  )
}

export default AppRoutes  
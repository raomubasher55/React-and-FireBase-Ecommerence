import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NoPage from './pages/noPage/NoPage.jsx';
import HomePage from './pages/home/HomePage.jsx';
import ProductInfo from './pages/productInfo/ProductInfo.jsx';
import Cart from './pages/cart/CartPage.jsx';
import AllProducts from './pages/allProducts/AllProducts.jsx';
import Login from './components/registration/Login.jsx';
import Signup from './components/registration/Signup.jsx';
import UserDashboard from './components/user/UserDashboard.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import AddProductPage from './pages/admin/AddProductPage.jsx';
import UpdateProductPage from './pages/admin/UpdateProductPage.jsx';
import Try from './pages/admin/Try.jsx';
import ProtectedRouteForUser from './components/protectedRoutes/ProtectedRouteForUser.jsx';
import ProtectedRouteForAdmin from './components/protectedRoutes/ProtectedRouteForAdmin.jsx';
import CategoryPage from './pages/category/CategoryPage.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.jsx';


  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path='product-info/:id' element={<ProductInfo />} />
      <Route path='cart' element={<Cart />} />
      <Route path='all-products' element={<AllProducts />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path="*" element={<NoPage />} />
      <Route path="try" element={<Try />} />
      <Route path='category/:categoryname' element={<CategoryPage />} />
      <Route path='user-dashboard' element={
        <ProtectedRouteForUser>
          <UserDashboard />
        </ProtectedRouteForUser>
      } />
      <Route path='admin-dashboard' element={
        <ProtectedRouteForAdmin>
          <AdminDashboard />
        </ProtectedRouteForAdmin>
      } />
      <Route path='add-product' element={
        <ProtectedRouteForAdmin>
          <AddProductPage />
        </ProtectedRouteForAdmin>
      } />
      <Route path='update-product/:id' element={
        <ProtectedRouteForAdmin>
          <UpdateProductPage />
        </ProtectedRouteForAdmin>
      } />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider  >
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)

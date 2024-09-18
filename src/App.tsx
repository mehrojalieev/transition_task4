import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/home/Home'
import Nav from './layout/nav/Nav'
import AnnouncementBar from './components/announcement-bard/AnnouncementBar'
import ProductDetail from './pages/product-detail/ProductDetail'
import Footer from './layout/footer/Footer'
import Cart from './pages/cart/Cart'
import SearchProducts from './pages/search-products/SearchProducts'
import User from './pages/user/User'
import UserOrders from './pages/user/user-orders/UserOrders'
import UserDetail from './pages/user/user-detail/UserDetail'
import AdminProducts from './pages/admin/admin-products/AdminProducts'
import Admin from './pages/admin/Admin'
import Login from './pages/auth/login/Login'
import Auth from './pages/auth/Auth'
import Register from './pages/auth/register/Register'
import Wishlist from './pages/wishlist/Wishlist'
import AllProducts from './pages/all-products/AllProducts'

function App() {

  return (
    <div className='App'>
      <AnnouncementBar />
      <Nav />
      <Routes>

        <Route path='/auth/' element={<Auth />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

        <Route path='/' element={<Home />} />
        <Route path='product-detail/:id' element={<ProductDetail />} />
        <Route path='cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='search-products/:name' element={<SearchProducts />} />
        <Route path='all-products' element={<AllProducts />} />
        <Route path='/user/' element={<User />} >
          <Route index path='orders' element={<UserOrders />} />
          <Route path='detail' element={<UserDetail />} />
        </Route>

        <Route path='/admin/' element={<Admin />}>
          <Route path='manage-products' element={<AdminProducts />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
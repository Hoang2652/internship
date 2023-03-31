// Pages
import Admin from '@/pages/Admin';
import Login from '@/pages/Login';
import Customer from '@/pages/Customer';
import Profile from '@/pages/Profile';
import Category from '@/pages/Category';
import AddCustomer from '@/pages/Customer/AddCustomer';
import Asset from '@/pages/Asset';
import Product from '@/pages/Product';
import landingPage from '@/pages/LandingPage';

// Public routes
const publicRoutes = [
   { path: '/', component: Admin },
   { path: '/admin/home', component: Admin },
   { path: '/admin/customer', component: Customer },
   { path: '/admin/profile', component: Profile },
   { path: '/admin/category', component: Category },
   { path: '/admin/asset', component: Asset },
   { path: '/admin/product', component: Product },
   { path: '/admin/add-customer', component: AddCustomer },
   { path: '/home', component: landingPage, layout: null },
   { path: '/login', component: Login, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

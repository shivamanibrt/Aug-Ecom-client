import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Login } from './Pages/Login/Login';
import { Register } from './Pages/Admin/Register';
import { Layout } from './Pages/Layout/Layout';
import { Home } from './Pages/Home/Home';
import { EmaiVerification } from './Pages/Admin/EmaiVerification';
import { Dashboard } from './Pages/Dashboard/Dashboard';
import { Products } from './Pages/Products/Products';
import { Catagories } from './Pages/Catagories/Catagories';
import { PaymentMethods } from './Layout/PaymentMethods/PaymentMethods';
import { Users } from './Pages/Users/Users';
import { Orders } from './Pages/Orders/Orders';
import { Reviews } from './Pages/Reviews/Reviews';
import { Settings } from './Pages/Settings/Settings';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* Private pages */}
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='catagories' element={<Catagories />} />
            <Route path='products' element={<Products />} />
            <Route path='paymentMethods' element={<PaymentMethods />} />
            <Route path='users' element={<Users />} />
            <Route path='orders' element={<Orders />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='settings' element={<Settings />} />

            {/* Public Pages */}
            <Route path='/' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='admin/verify-email' element={<EmaiVerification />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;

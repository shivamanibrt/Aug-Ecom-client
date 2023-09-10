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
import { PrivatePages } from './PrivatePage/PrivatePages';
import { Products } from './Pages/Products/Products';
import { AdminLayout } from './Layout/AdminLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* Private route */}
            <Route path='dashboard' element={<PrivatePages ><Dashboard />
            </PrivatePages>} />
            <Route path='products' element={<PrivatePages ><Products />
            </PrivatePages>} />
            <Route path='products' element={<AdminLayout />} />

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

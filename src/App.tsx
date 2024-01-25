import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { lazy } from 'react'
import Loader from './components/Loader';
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Products = lazy(() => import('./pages/Products'));
const Transaction = lazy(() => import('./pages/Transaction'));
const Customers = lazy(() => import('./pages/Customers'));
const NewProduct = lazy(() => import('./pages/Management/NewProduct'));
const ProductManagement = lazy(() => import('./pages/Management/ProductManagement'));
const TransactionManagement = lazy(() => import('./pages/Management/TransactionManagement'));
const BarCharts = lazy(() => import('./pages/charts/BarCharts'));
const LineCharts = lazy(() => import('./pages/charts/LineCharts'));
const PieCharts = lazy(() => import('./pages/charts/PieCharts'));
const Stopwatch = lazy(() => import('./pages/apps/Stopwatch'));
const Coupon = lazy(() => import('./pages/apps/Coupon'));
const Toss = lazy(() => import('./pages/apps/Toss'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Link to='/admin/dashboard'><button>Visit Dashnoard</button></Link>} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/customer" element={<Customers />} />
          <Route path="/admin/transaction" element={<Transaction />} />
          <Route path='/admin/chart/bar' element={<BarCharts/>}/>
          <Route path='/admin/chart/line' element={<LineCharts/>}/>
          <Route path='/admin/chart/pie' element={<PieCharts/>}/>
          <Route path='/admin/app/stopwatch' element={<Stopwatch/>} />
          <Route path='/admin/app/coupon' element={<Coupon/>}/>
          <Route path='/admin/app/toss' element={<Toss/>}/>
        {/* {manage} */}
        <Route path='/admin/product/new' element={<NewProduct />} />
        <Route path='/admin/product/:id' element={<ProductManagement />} />
        <Route path='/admin/transaction/:id' element={<TransactionManagement />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;
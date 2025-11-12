import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import AccountDetails from './pages/AccountDetails/AccountDetails';
import Transactions from './pages/Transactions/Transactions';
import Overview from './pages/Overview/Overview';
import Balances from './pages/Balances/Balances';
import Expenses from './pages/Expenses/Expenses';
import Settings from './pages/Settings/Settings';
import Welcome from './pages/Welcome/Welcome';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Bills from './pages/Bills/Bills';
import Goals from './pages/Goals/Goals';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/overview' element={<Layout><Overview /></Layout>} />
        <Route path='/balances' element={<Layout><Balances /></Layout>} />
        <Route path='/accounts/:id' element={<Layout><AccountDetails /></Layout>} />
        <Route path='/transactions' element={<Layout><Transactions /></Layout>} />
        <Route path='/bills' element={<Layout><Bills /></Layout>} />
        <Route path='/expenses' element={<Layout><Expenses /></Layout>} />
        <Route path='/goals' element={<Layout><Goals /></Layout>} />
        <Route path='/settings' element={<Layout><Settings /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
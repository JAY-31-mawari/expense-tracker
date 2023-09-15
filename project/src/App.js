import React from 'react';
import { Header } from './components/header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/incomeexpense';
import { TransactionList } from './components/Transactionlist';
import { AddTransaction } from './components/addtransaction';
import { GlobalProvider } from './context/globalState';
import './App.css';

const App = () => {
  return (
    <GlobalProvider>
        <Header />
        <div className=''>
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
    </GlobalProvider>
  )
}

export default App

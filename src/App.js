import React from 'react';
import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionHistory } from './components/TransactionHistory';
import { ContextProvider } from './context/GlobalState';

function App() {
  return (
    <ContextProvider>
      <Header/>
      <div className='container'>
      <Balance/>
      <IncomeExpense/>
      <TransactionHistory/>
      <AddTransaction/>
      </div>
    </ContextProvider>
  );
}

export default App;

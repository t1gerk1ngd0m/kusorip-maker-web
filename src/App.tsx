import React from 'react';
import { useQuery, gql } from '@apollo/client';
import logo from './logo.svg';
import './App.css';
import { captureRejectionSymbol } from 'node:events';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {data.rates.map(({ currency, rate }: any) => (
          <div key={currency}>
            <p>{currency}: {rate}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;

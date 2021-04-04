import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import './App.css';
import TopPage from './TopPage'

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={TopPage}/>
      </Router>
    </div>
  );
}

export default App;

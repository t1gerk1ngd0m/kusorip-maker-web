import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import TopPage from './TopPage'

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

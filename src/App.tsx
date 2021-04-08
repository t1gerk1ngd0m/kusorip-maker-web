import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import TopPage from './TopPage'
import NewMemberPage from './NewMemberPage'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <TopPage/>
          </Route>
          <Route path='/rooms/:id'>
            <NewMemberPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

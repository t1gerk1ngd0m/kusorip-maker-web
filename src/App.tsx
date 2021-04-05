import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import TopPage from './TopPage'
import RoomPage from './RoomPage'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <TopPage/>
          </Route>
          <Route path='/rooms/:id'>
            <RoomPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

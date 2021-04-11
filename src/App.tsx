import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import TopPage from './TopPage'
import NewMemberPage from './NewMemberPage'
import RoomMemberPage from './RoomMemberPage'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/rooms/:id/members/new'>
            <NewMemberPage/>
          </Route>
          <Route path='/rooms/:id/members/:memberId'>
            <RoomMemberPage/>
          </Route>
          <Route exact path='/'>
            <TopPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import button from './components/user-profile/user-profile.js';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import EditUser from './components/edit-user.component';
import CreateUser from './components/create-user.components.js';

function App() {
  return (
    <Router>
      <Route path='/signup' component={CreateUser} />
      <Route path='/edit/:id' component={EditUser} />
      <Route path='/profile/username' component={button} />
    </Router>
  );
}

export default App;

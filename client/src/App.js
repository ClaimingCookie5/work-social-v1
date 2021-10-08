import "./App.css";
// import button from "./components/user-profile/user-profile.js";

import { BrowserRouter as Router, Route } from "react-router-dom";

import EditUser from "./components/edit-user.component";
import CreateUser from "./components/create-user.components.js";
import ProfilePage from "./components/user-profile/profile-page.component";
import SendGiftForm from "./components/user-profile/send-gift.component";

function App() {
  return (
    <Router>
      <Route path="/signup" component={CreateUser} />
      <Route path="/edit/:id" component={EditUser} />
      {/* <Route path="/profile/username" component={button} /> */}
      <Route path="/profile" component={ProfilePage} />
      <Route path="/profile/sendgift" component={SendGiftForm} />
    </Router>
  );
}

export default App;

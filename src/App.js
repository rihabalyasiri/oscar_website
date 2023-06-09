
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from "react-router"
import EventListPage from "./pages/EventListPage"
import EventPage1 from './pages/EventPage1';
import EventPage2 from "./pages/EventPage2"
import BioPage from './pages/BioPage';
import ContactPage from './pages/ContactPage';
import VideoPage from "./pages/VideoPage"

function App() {
  return (
    <div>

      <BrowserRouter>

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/events" exact component={EventListPage} />
          <Route path="/lioret_de_mare" exact component={EventPage1} />
          <Route path="/event2" exact component={EventPage2} />
          <Route path="/videos" exact component={VideoPage} />
          <Route path="/about_us" exact component={BioPage} />
          <Route path="/contact" exact component={ContactPage} />
        </Switch>

      </BrowserRouter>
    </div>

  );
}

export default App;

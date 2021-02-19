import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  HomePage from "./screens/HomePageScreen";
import InfoScreen from "./screens/InfoScreen";
import RocketDetailScreen from "./screens/RocketDetailScreen";
import LaunchesDetailScreen from "./screens/LaunchesDetailScreen";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/info" exact>
        <InfoScreen />
      </Route>
      <Route path="/rockets/:rocketId">
        <RocketDetailScreen />
      </Route>
      <Route path="/launches/:flight_number">
        <LaunchesDetailScreen />
      </Route>

    </Switch>
  );
  return (
    <div>
    <Router>
    {routes}
    </Router>
    </div>
    
    
  );
}

export default App;

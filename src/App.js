import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  HomePage from "./screens/HomePage";
import  SpacexInfo from "./data/SpacexInfo";

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" exact>
      <HomePage />
      </Route>

      <Route path="/info" exact>
      <SpacexInfo />
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

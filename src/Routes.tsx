import { Route, Switch } from "react-router-dom";
import Cats from "./pages/Cats";
import UserDetails from "./pages/CatDetails";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route component={Cats} path="/cats" exact />
      <Route component={UserDetails} path="/cats/:id" exact />
    </Switch>
  );
};

export default Routes;

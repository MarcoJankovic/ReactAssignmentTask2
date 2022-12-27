import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"; // The Home component has an index attribute. That specifies this route as the default route for the parent route.
import Welcome from "./components/Welcome";
import About from "./components/About";
import Person from "./components/Person";
import NotFound from "./components/NotFound"; // Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.

const DemoRouter = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/person">
            <Person />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default DemoRouter;

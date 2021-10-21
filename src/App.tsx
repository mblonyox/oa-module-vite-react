import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Help from "./screens/Help";
import Home from "./screens/Home";

import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";

function App() {
  return (
    <Router>
      <DefaultLayout
        title="Sample Module"
        menus={[
          {
            title: "Home",
            to: "/",
            icon: HomeIcon,
          },
          "spacer",
          {
            title: "Help",
            to: "/help",
            icon: HelpIcon,
          },
        ]}
      >
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
        </Switch>
      </DefaultLayout>
    </Router>
  );
}

export default App;

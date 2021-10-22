import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Help from "./pages/Help";
import Home from "./pages/Home";

import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";

function App() {
  return (
    <Router basename={import.meta.env.VITE_APP_BASEPATH}>
      <AppLayout
        title={import.meta.env.VITE_APP_TITLE}
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
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AppLayout>
    </Router>
  );
}

export default App;

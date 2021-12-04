//file: src/webpages/index.jsimport React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Home from "./home";
import Youtube from "./youtube";
import Twitch from "./twitch";
import Login from "./login";
const Webpages = () => {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/twitch" component={Twitch} />
      <Route exact path="/youtube" component={Youtube} />
      <Route exact path="/login" component={Login} />
    </HashRouter>
  );
};
export default Webpages;

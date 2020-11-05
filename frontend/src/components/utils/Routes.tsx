import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));
const Auth = lazy(() => import("pages/Auth"));

export default function Routes(): JSX.Element {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth/:type" component={Auth} />
      </Switch>
    </Suspense>
  );
}

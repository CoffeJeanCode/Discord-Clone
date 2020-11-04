import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));

export default function Routes(): JSX.Element {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  );
}

import { ReactNode } from "react";
import { Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";

const RouteComponent: ReactNode = (
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/:search" element={<Home />} />
  </Route>
);

export default RouteComponent;

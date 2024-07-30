import {
  createBrowserRouter,
  createRoutesFromElements,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import RouteComponent from "../route";

const routeComponent: RouteObject[] = createRoutesFromElements(RouteComponent);
const route = createBrowserRouter(routeComponent);

const RoutesProvider = () => {
  return <RouterProvider router={route} />;
};

export default RoutesProvider;

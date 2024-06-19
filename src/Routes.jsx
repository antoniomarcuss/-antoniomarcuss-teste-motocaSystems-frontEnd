import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/components/Layout";

import Edit from "./pages/Home/Edit";
import Register from "./pages/Home/Register";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="edit/:motorcycleId" element={<Edit />} />
    </Route>
  )
);
function Routes() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <RouterProvider router={browserRouter} />
    </QueryClientProvider>
  );
}

export default Routes;

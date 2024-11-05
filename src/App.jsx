import NavigationBar from "./components/NavigationBar";
// * imports for app routing
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Home from "../src/pages/Home";
import About from "../src/pages/About";
import FindUs from "../src/pages/FindUs";

function App() {
  // Root Variable
  const Root = () => {
    return (
      <>
        <div>
          <NavigationBar />
        </div>
        <div className="min-h-screen">
          <Outlet />
          {/* TODO --- add Footer */}
          {/* <Footer/>  */}
        </div>
      </>
    );
  };

  // router variable
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="find-us" element={<FindUs />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

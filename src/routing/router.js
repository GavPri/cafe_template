// router.js
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import About from "./pages/About";
import FindUs from "./pages/FindUs";

// Root Component
const Root = () => {
  return (
    <>
      <div>
        <NavigationBar />
      </div>
      <div className="min-h-screen">
        <Outlet />
        {/* TODO --- add Footer */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

// Router configuration
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="find-us" element={<FindUs />} />
    </Route>
  )
);

export default router;

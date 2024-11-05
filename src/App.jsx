import NavigationBar from "./components/NavigationBar";
// * imports for app routing
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {
  // Root Variable
  const Root = () => {
    return <></>;
  };
  return (
    <div>
      <NavigationBar />
    </div>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";

function App() {

  return (
    <>
      <Navigation />
        <Outlet />
    </>
  );
}

export default App;

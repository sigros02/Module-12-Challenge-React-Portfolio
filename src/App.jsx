import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="d-flex flex-column ">
      <Header />
      <main className="flex-grow-1 d-flex justify-content-center align-items-center">
          <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import MainLayout from "./pages/layout/Layout";
import Home from "./pages/home";

function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
          <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import CustomNav from "./components/navbar/navbar";
import HomePage from "./pages/homePage/homePage";

function App() {
  return (
    <div className="App">
      <Header />
      <CustomNav />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;

import Header from "./Header";
import ProductCard from "./ProductCard";
import SideBar from "./SideBar";
import Footer from "./Footer";
import Nav from "./nav";
import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Nav />
      <div className="flex flex-1">
      <SideBar />
      <ProductCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;

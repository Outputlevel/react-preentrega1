import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarTest from './Navbar.jsx';
import Slider from './itemListContainer.jsx'

function App() {
  return (
    <>
    <NavbarTest category1="Sedan" category2="SUV" category3="Pick Up" category4="Convertible"/>   
    <Slider category1="Sedan" category2="SUV" category3="Pick Up"/>
    </>
    
  );
}

export default App;

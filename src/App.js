import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarTest from './Components/Navigation/index.jsx'
import ArchiveWrapper from './Components/Archives/index.jsx';
{/*import Slider from './itemListContainer.jsx'*/}


function App() {
  return (
    <>
    <NavbarTest category1="Sedan" category2="SUV" category3="Pick Up" category4="Convertible"/>   
    {/*<Slider category1="Sedan" category2="SUV" category3="Pick Up"/>*/}
    
    <div className="container-fluid mx-auto row">
      <div className="sidebar col-2"></div>
      <ArchiveWrapper/>
    </div>
    </>
  );
}

export default App;

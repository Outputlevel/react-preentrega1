import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarMain from './Components/Navigation/index.jsx'
import CardArchive from './Pages/itemListContainer/index.jsx';
{/*import Slider from './itemListContainer.jsx'*/}


function App() {
  return (
    <>
       
    {/*<Slider category1="Sedan" category2="SUV" category3="Pick Up"/>*/}
    
    <div className="container-fluid mx-auto row">
      <div className="sidebar col-2 row"></div>
      <CardArchive />
    </div>
    </>
  );
}

export default App;


import './App.css';
import Formulario from './module/Formulario'
import Productos from './module/Productos' 
function App() {

    return (
         

    <div className="App">
            <div class="row justify-content-center">
               

                <div className="col-lg-4 order-lg-last ">
                    <Productos />

                </div>
                <div className="col-lg-2 h-25 ">
                    <br />
                    <br />
                    <br />
                </div>
                <div className="col-lg-6 order-lg-first">
                    <Formulario />
                </div>
            
          </div>
    </div>
  );
}

export default App;

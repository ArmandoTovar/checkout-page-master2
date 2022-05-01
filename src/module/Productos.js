import Producto from './Producto'
import photo1 from '../assets/photo1.png'
import photo2 from '../assets/photo2.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext} from 'react';

const Name = createContext();
const productos = [{
    id: 0,
    item: 'Vintage Backbag',
    precio: 94.99,
    descuento: 54.99,
    image: photo1
},
{
    id: 1,
    item: 'Levi Shoes',
    precio: 124.99,
    descuento: 74.99,
    image: photo2
}

];
const  y = productos.map(function () {
    return 0;
});
class Productos extends React.Component {

     
    state = {
        total: y,
        ftotal:0
    }
    handleCallback = ([idg, countg]) => {
        const { total } = this.state;
        
        let sum=0;
        let x = productos.map(function () {
            return 0;
        });
       
        for (let i = 0; i < productos.length; i++) {
            if (idg === i) {
                x[i] = countg;
                sum += countg;
            } else {
                sum += total[i];
                x[i] = total[i];
            }
        }
      
        this.setState({
            total: x,
            ftotal: sum


        })
    }
    render() {
        const {ftotal} = this.state;
        return (
            <div className="container rounded-6 btn-light" >
                <ul className="list-unstyled">{
                    productos.map(producto => (
                        <li className="media" key={"Elemento" + producto.id}>
                            <Producto id={producto.id} item={producto.item} precio={producto.precio} desc={producto.descuento} image={producto.image} parentCallback={this.handleCallback} />
                        </li>
                    ))
                }</ul>
                <hr />
               <div className="row">
                    <h5 className="col-7">Shipping</h5> <h5 className="col-5">{(ftotal * 0.16).toFixed(2)} $</h5>
               </div>
                <hr />
                <div className="row">
                    <h5 className="col-7">Total</h5> <h5 className="col-5" id="total">{(ftotal*1.16).toFixed(2)} $</h5>
                </div>
                <Name.Provider value={ftotal}>
                  
                </Name.Provider>
              
            </div>

        );
    }



}
export default Productos;
export { Name };

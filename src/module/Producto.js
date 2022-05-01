
import 'bootstrap/dist/css/bootstrap.min.css';
import './Producto.css'
import React from 'react';

class Producto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }



    handleClick(e) {
        const con = e === "ma" ? this.state.count + 1 : this.state.count - 1;
       
        if (con >= 0) {
            this.setState({ count: con })
         
            this.props.parentCallback([this.props.id, this.props.desc*con]);
        };
        
        
    }
render() {
    return (

        <div className="row d-flex total">

            <div className="container flex-shrink-0 col-6">
                <img src={this.props.image} alt="Sample" className="img-thumbnail" />
            </div>
            <div className=" container flex-grow-1  col-4">
                <h5 className="mt-0">{this.props.item}</h5>
                <h6 className="mb-0">{this.props.desc}$<small className="text-muted text-decoration-line-through"><i>{this.props.precio}</i></small>
                </h6>
                <form>
                    <div className="NumBot">

                        <div className=" row align-items-center w-75 sinfondo ">
                            <button type="button" onClick={() => { this.handleClick("me") }} value="menos" className="botonpeq col col-lg-2"><p className="despla">-</p></button>
                            <input type="number" disabled min="0" value={this.state.count} className=" col" />
                            <button type="button" onClick={() => { this.handleClick("ma") }} value="mas" className=" botonpeq col col-lg-2"><p className="despla">+</p></button>
                        </div>


                    </div>



                </form>

            </div>
        </div>

    );
}


}

export default Producto;

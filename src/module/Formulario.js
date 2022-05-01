import React from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Formulario.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Name } from './Productos';

class Formulario extends React.Component {
	static contextType = Name;
	constructor(props) {
		super(props);
		this.state = {country: '', name: '', phone: '', email: '', address: '', city: '', postalCode: '', saveInf: false};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(event) {
		const target = event.target;
		const name = target.name;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		
		this.setState({
			[name]: value
		});
		
	}
	selectCountry(val) {
		this.setState({ country: val });
	}

	handleSubmit(event) {
		alert(' Process Complete '+this.state.name+' Total:' + document.getElementById('total').textContent);
		event.preventDefault();
	}
	render() {
		const { country } = this.state;
		return (

		

			<div className="moduloForm">
				
				<h1> Checkout</h1>
				<form onSubmit={this.handleSubmit}>
					
					<p>Contac information </p>
					<div className="form-row">


						<label htmlFor="email" >E-mail:</label>
						<div className="input-group ">	
							<span className="input-group-text "><i className="bi bi-envelope" aria-hidden="true"></i></span>
							<input type="email" name="email" id="email" placeholder="Enter your email..." onChange={this.handleInputChange} className="form-control" />						
						</div>
						<label htmlFor="phone">Phone:</label>
						<div className="input-group ">
							<span className="input-group-text "><i className="bi bi-telephone-fill" aria-hidden="true"></i></span>
							<input type="text" name="phone" id="phone" placeholder="Enter your phone..." onChange={this.handleInputChange} className="form-control"  />
						</div>
					</div>
					<p> Shipping address</p>
					<label htmlFor="name">Full Name:</label>
					<div className="input-group">
						<span className="input-group-text "><i className="bi bi-person-circle" aria-hidden="true"></i></span>
						<input type="text" name="name" id="name" placeholder="Enter your Full Name.." onChange={this.handleInputChange} className="form-control" />
					</div>
					<label htmlFor="address">Address:</label>
					<div className="input-group">
						<span className="input-group-text "><i className="bi bi-house-door-fill" aria-hidden="true"></i></span>
						<input type="text" name="address" id="address" placeholder="Your address.." onChange={this.handleInputChange} className="form-control" />
					</div>
					<label htmlFor="city">City:</label>
					<div className="input-group">
						<span className="input-group-text "><i className="bi bi-building" aria-hidden="true"></i></span>
						<input type="text" name="city" id="city" placeholder="Your city.." onChange={this.handleInputChange} className="form-control" />
						</div>


					<div className="form-row">
						
						<div className="form-group col-6 d-inline-block">
							<label htmlFor="country">Country:</label>

							<div className="input-group">
								<span className="input-group-text "><i className="bi bi-globe" aria-hidden="true"></i></span>
								<CountryDropdown name="country"
									value={country}
										onChange={(val) => this.selectCountry(val)}
									className="form-control" id="country" />
							
								</div>
						</div>
						
						<div className="form-group col-6 d-inline-block">
							<label htmlFor="postalCode">Postal code:</label>
							<div className="input-group">
								<span className="input-group-text "><i className="bi bi-mailbox2" aria-hidden="true"></i></span>
								<input type="text" name="postalCode" id="postalCode" placeholder="Your postal code.." onChange={this.handleInputChange} className="form-control" />
							</div>
						</div>
					</div>



					<div className="input-form">
				
						<input
							name="saveInf"
							type="checkbox"
							checked={this.state.saveInf}
							onChange={this.handleInputChange}
							className="form-check-input" id="saveInf" />
						<label htmlFor="saveInf">Save this information for next time</label>
					</div>

						<input type="submit" value="Continue" className=" btn btn-warning" />
				
				</form>
		


			</div>


		);
	}
}
export default Formulario;


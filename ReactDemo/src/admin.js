import React from 'react';
import Notice from './notice';

class Admin extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name : "Ritesh",
			role : "Admin",
			city : "New Delhi",
			country : "India"
		};
	}
	render(){
		return(
			<div>
				<Notice/>
				<h4>Admin Details:-</h4>
				<h5><address>Name: {this.state.name} <br/>
					City: {this.state.city} <br/>
					Country: {this.state.country}<br/>
					Role: {this.state.role}
					</address>
				</h5>
			</div>
		)
	}
}

export default Admin;
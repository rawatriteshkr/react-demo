import React from 'react';

class Registration extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			firstname : '',
			lastname : ''
		};

	}

	myChangeHandler = (event) => {
		let nam = event.target.name;
		let val = event.target.value;
		this.setState({[nam]:val});
	}
	render(){
		return(
			<form>
				<div>
				<h1>Hello {this.state.firstname} {this.state.lastname} from {this.props.country}</h1>
				<label>First Name: </label>
				<input id='fname' name='firstname' type="text" onChange={this.myChangeHandler}/>
				<br/>
				<label>Last Name: </label>
				<input id='lname' name='lastname' type="text" onChange={this.myChangeHandler}/>
				<br/>
				<input id='btn' type='submit' />
				</div>
			</form>
		)
	}
}

export default Registration;
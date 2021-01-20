import React from 'react';
import ReactDOM from 'react-dom';
//import Admin from './admin';
//import Registration from './registration';
//import TriangleArea from './area_triangle';
//import CurrentDateTime from './current_day_time';
import Print from './current_window_print';

//const countryName = "India";

class App extends React.Component{
	render(){
		return(
			/*<div>
				<h1>{this.props.countryCitizen} Candidate Registration Form</h1>
				<hr/>
				<Admin/>
				<hr/>
				<Registration country={countryName}/>
			</div>*/
			/*<div>
				<TriangleArea/>
			</div>
			<div>
				<CurrentDateTime/>
			</div>*/
			<div>
				<Print/>
			</div>
		)
	}
}

//ReactDOM.render(<App countryCitizen="Indian"/>, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));

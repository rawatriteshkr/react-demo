// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. 
import React from 'react';

class FindSunday extends React.Component{

	findSunday = () =>{
		var currentYear = '';
		for(let year=2014; year<=2050; year++){
			var day = new Date(year, 0, 1);
			if(day.getDay() === 0){
				currentYear = currentYear + '<p>' + '1st January is being a Sunday ' + year + '</p>';
			}
		}
		document.getElementById('sunday').innerHTML = currentYear;
	}

	render(){
		return(
			<html>
				<div>
					<h2>Click on button to find 1st January is being a Sunday between 2014 and 2050.</h2>
					<button type='button' onClick={this.findSunday}>Click</button>
				</div>
				
				<div id='sunday'></div>
			</html>
			
		);
	}
}

export default FindSunday;
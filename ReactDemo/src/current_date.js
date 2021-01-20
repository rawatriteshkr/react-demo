/*Write a JavaScript program to get the current date.  Go to the editor
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/
import React from 'react';

class CurrentDate extends React.Component{

	currentDate = () =>{
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1;
		var yyyy = today.getFullYear();

		if(dd<10){
			dd = '0' + dd;
		}
		if(mm<10){
			mm = '0' + mm;
		}

		document.getElementById('date').innerHTML = mm+'-'+dd+'-'+yyyy+'<br>'
		+mm+'/'+dd+'/'+yyyy+'<br>'
		+dd+'-'+mm+'-'+yyyy+'<br>'
		+dd+'/'+mm+'/'+yyyy

	}

	render(){
		return(
			<div>
				<h3>Click on button to get current date in different formats.</h3>
				<button type='button' onClick={this.currentDate}>CurrentDate</button>
				<p id='date'></p>
			</div>
		);
	}
}

export default CurrentDate;
//Write a JavaScript program to display the current day and time in the following format. 
import React from 'react';

class CurrentDateTime extends React.Component{

	CurrentDateTime = () =>{
		var today = new Date();
		var day = today.getDay();
		var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		var hour = today.getHours();
		var minute = today.getMinutes();
		var second = today.getSeconds();
		var prepand = (hour >= 12) ? 'PM' : 'AM';
		hour = (hour >= 12)? hour - 12: hour;
		if(hour === 0 && prepand === 'PM'){
			if(minute === 0 && second ===0){
				hour = 12;
				prepand = 'Noon';
			}else{
				hour = 12;
				prepand = 'PM';
			}
		}
		if(hour === 0 && prepand === 'AM'){
			if(minute === 0 && second === 0){
				hour = 12;
				prepand = 'Midnight';
			}else{
				hour = 12;
				prepand = 'AM';
			}
		}
		document.getElementById('date_time').innerHTML = "Today is : " + dayList[day] + "." + "<br>"
		+ "Current Time : " + hour + " " + prepand + " : " + minute + " : " + second;

	}

	render(){
		return(
			<div>
				<h2>Click on button to get current date and time.</h2>
				<p id="date_time"></p>
				<button type="button" onClick={this.CurrentDateTime}>Click</button>
			</div>
		);
	}
}

export default CurrentDateTime;
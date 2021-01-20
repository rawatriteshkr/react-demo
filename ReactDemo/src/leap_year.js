//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
import React from 'react';

class LeapYear extends React.Component{

	leapYear = () =>{
		var year = document.getElementById('year').value;
		if(year%100 === 0){
			if(year%400 === 0){
				document.getElementById('print_message').innerHTML = 'Leap Year';
			}else{
				document.getElementById('print_message').innerHTML = 'Not Leap Year';
			}
		}else{
			if(year%4 === 0){
				document.getElementById('print_message').innerHTML = 'Leap Year';
			}else{
				document.getElementById('print_message').innerHTML = 'Not Leap Year';
			}
			
		}
	}

	render(){
		return(
			<div>
				<h3>Find year is a leap year or not.</h3>
				<label for='year'>Year : </label>
				<input id='year' type='text' maxLength='4'></input>
				<button type='button' onClick={this.leapYear}>Click</button>
				<p id='print_message'></p>
			</div>
		);
	}
}

export default LeapYear;
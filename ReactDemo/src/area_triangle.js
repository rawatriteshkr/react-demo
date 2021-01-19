//Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
import React from 'react';

class TriangleArea extends React.Component{

	area = () =>{
		const a = document.getElementById("side1").value;
		const b = document.getElementById("side2").value;
		const c = document.getElementById("side3").value;
		var s = (a+b+c)/2;
		var areaOfTriangle = Math.sqrt(s*(s-a)*(s-b)*(s-c));
		document.getElementById("area").innerHTML = "Area of triangle : " + areaOfTriangle; 

	}

	render(){
		return(
			<form>
				<div>
					<h2>Find Area of Triangle</h2>
				</div>
				<div>
					<label for="side1">Side1</label>
					<input id="side1" type="text" class="triangle"></input><br></br>
					<label for="side2">Side2</label>
					<input id="side2" type="text" class="triangle"></input><br></br>
					<label for="side3">Side3</label>
					<input id="side3" type="text" class="triangle"></input><br></br>
					<button type="button" onClick={this.area}>Area</button>
				</div>
				<div>
					<p id="area"></p>
				</div>
			</form>
		)
	}
}

export default TriangleArea;
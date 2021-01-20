// Write a JavaScript program to print the contents of the current window.
import React from 'react';


class Print extends React.Component{

	printOut = () => {window.print()};
	render(){
		return(
			<div>
				<h2>Click on <span>Print</span> buttton to print content of window.</h2>
				<button type='button' onClick={this.printOut}>Print</button>
			</div>
		);
	}
}

export default Print;
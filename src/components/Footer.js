import React from 'react';
import '../index.css';

function CopyrightStatement() {
	var footerMessage = '© Copyright Atharva Tawde '; 
	var startYear = 2015;
	var currYear = new Date().getFullYear(); 
	footerMessage += startYear == currYear ? startYear : startYear + " - " + currYear;

	return (
		<div className="footer">
			{footerMessage}
			<br />
			All Rights Reserved
		</div>
	)
}

export default CopyrightStatement;
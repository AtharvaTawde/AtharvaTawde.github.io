import React from 'react';
import './index.css';
import CertTableRow from './components/CertificateTableRow.js'
import CopyrightStatement from './components/Footer.js';
import '../src/smoothScrolling.js';

function App() {
	return (
		<div>
			<div className="top">

				<h1 id='name' className="fadeInDown">Atharva Tawde</h1>

				<table className="links">
					<tr>
						<td>
							<a href='https://bit.ly/38SyPSc' rel="noopener noreferrer" target="_blank">Resume</a>
						</td>
						<td>
							<a href='#'>Bruh</a>
						</td>
						<td>
							<a href='#'>Dump</a>
						</td>
					</tr>
				</table>

			</div>

			<div className='statistics'>
				<h2 id="certs">Courses Completed</h2>

				<table className='statistics-container'>
					<CertTableRow img='console' desc="Learn the Command Line Course" date='Oct. 2015' />
					<CertTableRow img='git' desc="Learn Git Course" date='Jan. 2016' />
					<CertTableRow img='namecheap' desc="How to Make a Website with NameCheap Course" date='Mar. 2016' />
					<CertTableRow img='java' desc="Learn Java Course" date='Jun. 2016' />
					<CertTableRow img='sass' desc="Learn Sass Course" date='Jun. 2016' />
					<CertTableRow img='web' desc="How to Deploy a Website Course" date='Jun. 2016' />
					<CertTableRow img='angular' desc="Learn AngularJS 1.X Course" date='Jul. 2016' />
					<CertTableRow img='ror' desc="Learn Authentication with Ruby on Rails Course" date='Jul. 2016' />
					<CertTableRow img='js' desc="Learn to Program in Javascript: Beginner to Pro" date='Jul. 2017' />
					<CertTableRow img='react' desc="Learn React Course" date='Feb. 2018' />
					<CertTableRow img='resdes' desc="Learn Responsive Design Course" date='Mar. 2018' />
					<CertTableRow img='github' desc="Introduction to Git and GitHub" date='Jul. 2020' />
					<CertTableRow img='python' desc="Crash Course On Python" date='Jul. 2020' />
					<CertTableRow img='cloud' desc="Configuration Management and the Cloud" date='Jul. 2020' />
					<CertTableRow img='pyfile' desc="Using Python to Interact with the Operating System" date='Sep. 2020' />
					<CertTableRow img='cockroach' desc="Troubleshooting and Debugging Techniques" date='Feb. 2021' />
					<CertTableRow img='robotarm' desc="Automating Real-World Tasks with Python" date='Feb. 2021' />
				</table>

			</div>

			<div className='projects'>
				<h2>Projects</h2>
				<p>Add Projects Here</p>
			</div>

			<CopyrightStatement />

		</div>
	)
}

export default App;
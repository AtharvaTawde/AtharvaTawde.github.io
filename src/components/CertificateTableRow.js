import React from 'react';
import '../index.css';

// Images
import IconAngular from '../images/angular.png';
import IconCloud from '../images/cloud.png';
import IconCockroach from '../images/cockroach.png';
import IconConsole from '../images/console.png';
import IconGit from '../images/git.png';
import IconGithub from '../images/github.png';
import IconJava from '../images/java.png';
import IconJavascript from '../images/js.png';
import IconNamecheap from '../images/namecheap.png';
import IconPyfile from '../images/pyfile.png';
import IconPython from '../images/python.png';
import IconReact from '../images/react.png';
import IconResponsiveDesign from '../images/resdes.png';
import IconRobotArm from '../images/robotarm.png';
import IconRubyOnRails from '../images/ror.png';
import IconSass from '../images/sass.png';
import IconWeb from '../images/web.png';


function CertificateTableRow({ img, desc, date }) {

	const icons = {
		"angular": 		IconAngular,
		"cloud": 			IconCloud,
		"cockroach": 	IconCockroach,
		"console": 		IconConsole,
		"git": 				IconGit,
		"github": 		IconGithub,
		"java": 			IconJava,
		"js": 				IconJavascript,
		"namecheap": 	IconNamecheap,
		"pyfile": 		IconPyfile,
		"python": 		IconPython,
		"react": 			IconReact,
		"resdes": 		IconResponsiveDesign,
		"robotarm":		IconRobotArm,
		"ror": 				IconRubyOnRails,
		"sass":				IconSass,
		"web":				IconWeb,
	};

	return (
		<tr>
			<td class="icon">
				<img class='img-icon' src={icons[img]} />
			</td>
			<td class='desc'>{desc}</td>
			<td class='date'>{date}</td>
		</tr>
	)
}

export default CertificateTableRow;
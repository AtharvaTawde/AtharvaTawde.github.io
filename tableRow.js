class CustomCertTable extends HTMLElement {

	constructor() {
		super();

		this.innerHTML = `
		
			<tr>
				<td class="icon">
					<img class='img-icon' src="images/${this.getAttribute('icon')}.png" />
				</td>
				<td class='desc'>${this.getAttribute('desc')}</td>
				<td class='date'>${this.getAttribute('date')}</td>
			</tr>

		`;


	}
};

window.customElements.define('table-row', CustomCertTable);
import React from 'react';
import Store from '../store';

export default class Promo extends React.Component {
	constructor() {
		super();
		this.state = {
			contentHidden : true,
			buttonText : "Apply promo code",
			promoLabel : "Promo code",
			promoValue : "",
			itemClass : "item-content"
		}
		
		//Events Binding
		this.toggleContent = this.toggleContent.bind(this);
		this.includePromo = this.includePromo.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	//Events
	toggleContent() {
		if(this.state.contentHidden) {
			this.setState(prevState => ({
				contentHidden: !prevState.contentHidden,
				buttonText : "Hide promo code"
			}));
		} else {
			this.setState(prevState => ({
				contentHidden: !prevState.contentHidden,
				buttonText : "Apply promo code"
			}));
		}
	}

	includePromo() {
		if(this.state.promoValue !== "DISCOUNT") {
			this.setState({
				promoLabel : "Sorry, this code is not applicable.",
				itemClass : "item-content invalid-promo"
			});
		} else {
			this.setState({
				promoLabel : "Promo code",
				itemClass : "item-content"
			});
			Store.addPromo(10);
		}
	}

	handleChange(event) {
		this.setState({
			promoValue: event.target.value
		});
	}
	
	render() {
		return  (<div className="promo-container">
					<span>
						<button className="item-button" onClick={ this.toggleContent }>
							<span className="item-button-text"> { this.state.buttonText } </span>
							<span className="item-button-icon">
								{
									!this.state.contentHidden ? "-" : "+"
								}
							</span>
						</button>
					</span>
					{
						!this.state.contentHidden ?
							<div className={ this.state.itemClass }>
								<label htmlFor="promoInput" className="promo-label">{ this.state.promoLabel }</label>
								<div>
									<input type="text" id="promoInput" className="promo-input" value={ this.state.promoValue } onChange={ this.handleChange }/>
									<button type="submit" className="promo-button" onClick={ this.includePromo }>
										<span>Apply</span>
									</button>									
								</div>
							</div>
						: null
					}
				</div>);
	}
}
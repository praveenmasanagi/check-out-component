import React from 'react';

export default class Item extends React.Component {
	constructor() {
		super();
		this.state = {
			contentHidden : true,
			buttonText : "See item details"
		}
		
		//Events Binding
		this.toggleContent = this.toggleContent.bind(this);
		
	}
	
	//Events
	toggleContent() {
		if(this.state.contentHidden) {
			this.setState(prevState => ({
				contentHidden: !prevState.contentHidden,
				buttonText : "Hide item details"
			}));
		} else {
			this.setState(prevState => ({
				contentHidden: !prevState.contentHidden,
				buttonText : "Show item details"
			}));
		}
	}
	
	render() {
		return  (<div className="item-container">
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
							<div className="item-content">
								<div className="item-thumbnail">
									<img alt="product" src={require('../chair.png')}></img>
								</div>
								<div className="original-content">
									<span>
										{ this.props.sectionContent.name }
									</span>
									<div className="item-extra-details">
										<span className="float-left">
											${ this.props.sectionContent.subtotal.value }
										</span>
										<span className="float-right">
											Qty: { this.props.sectionContent.quantity }
										</span>
									</div>
								</div>
							</div>
						: null
					}
				</div>);
	}
}
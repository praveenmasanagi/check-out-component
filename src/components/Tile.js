import React from 'react';

export default class Tile extends React.Component {
	constructor() {
		super();
		this.state = {
			hover: false
		}
	}
	
	//Events
	handleClick() {
		if(this.props.data.key === "Pickup savings") {
			this.setState({ hover: true });
		}
	}

	handleMouseOut() {
		if(this.props.data.key === "Pickup savings") {
			this.setState({ hover: false });
		}
	}

	render() {
		const tooltipStyle = {
  			display: this.state.hover ? 'block' : 'none'
		}
		return  (<div onMouseOut={this.handleMouseOut.bind(this)} className={ this.props.data.isLastElement ? 'tile last' : 'tile'}>
					<span onClick={this.handleClick.bind(this)} className={this.props.data.key === "Pickup savings" ? 'tile-label pickup-label' : 'tile-label'}>
						<span>{ this.props.data.key }</span>
					</span>
					<div style={tooltipStyle} className="tooltip">Picking up your order in the store helps cut costs, and we pass the savings on to you.</div>
					<span className={this.props.data.value > 0 ? 'tile-value' : 'tile-value discount'}>
						{
							this.props.data.value > 0 ? 
								<span>${ this.props.data.value }</span>
							:
								<span>-${ Math.abs(this.props.data.value) }</span>
						}
					</span>
				</div>);
	}
}
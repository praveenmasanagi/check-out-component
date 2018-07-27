import React from 'react';
import Tile from './Tile';

export default class Section extends React.Component {
	constructor() {
		super();
		this.state = {
		}
	}
	
	render() {
		return  (<div className="tilesContainer">
					<Tile data={ this.props.sectionContent.subtotal } />
					<Tile data={ this.props.sectionContent.pickup } />
					<Tile data={ this.props.sectionContent.tax } />
					{
						this.props.sectionContent.promo.value !== 0 ?
							<Tile data={ this.props.sectionContent.promo } />
						: null
					}
					<Tile data={ this.props.sectionContent.total } />
				</div>);
	}
}
import React from 'react';
import goods from '../db/goods.json';

class Content extends React.Component {
	render() {
		return (
			<ul className="goods flex-center">
				{
					goods.map(function(good){
						return <li className="good" key={good.id}>
									<a href="#"><img className="good-image" src={good.src} alt={good.alt} /></a>
									<div>
										<a href="#" className="good.name">{good.name}</a>
										<p className="good-description">{good.description}</p>
										<p className="good-price">{good.price}</p>
										<button id="good-order">Order</button>
									</div>
						</li>;						
					})
				}
			</ul>
		);
	}
}

export default Content;
import React from 'react';
import popularSmartphones from '../db/popular-smartphones.json';
import smartphones from '../db/smartphones.json';

class Content extends React.Component {
	render() {
		return (
			<main className="container">

				<div className="goods-block">
					<h2>Popular Smartphones</h2>
					<ul className="goods flex-center">
						{
							popularSmartphones.map(function(good){
								return <li className="good" key={good.id}>
									<a href="#" className="good-name">{good.name}</a>
									<a href="#"><img className="good-image" src={good.src} alt={good.alt} /></a>
									<div>
										<p className="good-description">{good.description}</p>
										<p className="good-price">Price: <span>{good.price}$</span></p>
										
										<button id="myBtn good-order">Order</button>
								        <div id="myModal" className="modal">
								        	<div className="modal-content">
								            	<span className="close">&times;</span>
								            	<p>Some text</p>
								          	</div>
								        </div>  
									</div>
								</li>;						
							})
						}
					</ul>
				</div>

				<div className="goods-block">
					<h2>Smartphones</h2>
					<ul className="goods flex-center">
						{
							smartphones.map(function(good){
								return <li className="good" key={good.id}>
									<a href="#" className="good-name">{good.name}</a>
									<a href="#"><img className="good-image" src={good.src} alt={good.alt} /></a>
									<div>
										<p className="good-description">{good.description}</p>
										<p className="good-price">Price: <span>{good.price}$</span></p>
										
										<button id="myBtn good-order">Order</button>
								        <div id="myModal" className="modal">
								        	<div className="modal-content">
								            	<span className="close">&times;</span>
								            	<p>Some text</p>
								          	</div>
								        </div>  
									</div>
								</li>;						
							})
						}
					</ul>
				</div>

			</main>
		);
	}
}

export default Content;
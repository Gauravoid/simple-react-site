import React, {Component} from 	'react';
import {Link} from 'react-router-dom';
import {Jumbotron,Grid,Row,Col,Image,Button} from 'react-bootstrap';
import './Home.css';
export default class Home extends Component {

	render(){
		return (
			<Grid>
			<Jumbotron>
			<h2>Welcome to First React Code Session</h2>
			<p>

			The path of the righteous man is beset on all sides by the iniquities of the 
			selfish and the tyranny of evil men. Blessed is he who, 
			in the name of charity and good will, shepherds the weak through the valley of darkness, 
			for he is truly his brother's keeper and the finder of lost children. 
				And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. 
			And you will know My name is the Lord when I lay My vengeance upon thee.
			</p>
			<Link to="/about">
				<Button bsStyle="info">Go to About</Button>
			</Link>
			</Jumbotron>

			<Row className="show-grid text-center">
				<Col xs={12} sm={4} className="person-wrapper">
				<Image src="assets/person-1.jpg" circle className="profile-pic"/>
				<h3>Frank</h3>
				<p>The path of the righteous man is beset on all sides by the iniquities
				 of the selfish and the tyranny of evil men. </p>
				</Col>
				<Col xs={12} sm={4} className="person-wrapper">
				<Image src="assets/person-2.jpg" circle className="profile-pic"/>
				<h3>Mona</h3>
				<p>The path of the righteous man is beset on all sides by the iniquities
				 of the selfish and the tyranny of evil men. </p>
				</Col>
				<Col xs={12} sm={4} className="person-wrapper">
				<Image src="assets/person-3.jpg" circle className="profile-pic"/>
				<h3>Mark</h3>
				<p>The path of the righteous man is beset on all sides by the iniquities
				 of the selfish and the tyranny of evil men. </p>
				</Col>
			</Row>

			</Grid>
			)
	}
}
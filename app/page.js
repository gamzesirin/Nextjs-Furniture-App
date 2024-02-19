import About from './components/About'
import Best from './components/Best'
import BestSales from './components/BestSales'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import React from 'react'
import Review from './components/Review'
import Section from './components/Section'
import Shop from './components/Shop'

const Home = () => {
	return (
		<React.Fragment>
			<Header />
			<Section />
			<About />
			<Shop />
			<BestSales />
			<Best />
			<Review />
			<Contact />
			<Footer />
		</React.Fragment>
	)
}

export default Home

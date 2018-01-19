
import React from 'react'

import Header from '../header'
import Footer from '../footer'
import GameTypeContent from './GameTypeContent'

class GameType extends React.Component {
	
	render(){
		let {pathname} = this.props.location
		return (
			<div className="main-box">			
				<Header text="分类"/>	
				
				<GameTypeContent/>
				
				<Footer pathname={pathname}/>
			</div>
		)
	}
		
		

	
}

export default GameType
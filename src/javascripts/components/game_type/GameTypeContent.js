
import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import GameTypeActions from '../../../redux/ActionCreators/GameTypeActions'

import GameTypeItem from './GameTypeItem'

class GameTypeContent extends React.Component {
	
	componentWillMount(){
		if(!this.props.GameType.types.length){
			this.props.GameTypeActions.getTypes()
		}
	}
	render(){
		let {types} = this.props.GameType
		console.log(types)
		return (
			<div className="game-type-content">
				{
					types.map(item=>(
						<GameTypeItem data={item} key={item.id}/>
					))
				}
			</div>
		)
	}
		
		

	
}

export default connect(state=>state,dispatch=>{
	return {
		GameTypeActions:bindActionCreators(GameTypeActions,dispatch)
	}
})(GameTypeContent)
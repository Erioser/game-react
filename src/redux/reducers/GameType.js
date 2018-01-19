
const defaultState = {
	types:[]
}

const GameType = (state=defaultState,action)=>{
	let new_state = Object.assign({},defaultState)
	
	switch(action.type){
		
		case 'CHANGE_GAME_TYPES':
			new_state.types = action.types;			
			return new_state;break;
		
		
		default:return new_state;
	}
}

export default GameType
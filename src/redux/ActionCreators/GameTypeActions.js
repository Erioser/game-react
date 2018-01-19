
import axios from 'axios'

import { Toast } from 'antd-mobile';
import formDataConfig from '../../javascripts/utils/formDataConfig'

const GameTypeActions = {
	
	getTypes(){
		return (dispatch)=>{
			formDataConfig.url='/dola/app/game/newgetclasslist'
			formDataConfig.data={page:1}
			axios(formDataConfig).then(({data})=>{
				dispatch({
					type:'CHANGE_GAME_TYPES',
					types:data.data.classList
				})
			})
			
			
		}
	}
	
	
}

export default GameTypeActions

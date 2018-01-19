
import axios from 'axios'

import { Toast } from 'antd-mobile';
import formDataConfig from '../../javascripts/utils/formDataConfig'
import {hashHistory} from 'react-router'

const UserActions = {
	
	loginHandler(data){
		
		return (dispatch)=>{
			formDataConfig.url='/dola/app/user/newlogin'
			formDataConfig.data=data
			let that = this
			axios(formDataConfig).then(({data})=>{
				if(data.code===0){
					Toast.success('登陆成功',1,()=>{			
						//存重要信息到redux
						dispatch({
							type:'CHANGE_USER_INFO',
							userInfo:data.data
						})
						
						localStorage.userInfo = JSON.stringify(data.data)
						
						hashHistory.push('/mine/personal')
						
					},true)
				}else{
					Toast.fail('请重新登陆')
				}
				console.log(data)
				
			})
		}
		
	},
	logoutHandler(data){
		return (dispatch)=>{
			
			dispatch({
				type:'REMOVE_USER_INFO'
			})
			localStorage.removeItem('userInfo')
			hashHistory.push('/mine/login')
			
		}
	}
	
	
}

export default UserActions

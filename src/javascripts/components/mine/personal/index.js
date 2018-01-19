import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import React from 'react'
import Info from './Info'
import UserActions from '../../../../redux/ActionCreators/UserActions'
class Personal extends React.Component {
	
	
	render(){
		console.log(this.props)
		let {userInfo} = this.props.User
		let {logoutHandler} = this.props.UserActions
		return (
			
			<div>
				<Info exit={logoutHandler} info={userInfo}/>
			</div>
			
		)
	}
	
}

export default connect(state=>state,(dispatch)=>{
	return {
		UserActions:bindActionCreators(UserActions,dispatch)
	}
})(Personal)

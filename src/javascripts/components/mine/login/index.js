
import React from 'react'

import Header from '../../header'

import Form from '../../common/form'
import FormInputItem from '../../common/form/FormInputItem'

import { Toast } from 'antd-mobile';
import {hashHistory,Link} from 'react-router'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import UserActions from '../../../../redux/ActionCreators/UserActions'



const LeftBtn = (props)=>(
		<Link to={"/home"} className="left big"><i className="fa fa-angle-left"></i></Link>
)

const RightBtn = (props)=>(
		<Link to={"/mine/register"} className="right text">注册</Link>
)

class Login extends React.Component {
	constructor(props){
		super(props)
		
		this.loginHandler = this.loginHandler.bind(this)
	}
	
	loginHandler(data){		
		this.props.UserActions.loginHandler(data)		
	}
	
	render(){
		console.log(this.props)
		return (
			
			<div>
				<Header 
					left={<LeftBtn/>}
					right={<RightBtn/>}
					text={"登陆"}
				/>
				
				<Form handler={this.loginHandler}>
					<FormInputItem name={"phone"} label={"手机号"}/>					
					<FormInputItem name={"password"} label={"密码"} type={"password"}/>			
				</Form>
				
			</div>
			
		)
	}
	
}


export default connect(state=>state,(dispatch)=>{
	return {
		UserActions:bindActionCreators(UserActions,dispatch)
	}
})(Login)

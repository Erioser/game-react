
import React from 'react'

import Header from '../../header'

import Form from '../../common/form'
import FormInputItem from '../../common/form/FormInputItem'

import { Toast } from 'antd-mobile';
import {hashHistory,Link} from 'react-router'

const LeftBtn = (props)=>(
		<Link to="/mine/login" className="left big"><i className="fa fa-angle-left"></i></Link>
)

class Register extends React.Component {
	constructor(props){
		super(props)
		
		this.registerHandler = this.registerHandler.bind(this)
	}
	
	registerHandler(data){
		
		setTimeout(()=>{
			console.log(data)
			if(Math.random()>0.5){				
				Toast.success('注册成功',1,()=>{
					hashHistory.push('/mine/personal')
				},true)
				
			}else{
				Toast.fail('请重新注册')
			}
		},500)
		
	}
	
	render(){
		return (
			
			<div>
				<Header 
					left={<LeftBtn/>}
					
					text={"注册"}
				/>
				
				<Form handler={this.registerHandler}>
					<FormInputItem name={"phone"} label={"手机"}/>					
					<FormInputItem name={"vali"} label={"验证码"}/>			
					<FormInputItem name={"nickname"} label={"昵称"}/>			
					<FormInputItem name={"password"} label={"密码"} type={"password"}/>			
				</Form>
				
			</div>
			
		)
	}
	
}

export default Register

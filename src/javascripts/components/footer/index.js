

import React,{Component} from 'react'
import {Link} from 'react-router'

class Footer extends Component {
	constructor(props){
		super(props)
        this.state = {
            navs:[
                {id:1,text:'首页',icon:'home',path:'/home'},
                {id:2,text:'榜单',icon:'anchor',path:'/ranking'},
                {id:3,text:'分类',icon:'navicon',path:'/classify'},
                {id:4,text:'我的',icon:'user-o',path:'/mine'},
            ]
        }
	}
	
	render(){
        let {navs} = this.state
        let {pathname} = this.props
		return (
			<footer className="footer">
				{
                    navs.map((item)=>(
                        <Link className={pathname===item.path?'active':''} to={item.path} key={item.id}>
                            <i className={`fa fa-${item.icon}`}></i>
                            <span >{item.text}</span>
                        </Link>
                    ))
                }
			</footer>
		)
		
	}
	
}

export default Footer

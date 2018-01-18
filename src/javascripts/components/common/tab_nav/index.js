

import React,{Component} from 'react'
import {Link} from 'react-router'

class TabNav extends Component {

	render(){
        let {types,activeType} = this.props
        
		return ( 
			<div className="tab-nav">
			{
				types.map(item=>(
					<Link key={item.id} to={'/leaderboard/'+item.type} className={`item ${activeType==item.type?'active':''}`}>{item.text}</Link>
				))
			}
			</div>
		)
		
	}
	
}

export default TabNav

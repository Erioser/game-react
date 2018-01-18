

import React,{Component} from 'react'

import ThemeBox from '../common/theme_box'



class Content extends Component {
		
	render(){
		let {data} = this.props
		return (
			<div>

				{
					data.map(item=>(
						<ThemeBox data={item}  key={item.id}/>
					))
				}
				
			</div>
		)
		
	}
	
}

export default Content




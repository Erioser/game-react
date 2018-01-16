

import React,{Component} from 'react'
import Header from '../header'
import Footer from '../footer'
import Banner from './Banner'
import ClassList from './ClassList'
import axios from 'axios'

const HeaderBtn = (props)=>(
	<a className={props.className}><i className={`fa fa-${props.type}`}></i></a>
)



class Home extends Component {
	constructor(context,props){
		super(context,props)
		this.state={
			data:{
				bannerList:[],
				classList:[]
			},
			count:0
		}
	}

	componentWillMount(){
		
		let that = this
		axios.post('/dola/app/mainpage/newgetmainpagelist', {
            page:1
          })
          .then(function ({data}) {
            that.setState({data:data.data}) 
          })
	}
	
	render(){
		let {pathname} = this.props.location
		let {data,count} = this.state
		return (
			<div>
				
					
				<Header 					
					right={<HeaderBtn className="right" type="search" />}
					text={'首页'}
				/>
				
				<Banner data={data.bannerList}/>

				<ClassList data={data.classList}/>

				<button onClick={()=>{this.setState(({count})=>{return {count:++count}})}}>{count}</button>

				<Footer pathname={pathname} />
			</div>
		)
		
	}
	
}

export default Home




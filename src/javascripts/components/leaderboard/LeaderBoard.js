

import React from 'react'
import Footer from '../footer'
import Header from '../header'
import TabNav from '../common/tab_nav'

import axios from 'axios'

import ThemeBox from '../common/theme_box'
import { ListView } from 'antd-mobile';

//处理数据的方法，将数据形式的数据，处理成对象形式
//因为dataSource只接受对象格式的
function genData(pIndex = 0,data) {
  const dataBlob = {};
  for (let i = 0; i < data.length; i++) {
    const ii = (pIndex * data.length) + i;
    dataBlob[`${ii}`] = data[i]
  }
  return dataBlob;
}
//控制页数的，为什么是默认是1呢，因为初始的第一页的数据，home已经传进来了，不用获取了，所以现在就是第一页
let page = 0


class LeaderBoard extends React.Component {
	constructor(props){
		super(props)
		//创建dataSource数据，这个东东是ListView要用的
	    const dataSource = new ListView.DataSource({
	      rowHasChanged: (row1, row2) => row1 !== row2,
			});
		
	    this.state = {
	      	dataSource:dataSource,
			  isLoading: true,//防止在加载过程中再次加载的开关
			  hasMore:true,//当没有新数据的时候此值为false，阻止获取新数据,
			  type:1
	    };
    
	    //渲染底部的
	    this.renderFooter=this.renderFooter.bind(this)
	}
	
	componentWillReceiveProps(props){
		console.log('切换啦')
	}
	
		//加载初次数据
	  componentDidMount() {
	   
	    let that = this    
	    page++;	    
	    axios({url:'/dola/app/game/newgetgameleaderboard',method: 'post',data:{page,type:this.state.type}}).then(({data})=>{
	    	console.log(data)
	    	let games = data.data.gameList
	    	 this.rData = genData(0,games);
		      this.setState({
		        dataSource: this.state.dataSource.cloneWithRows(this.rData),//将数据放入到datSource
		        isLoading: false,
		      });
	    	
	    })
	  }
	  
	  
	  	//当滑动到底部的时候会执行
	  onEndReached = (event) => {
		  
	   
	    //如果现在正在加载，返回，如果现在已经没有更多数据了，返回
	    if (this.state.isLoading && !this.state.hasMore) {
	     return;
		}
		
		//有更多的数据，且没有在加载，所以可以去加载		
	    let that = this
	    //说明现在正在加载
		this.setState({ isLoading: true });
	    page++
	    //获取数据
	    axios({url:'/dola/app/mainpage/newgetmainpagelist', params:{page,type:this.state.type}})
	    .then(function ({data}) {
	    	let games = data.data.gameList
	    	//如果此次获取到的数据为空数组，说明后面没有数据了
	        if(games.length===0){
	        	page--;
	          //表明加载完了，且没有新数据了
	        	that.setState({
					  isLoading: false,
					  hasMore:false
			      });
			       return;
		    }
	  		//如果获取到有效数据了
	  		//将上次的数据和这次的数据放入到新的数据对象中
	        that.rData = {...that.rData,...genData(page-1,games)};
			
	       //将新数据放入到dataSource中
	        that.setState({
	            dataSource: that.state.dataSource.cloneWithRows(that.rData),
	            isLoading: false
			});
	    })
	  }
	  

	render() {
		let {pathname} = this.props.location
		let {types} = this.props
		let {type:activeType} = this.props.params
		//此函数可以返回要加载的dom结构或者组件并传入数据，接收的rowData参数就是数据
	    const row = (rowData, sectionID, rowID,a,b,c) => {
			return (
				<ThemeBox data={rowData}  key={rowData.id}/>
			); 
	    };
	    
    
    	return (
    		<div className="main-box">
				<Header text={"榜单"}/>
				<TabNav
					types={types}
					activeType={activeType}
				/>
				
				
				<ListView
			        ref={el => this.lv = el}
			        dataSource={this.state.dataSource}
			        
			        renderFooter={this.renderFooter}
			        renderRow={row}
			        
			       
			        
			        useBodyScroll
			        onScroll={() => { console.log('scroll'); }}
			       scrollRenderAheadDistance={500}
			        onEndReached={this.onEndReached}
			        onEndReachedThreshold={10}
			      />
				
				<Footer pathname={pathname}/>
			</div>
      
    	);
  }
  
  renderFooter(){
  	let footerContent = ''
  	if(this.state.isLoading){
  		footerContent= <p className="info-message">正在加载</p>
  	}else {
  		if(!this.state.hasMore){
  			footerContent= <p className="info-message">没有更多数据了</p>
  		}else{
  			footerContent= <p className="info-message">下滑获取更多</p>
  		}
  	}
  	
  	
  	return <div>
  		{footerContent}
  	</div>
  	
  	
  }
	
}


LeaderBoard.defaultProps = {
	types:[
		{id:1,text:'总榜',type:'total'},
		{id:2,text:'新锐',type:'new'},
	]
}

export default LeaderBoard

/* eslint no-dupe-keys: 0 */
import React from 'react'
import axios from 'axios'
import ThemeBox from '../common/theme_box'
import { ListView } from 'antd-mobile';


import renderFooter from '../../utils/renderFooter'


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
let page = 1


class Content extends React.Component {
  constructor(props) {
    super(props);
    //创建dataSource数据，这个东东是ListView要用的
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
		});
	
    this.state = {
      dataSource:dataSource,
		  isLoading: true,//防止在加载过程中再次加载的开关
		  hasMore:true//当没有新数据的时候此值为false，阻止获取新数据
    };
    
  }
  
  
  componentWillReceiveProps(props){
	  //接收到home传递过来的初始化的themlist数据
	  if(this.props.data.length==0&&props.data.length!=0){		  
		  //初始化的数据总共有3条，通过genData函数改装成：
		  this.rData=genData(0,props.data)
		  //{0...,1:....2:...}
		  //将初始化的数据放入到dataSource
		  this.setState({
				dataSource:this.state.dataSource.cloneWithRows(this.rData)
		  })
	  }
  }



	//当滑动到底部的时候会执行
  onEndReached = (event) => {
	  
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
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
    axios({url:'/dola/app/mainpage/newgetmainpagelist', params:{page}})
    .then(function ({data}) {
    	//如果此次获取到的数据为空数组，说明后面没有数据了
      if(data.data.themeList.length===0||data.data.length===0){
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
        that.rData = {...that.rData,...genData(page-1,data.data.themeList)};
		
       //将新数据放入到dataSource中
        that.setState({
            dataSource: that.state.dataSource.cloneWithRows(that.rData),
            isLoading: false
					});
      })
  }

  render() {

		//此函数可以返回要加载的dom结构或者组件并传入数据，接收的rowData参数就是数据
    const row = (rowData, sectionID, rowID,a,b,c) => {
			return (
				<ThemeBox data={rowData}  key={rowData.id}/>
				); 
    };
    
    
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        
        renderFooter={renderFooter.bind(null,this)}
        renderRow={row}
        
       
        
        useBodyScroll
        onScroll={() => { console.log('scroll'); }}
       scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
  

}


export default Content
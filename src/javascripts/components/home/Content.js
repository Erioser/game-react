
/* eslint no-dupe-keys: 0 */
import React from 'react'

import axios from 'axios'
import ThemeBox from '../common/theme_box'
import { ListView } from 'antd-mobile';

//获取数据的方法
function genData(pIndex = 0,data) {
  const dataBlob = {};
  for (let i = 0; i < data.length; i++) {
    const ii = (pIndex * data.length) + i;
    dataBlob[`${ii}`] = data[i]
  }
  return dataBlob;
}
let page = 1
class Demo extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
	});
	
    this.state = {
      dataSource:dataSource,
	  isLoading: true,
	  hasMore:true
    };
  }
  componentWillReceiveProps(props){
	  
	  if(this.props.data.length==0&&props.data.length!=0){
		  this.rData=genData(0,props.data)
		  this.setState({
				dataSource:this.state.dataSource.cloneWithRows(this.rData)
		  })
	  }
  }




  onEndReached = (event) => {
	  console.log(11)
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
	}
	console.log(22)
    let that = this
    this.setState({ isLoading: true });
        page++
        axios({url:'/dola/app/mainpage/newgetmainpagelist', params:{page}})
        .then(function ({data}) {
          if(data.data.themeList.length===0){
            page--;
            that.setState({
			  isLoading: false,
			  hasMore:false
          	});
            return;
		  }
		  
            that.rData = {...that.rData,...genData(page-1,data.data.themeList)};
			
           
            that.setState({
                dataSource: that.state.dataSource.cloneWithRows(that.rData),
                isLoading: false,
			});
          })
  }

  render() {

    const row = (rowData, sectionID, rowID,a,b,c) => {
		return (
			<ThemeBox data={rowData}  key={rowData.id}/>
			); 
    };
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={row}
        
        className="am-list"
        
        useBodyScroll
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}


export default Demo
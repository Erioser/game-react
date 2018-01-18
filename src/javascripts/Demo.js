
/* eslint no-dupe-keys: 0 */
import React from 'react'
import axios from 'axios'
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
let page = 0
class Demo extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
    };
  }

  componentDidMount() {
    let that = this
    this.setState({ isLoading: true });
        page++ 
		axios({url:'/dola/app/mainpage/newgetmainpagelist', params:{page}})
          .then(function ({data}) {
            
            that.rData = genData(page-1,data.data.themeList);
            that.setState({
                dataSource: that.state.dataSource.cloneWithRows(that.rData),
                isLoading: false,
            });
          })
  }


  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);

    let that = this
    this.setState({ isLoading: true });
        page++
        axios({url:'/dola/app/mainpage/newgetmainpagelist', params:{page}})
        .then(function ({data}) {
          if(data.data.themeList.length===0){
            page--;
            that.setState({
              isLoading: false
          });
            return;
          }
            that.rData = { ...that.rData,...genData(page-1,data.data.themeList)};
           
            that.setState({
                dataSource: that.state.dataSource.cloneWithRows(that.rData),
                isLoading: false,
            });
          })
  }

  render() {


    const row = (rowData, sectionID, rowID) => {
      
      return (
        <div key={rowID} style={{ height: '500px',background:'red' }}>
          123
        </div>
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
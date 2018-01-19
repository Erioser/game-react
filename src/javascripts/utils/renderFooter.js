  
  import React from 'react'
  
  import Loading from '../components/common/loading'
  
  const renderFooter = (obj) => {
  	let footerContent = ''
  	if(obj.state.isLoading){
  		footerContent= <Loading/>
  	}else {
  		if(!obj.state.hasMore){
  			footerContent= <p className="info-message">没有更多数据了</p>
  		}else{
  			footerContent= <p className="info-message">下滑获取更多</p>
  		}
  	}
  	
  	
  	return <div>
  		{footerContent}
  	</div>
  	
  	
  }
  
export default renderFooter
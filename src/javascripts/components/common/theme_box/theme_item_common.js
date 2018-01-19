import React from 'react'

import {connect} from 'react-redux'
import {Toast} from 'antd-mobile'
const ThemeButton = (props)=>{
    return (
        <button onClick={props.handler} className="theme-button">开始</button>
    )
}

const ThemeItemCommon =(props)=>{
         let {data} = props
         console.log(props,111111)
         
        let vali=function(){
        	if(props.User.userInfo){
        		window.location.href='http://www.dolapocket.com/game/index_new.php?gid='+data.id
        	}else{
        		Toast.info('请登陆后玩耍')
        	}
        }
         
        return (
            <div className="theme-item-common">
				{props.children || ''}
                <div className="game-info">
                    <img alt="" src={data.image} className="image"/>

                    <div className="info-box">
                        <span className="top">{data.name}</span>
                        <span className="middle">
                            {
                                data.labelList.map((item,i)=>(
                                    <label style={{background:item.color}} key={i}>{item.name}</label>
                                ))
                            }
                        </span>
                        <span className="bottom">{data.description}</span>
                        
                    </div>
                </div>
                <ThemeButton handler={vali}/>
            </div>
        )
    }



export default connect(state=>state)(ThemeItemCommon)
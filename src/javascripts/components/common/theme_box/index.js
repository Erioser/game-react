import React,{Component} from 'react'
import ThemeItemSimple from './theme_item_simple'
import ThemeItemCommon from './theme_item_common'
class ThemeBox extends Component {

    constructor(props){
        super(props)
    }

    render(){
        let {data} = this.props  
        let Item = data.type==='1'? ThemeItemSimple:ThemeItemCommon
        return (
            <div className="theme-box">

                <div className="theme-header">
                   <span className="left">{data.title}</span>
                   {
                       data.type==='1'?<span className="right">更多</span>:''
                   }
                   
                </div>
                {
                    data.imageId==='0'?'':<img width="100%" src={data.image} alt=""/>
                }
                

                <div className={`theme${data.type==='1'?1:''}-body`}>
                   {
                       data.gameList.map(item=>(
                           <Item data={item} key={item.id}/>
                       ))
                   }
                </div>
            </div>
        )
    }

}

export default ThemeBox
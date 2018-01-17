import React from 'react'

const ThemeButton = (props)=>{
    return (
        <button className="theme-button">开始</button>
    )
}

const ThemeItemCommon =(props)=>{
         let {data} = props
        return (
            <div className="theme-item-common">

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
                <ThemeButton/>
            </div>
        )
    }



export default ThemeItemCommon
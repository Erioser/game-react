import React from 'react'

const ThemeItemSimple =(props)=>{
         let {data} = props
        return (
            <div className="theme-item-simple">
                <img alt="" src={data.image} className="image"/>
                <span className="title">{data.name}</span>
            </div>
        )
    }



export default ThemeItemSimple
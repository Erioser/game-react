

import React,{Component} from 'react'



class ClassList extends Component {
    

    

    render(){
        let {data} = this.props
        // http://www.dolapocket.com/app/mainpage/newgetmainpagelist?page=1
        return (
            
            <div className="class-list">
                {
                    data.map( item =>(
                        <a key={item.id}>
                            <img alt="" src={item.image}/>
                            <span>{item.name}</span>
                        </a>
                    ))
                }
                
            </div>

        )
    }

}

export default ClassList
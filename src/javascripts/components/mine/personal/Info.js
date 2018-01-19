
import React from 'react'



const Info =(props)=> (
			
	<div className="personal-info">
		<p><i onClick={props.exit} className="fa fa-sign-out"></i></p>
		
		<img src={props.info.avatar} alt=''/>
		
		<h5>{props.info.name}</h5>
	</div>
			
)
	
	


export default Info

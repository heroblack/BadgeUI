import React, { Fragment } from 'react'
import './labelError.css'
function LabelError (props){
     return(
         <Fragment>
             <div className="labelError"> 
                 <p>{props.error}</p>
             </div>
         </Fragment>
     )
}

export default LabelError
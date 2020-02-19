import React, { Component,Fragment } from 'react'
import LabelError from '../../Errors/LabelError'


function BadgeForm(props) {
     return (
           <Fragment>
               <h1>Badge New</h1>
                {/* <form onSubmit={handleSubmit}> */}
                  <form onSubmit={props.onSubmit}> 
                   <div className="form-group">
                       <label html="form-group">First Name</label>
                       <input 
                              onChange={props.onChange}
                              className="form-control" 
                              type="text" 
                              name="firstName"
                              value={props.formValues.firtsName}
                              required
                        /> 
                   </div>

                   <div className="form-group">
                       <label html="form-group">Last Name</label>
                       <input 
                              onChange={props.onChange}
                              className="form-control" 
                              type="text" 
                              name="lastName"
                              value={props.formValues.lastName}
                  
                        /> 
                   </div>

                   <div className="form-group">
                       <label html="form-group">Email</label>
                       <input 
                              onChange={props.onChange}
                              className="form-control" 
                              type="email" 
                              name="email"
                              value={props.formValues.email}
                  
                        /> 
                   </div>


                   <div className="form-group">
                       <label htmlFor="">job Title</label>
                       <input
                         onChange={props.onChange}
                         className="form-control"
                         type="text"
                         name="jobTitle"
                         value={props.formValues.jobTitle}
                        />
                    </div>

                   

                   <div className="form-group">
                       <label html="form-group">twitter</label>
                       <input 
                              onChange={props.onChange}
                              className="form-control" 
                              type="text" 
                              name="twitter"
                              value={props.formValues.twitter}    
                        /> 
                   </div>

                   <button type="submit"  className="btn btn-primary">Guardar</button>
                   {props.error && (<LabelError error={props.error}/>)}
                   

               </form>
           </Fragment>   
       ) 

   
}

export default BadgeForm
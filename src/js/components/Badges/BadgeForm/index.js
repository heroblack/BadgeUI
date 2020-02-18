import React, { Component,Fragment } from 'react'

class BadgeForm extends Component {
   constructor(props) {
       super(props)
   }

   render() {
       return(
           <Fragment>
               <form>
                   <div className="form-group">
                       <label html="form-group">First Name</label>
                       <input 
                              onChange={this.props.onChange}
                              className="form-control" 
                              type="text" 
                              name="firstName"
                              value={this.props.formValues.firtsName}
                        /> 
                   </div>

                   <div className="form-group">
                       <label html="form-group">Last Name</label>
                       <input 
                              onChange={this.props.onChange}
                              className="form-control" 
                              type="text" 
                              name="lastName"
                              value={this.props.formValues.lastName}
                  
                        /> 
                   </div>

                   <div className="form-group">
                       <label html="form-group">Email</label>
                       <input 
                              onChange={this.props.onChange}
                              className="form-control" 
                              type="email" 
                              name="email"
                              value={this.props.formValues.email}
                  
                        /> 
                   </div>


                   <div className="form-group">
                       <label htmlFor="">job Title</label>
                       <input
                         onChange={this.props.onChange}
                         className="form-control"
                         type="text"
                         name="jobTitle"
                         value={this.props.formValues.jobTitle}
                        />
                    </div>

                   

                   <div className="form-group">
                       <label html="form-group">twitter</label>
                       <input 
                              onChange={this.props.onChange}
                              className="form-control" 
                              type="text" 
                              name="twitter">
                              value={this.props.formValues.twitter}    
                  
                        </input> 
                   </div>

                   <button type="submit" onClick={this.handleClick} className="btn btn-primary">
            Guardar
          </button>

               </form>
           </Fragment>   
       ) 

   }
}

export default BadgeForm
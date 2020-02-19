import React, { Component, Fragment } from 'react'
import confLogo from "../../../../image/badge-header.svg";
import "./style.css";

import Gravatar from '../../Gravatar';
class Badge extends Component{

  constructor(props) {
    super(props)
   

  }

    render() {
      const {email,firstName,lastName,jobTitle, twitter} = this.props.formValues
        return (
          
          <Fragment>
            <div className="Badge">

                <div className="Badge__header">
                   <img src={confLogo} alt= "logo" />
                </div>
               
                <div className="Badge__participante">
                   <Gravatar className="Badge__avatar"
                    email={email || 'fabiorojas7@gmail.com'}
                    alt="Avatar"
                   />
                   <h1 className="Badge__section-name">
                     {firstName || 'Fabio' } <br/> {lastName || 'Rojas' } 
                   </h1>
                </div>

               <div className="Badge__section-info">
                 <h5>{jobTitle || 'Backend and frontend JS'}</h5>
                 <p>@{twitter  || 'hackchan77' }</p>
               </div>

               <div className="Badge__footer">#platziconf</div>
            </div>
          </Fragment>)
    }
}

export default Badge
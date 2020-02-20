import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import logo from "../../../../../image/platziconf-logo.svg";
import './BadgeDetails.css'
import Badge from '../../Badge'
import DeleteBadgeModal from '../../DeleteBadgeModal'
function BadgeDetails(props) {
    return(
        <Fragment>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-10">
                        <img src={logo} alt="logo de la conferencia" />

                        </div>
                        <div className="col-2">
                           <h1>{props.badge.firstName} <br /> {props.badge.lastName}</h1>
                        </div>
                    </div>
                </div>
              </div>

              <div>
                  <div className="container">
                      <div className="row">
                          <div className="col-6">
                              <Badge formValues={props.badge}/>
                          </div>
                          <div className="col-6">
                              <h2>Actions</h2>
                              <div className="div">
                                  <Link className="btn btn-primary mb-4" to={`/badges/${props.badge.id}/edit`}> Edit </Link>
                              </div>
                             
                              <div>
                               <button onClick={props.onOpenModal} className="btn btn-danger">
                                 Delete
                              </button>
                              <DeleteBadgeModal
                                 isOpen={props.modalIsOpen}
                                 onClose={props.onCloseModal}
                                 onDeleteBadge={props.onDeleteBadge}
                             />
              </div>


                          </div>
                      </div>
                  </div>
              </div>
        </Fragment>
    )
}

export default BadgeDetails
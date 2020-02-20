import React, { Fragment, Component } from 'react'
import {Link} from 'react-router-dom'
import BadgesListItems from '../BadgeListItems'
import './BadgesList.css'
class BadgeList extends Component {
   
    constructor(props) {
        super(props)
    }

    render() {
    
        
        if(this.props.badges.length === 0) {
            return (
            <div>
               <h3>No were found any Badges</h3>
               <Link className="btn btn-primary" to="/badges/new">  
                Create New Badge
               </Link>
           </div>
       )
     } 
  
    return(<Fragment>
             <ul className="list-unstyled">
                {this.props.badges.map(badge => {
                    return (
                          <li key={badge.id} className="badgesListItems">
                             <Link  className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                             <BadgesListItems badge={badge} />
                             </Link>

                          </li>
                    );
                })} 

             </ul>
          </Fragment>)
    }
}
export default BadgeList
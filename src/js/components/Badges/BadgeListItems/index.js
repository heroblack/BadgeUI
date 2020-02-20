import React, { Component, Fragment } from "react";
import Gravatar from "../../Gravatar";
import './BadgeListItems.css'
class BadgesListItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div className="container-card">
          <div className="Card">
            <div className="Card__Logo">
              <Gravatar
                className="avatar"
                email={this.props.badge.email}
                alt="avatar"
              />
            </div>
            <div className="Card__description">
              <p className="mb-0 font-weight-bold">
                {this.props.badge.firstName} {this.props.badge.lastName}
              </p>
              <p className="mb-0 text-primary">
                @{this.props.badge.twitter}
              </p>
              <small className="mb-0">{this.props.badge.jobTitle}</small>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BadgesListItems;

import React,{Component, Fragment} from 'react';
import confLogo from '../../../image/badge-header.svg'
import './Hero.css'
class Hero extends Component {
    render() {
        return(
            <Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid"
                         src={confLogo}
                         alt="logo"
                    />
                </div>
            </Fragment>
        )
    }
}

export default Hero
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import './BadgeAll.css';
import Hero from '../../../Hero'
import BadgesList from '../../BadgeList'
import api from "../../../../../log";
import PageError from "../../../Errors/PageError";
//import Loader from "../../../Loaders/Loader"
import MiniLoader from '../../../Loaders/MiniLoader'

class BadgeAll extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading:true,
            error:null,
            data: undefined
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({loading:true, error:null})
        try {
          const data = await api.badges.list();
          this.setState({loading:false, data: data})
          
        } 
        catch(error){
          this.setState({ loading: false, error: error });
        }
    }

   render() { 
     console.log('render') 
    

    if(this.state.error) {
          return <PageError error={this.state.error}/>
    }

    if (this.state.loading === true && !this.state.data) {
         return (
           <div className="loader">
             <MiniLoader />
           </div>
         );
       }

   return(
   <Fragment>
       <Hero />
       <div className="Badges">
           <div className="Badges__buttons">
               <Link to="/badges/new" className="btn btn-primary">
                 New Badge
               </Link>
            </div>
        <div className="Badges">
        {<BadgesList badges={this.state.data} /> }
        {this.state.loading && <MiniLoader />}
      </div>
    </div>
  </Fragment>
   )
}
}

export default BadgeAll



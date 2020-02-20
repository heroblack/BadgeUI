import React, { Component, Fragment } from 'react'
import api from '../../../../../log'
import Loader from '../../../Loaders/Loader'
import PageError from '../../../Errors/PageError'
import Hero from '../../../Hero'
import Badge from '../../Badge'
import BadgeForm from '../../BadgeForm'
class BadgeEdit extends Component {
    
    constructor(props) {
         super(props)
         this.state= {
            loading:true,
            error:null,
            form: {
                firstName:"",
                lastName: "",
                email:"",
                jobTitle:"",
                twitter:""
            }
        }
     }
  
    componentDidMount() {
      this.fetchData()
    }

    fetchData = async () => {
        this.setState({loading:true, error:null});
        try {
            const data = await api.badges.read(this.props.match.params.badgeId)
            console.log(data)
            this.setState({loading:false , form:data})
        }
        catch(error){
            console.log('El error es:',error)
            this.setState({loading:false, error: error})
        }
    }

    handleChange = e => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value
          }
        });
      };
    
      handleSubmit = async event => {
        event.preventDefault();
        this.setState({ loading: true, error: null });
        try {
          await api.badges.update(this.props.match.params.badgeId, this.state.form);
          this.setState({ loading: false });
          this.props.history.push("/badges/all");
        } catch (error) {
          this.setState({ loading: false, error: error });
        }
      };

    
     render() {

        if(this.state.loading) {
            return (<Loader />)
        }

        if(this.state.error && !this.state.form) {
            return (<PageError error={this.state.error} />)
        }

         return(
               <Fragment>
                 <Hero />
                 <div className="container">
                     <div className="row">
                         <div className="col-6">
                             <Badge formValues={this.state.form}/>
                         </div>
                         <div className="col-6">
                         <BadgeForm onChange={this.handleChange}
                                    onSubmit={this.handleSubmit}
                                    formValues={this.state.form}
                                    error={this.state.error}
                                    />
                         </div>
                     </div>
                 </div>
               
               </Fragment>

         )
     }


}

export default BadgeEdit
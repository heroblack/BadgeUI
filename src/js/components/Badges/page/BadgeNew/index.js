import React, { Fragment,Component } from 'react'
import BadgeForm from '../../BadgeForm'
import Api from '../../../../../log'
import Badge from '../../Badge'
import Hero from '../../../Hero'
import Loading from '../../../Loaders/Loader'
class BadgeNew extends Component {
    constructor(props){
      super(props)
      this.state = {
        loading:false,
        error:null,            
        form: { firstName:"", 
                lastName:"", 
                email:"", 
                jobTitle:"", 
                twitter:""

        }
      }
    }

    handleChange = event => {
      console.log([event.target.name] + ':' +event.target.value)
      this.setState({
        form: {
          ...this.state.form,
          [event.target.name]: event.target.value
        }
      })
    }

    handleSubmit = async  event => {

      try {
      event.preventDefault()
      this.setState({loading:true, error:null})
      let response = await Api.badges.create(this.state.form)
      this.setState({loading:false, error:null})
//       this.setState({  form: { firstName:"", 
//       lastName:"", 
//       email:"", 
//       jobTitle:"", 
//       twitter:""

// }});
this.props.history.push('/badges/all')
      }
      catch(error) {
        this.setState({loading:false, error:error.message})
      }

      

    }

    render() {
        if(this.state.loading) {
          return <Loading />
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
                      <BadgeForm 
                         onChange={this.handleChange} 
                         formValues={this.state.form}
                         onSubmit={this.handleSubmit}
                         error={this.state.error}/> 
                  </div>
                </div>
              </div>
             
            </Fragment>
          )
           


    }
}

export default BadgeNew
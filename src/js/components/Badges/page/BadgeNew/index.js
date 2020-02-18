import React, { Fragment,Component } from 'react'
import BadgeForm from '../../BadgeForm'
import Hero from '../../../Hero'
class BadgeNew extends Component {
    constructor(props){
      super(props)
      this.state = {
        loading:false,
        error:null,
        form: { firstName:"", lastName:"", email:"", jobTitle:"", twitter:""

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

    render() {
        return(
            <Fragment>
              <Hero />
              <div className="container">
                <div className="row">
                  <div className="col-6"></div>
                  <div className="col-6">
                      <BadgeForm onChange={this.handleChange} formValues={this.state.form}/> 
                  </div>
                </div>
              </div>
             
            </Fragment>
          )
           


    }
}

export default BadgeNew
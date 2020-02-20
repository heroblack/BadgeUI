import React, {Component, Fragment} from 'react';
import api from '../../../../../log';
import Loader from '../../../Loaders/Loader'
import PageError from '../../../Errors/PageError'
import BadgeDetails from '../../page/BadgeDetails';
class BadgeDetilsContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            error: null,
            data:undefined,
            modalIsOpen: false
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    handleOpenModal = event => {
        this.setState({ modalIsOpen: true });
      };
      handleCloseModal = event => {
        this.setState({ modalIsOpen: false });
      };
    
      handleDeleteBadge = async event => {
        this.setState({ loading: true, error: null });
        try {
          this.badgeId = this.props.match.params.badgeId;
          await api.badges.remove(this.badgeId);
          this.props.history.push("/badges/all");
        } catch (error) {
          this.setState({ loading: false, error: error });
        }
      };
    

    fetchData = async event => {
        this.setState({loading:true, error: null})
        try {
          const data = await api.badges.read(this.props.match.params.badgeId);
          this.setState({loading:false, data: data})
        }
        catch(error){
            this.setState({loading:false, error: error})
        }
    }

   render() {
       if(this.state.loading) {
           return (<Loader />)
       }

       if(this.state.error) {
           return <PageError error={this.state.error} />
       }

       return (
           <Fragment>
               <BadgeDetails 
                onCloseModal={this.handleCloseModal}
                onOpenModal={this.handleOpenModal}
                modalIsOpen={this.state.modalIsOpen}
                onDeleteBadge={this.handleDeleteBadge}
               badge={this.state.data}/>
           </Fragment>
       )


   }
}

export default BadgeDetilsContainer
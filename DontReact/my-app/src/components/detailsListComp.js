import React,{Component} from 'react';
import '../App.css';
import Modal from 'react-responsive-modal';
import RegModal from '../components/models/registrationModal';

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};  

const float ={
    float : 'right'
}

class detailsList extends Component{

    constructor(){
        super();
        this.state = {
            show :false,
            open: false
        }     
    }

    toggleContent =() =>{
        this.setState(
            {
              show : !this.state.show       
            }
        )
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
   
    render(){
        const { open } = this.state;
        return (
            <div className="item hackDetailsPadding" >
                <div className="ui grid" onClick={this.toggleContent}>
                    <div className="two wide column">
                        <div className="ui label">
                            <i className="clock outline icon"></i> {this.props.duration} Days
                        </div>
                    </div>
                    <div className="eight wide column textAlign">
                        <div className="content">
                            <a className="header">{this.props.name}</a>
                            <div className="description">{this.props.description}</div>
                        </div>
                    </div>
                    <div className="four wide column">
                        <div className="ui label" style={float}>
                            <i className="location arrow icon"></i> {this.props.venue}
                        </div>
                    </div>
                </div>
                <div className="content summaryBlock" style={this.state.show ? {display:'block'}:{display:'none'}}>
                    <div style={{padding : '0.5rem'}}>
                       <span className="summaryFont">Hackathon Name</span> : <span>{this.props.name}</span>
                    </div>
                    <div style={{padding : '0.5rem'}}>
                       <span className="summaryFont">Hackathon description</span> : <span>{this.props.description}</span>
                    </div>
                    <div style={{padding : '0.5rem'}}>
                       <span className="summaryFont">Portfolio</span> : <span>{this.props.portfolio}</span>
                    </div>
                    <div style={{padding : '0.5rem'}}>
                       <span className="summaryFont">Start date</span> : <span>{this.props.start_date}</span>
                    </div>
                    <div style={{padding : '0.5rem'}}>
                       <span className="summaryFont">End date</span> : <span>{this.props.end_date}</span>
                    </div>
                    <div style={{padding : '0.5rem'}}>
                       <span className="summaryFont">Venue</span> : <span>{this.props.venue}</span>
                    </div>
                    <div style={{padding : '0.5rem'}}>
                       <span className="summaryFont">Organiser Details</span>
                       <div style={{padding : '0.5rem'}}>
                            <span className="summaryFont">Organiser Name</span> : <span>{this.props.organiser_name}</span>   
                       </div>
                       <div style={{padding : '0.5rem'}}>
                            <span className="summaryFont">Organiser Contact</span> : <span>{this.props.organiser_contact}</span>   
                       </div>
                    </div> 
                    
                    <div style={{float : 'right', marginTop:'-0.4rem'}}>
                        <button className="ui primary button" onClick={this.onOpenModal}>
                            Register
                        </button>                        
                    </div>   
                    <Modal open={open} onClose={this.onCloseModal} center>  
                        <RegModal eventid={this.props.eventid}></RegModal>
                    </Modal>   
                </div>            
            </div>        
        )
    }
}

export default detailsList;
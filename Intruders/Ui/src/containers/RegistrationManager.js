import React, { Component } from 'react';

import Registration from './Registration';


class RegistrationManager extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            notes: [],
            selectedNote: null,
            isAddNoteModalOpen: false
        };

        
        //this.handleOnAddNote = this.handleOnAddNote.bind(this);
        
        
        
    }


    


    

    


   


    handleOpenAddNoteModal() {
        this.setState({isAddNoteModalOpen: true});
    }

    render() {
        return (
            <div>                                
                
                    <Registration onSaveNote={this.handleOnAddNote} onCloseModal={this.handleOnCloseAddNoteModal} />
                
                
                
            </div>
        );
    }
}

export default RegistrationManager;
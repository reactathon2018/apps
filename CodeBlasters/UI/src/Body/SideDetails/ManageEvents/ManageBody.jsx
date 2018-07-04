import React from 'react';
import ListEvents from './ListEvents/ListEvents.jsx'
import UpdateEvent from './UpdateEvent/UpdateEvent.jsx'


class ManageBody extends React.Component {

    render(){
        return (
            <div>
                <ListEvents/>
                <UpdateEvent/>
            </div>
        );
    }

}
export default ManageBody;
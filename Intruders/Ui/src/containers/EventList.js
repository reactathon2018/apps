import React from 'react'
import EventCards from './EventCards'

const EventList = (props) => {
    let data=props.events;
    return (
        <div>
            <div className="row">
                {data.map(event => <EventCards {...event} />)}
            </div>
        </div>
    );
}

export default EventList;
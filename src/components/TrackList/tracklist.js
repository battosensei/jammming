import React, { Component } from 'react';
import './tracklist.css';
import Track from '../Track/track';


class TrackList extends React.Component {
    render () {
        const {tracks, onAdd, onRemove, isRemoval} = this.props 
        return (
            <div className="TrackList">
                {tracks && tracks.map(track => {
                    return <Track key={track.id} track={track} onAdd={onAdd} onRemove={onRemove} isRemoval={isRemoval}/>
                    })}
                {/* <Track /> */} 
                {/* You will add a map method that renders a set of Track components */} 
            </div>
        )
    }
}

export default TrackList;
import React from 'react';
import './track.css'



class Track extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false
        }
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.playMusic=this.playMusic.bind(this);
    }

    renderAction() {
        if (this.props.isRemoval)
            return (<a className="Track-action" onClick={this.removeTrack}>-</a>);
        else
            return (<a className="Track-action" onClick={this.addTrack} >+</a>);
    }

    playMusic() {
        const a = new Audio(this.props.track.preview);
        const { isPlaying } = this.state;
        debugger
        return (isPlaying ? a.pause() : a.play());
        this.setState(prevState => {
            return ({ isPlaying: !prevState.isPlaying })
        });
    }
    
    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    render() {
        const { isPlaying } = this.state;
        const { track , isRemoval } = this.props
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{track.name}</h3>
                    <p>{track.artist} | {track.album} </p>
                </div>
                <div className="Track-preview">
                    {track.preview && !isRemoval ? 
                    <a className="Preview" onClick={this.playMusic} isPlaying={isPlaying} >preview</a>
                    : 
                    null}
                </div>
                <a className="Track-action">{this.renderAction()}</a>
            </div>
        )
    }
}

export default Track;

import React from 'react';


class PopUp extends React.Component {
    render() {
        return (
            <div className="container" > 
                <h2 className="text-center mt-4" >Do you want to Save the Playlist to your Spotify account?</h2>
                <div className="btn-block mt-4 text-center">
                    <button className="btn btn-primary mr-4" onClick={this.props.onSave}>SAVE</button>
                    <button className="btn btn-info mr-4" onClick={this.props.onChoose}>NOT YET</button>
                </div>
            </div>

        )
    }
}

export default PopUp; 
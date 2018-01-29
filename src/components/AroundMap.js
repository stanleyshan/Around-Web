import React from 'react';
import { POS_KEY } from '../constants';
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} = require("react-google-maps");

class AroundMap extends React.Component {
    state = {
        isOpen: false,
    }

    onToggleOpen = () => {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    }

    render() {
        const { lat, lon} = JSON.parse(localStorage.getItem(POS_KEY));
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: lat, lng: lon }}
            >
                {
                    this.props.posts.map((post) =>
                        <Marker
                            position={ {lat: post.location.lat, lng: post.location.lon }}
                            onClick={this.onToggleOpen}
                            key = {post.url}
                        >
                            {this.state.isOpen ?
                                <InfoWindow onCloseClick={this.onToggleOpen}>
                                    <div>text</div>
                                </InfoWindow> : null}
                        </Marker>
                    )
                }

            </GoogleMap>
        );
    }
}

export const WrappedAroundMap = withScriptjs(withGoogleMap(AroundMap));
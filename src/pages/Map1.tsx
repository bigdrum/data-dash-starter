import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

export class Map1 extends React.Component {
    render() {
        const position: [number, number] = [40.7128, -74];
        return (
            <Map center={position} zoom={13} style={{ height: 500 }}>
                <TileLayer
                    attribution='&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={position}>
                    <Popup>
                        <span>
                            A pretty CSS3 popup. <br /> Easily customizable.
                  </span>
                    </Popup>
                </Marker>
            </Map>
        );
    }
}

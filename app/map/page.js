"use client";


import Navbar from "../components/navbar";
import Footer from "../components/footer";


import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import calgaryLibraries from '../data/Calgary_library.json';
import {Icon} from 'leaflet';



export default function Map() {
    const [isMounted, setIsMounted] = useState(false);
    const [libraryData, setLibraryData] = useState([]);

    useEffect(() => {
        // ComponentDidMount
        setIsMounted(true);
        setLibraryData(calgaryLibraries.data); // Assuming the library data is in the 'features' property
        return () => {
            // ComponentWillUnmount
            setIsMounted(false);
        }
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
        <Navbar />
        <MapContainer center={[51.049, -114.066]} zoom={12} scrollWheelZoom={true} style={{ height: "86vh", width: "100%" }}>
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            {libraryData.map((library, index) => (
                <Marker 
                    key={index}
                    position={library[26].slice(1, 3)}
                    icon={new Icon({iconUrl: '/location-pin.png', iconSize: [25, 25], iconAnchor: [12, 41]})}
                >
                    <Popup>
                        <div>
                            <h3>{library[8]}</h3>
                            <p>Postal Code: {library[9]}</p>
                            <p>Address: {JSON.parse(library[27][0]).address}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
        <Footer />
    </>
    );
}

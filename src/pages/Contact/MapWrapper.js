import React from "react";
import Wrapper, { Status } from "./Wrapper";
import MyMapComponent from "./MyMapComponent";

const render = (status) => {
    if (status === Status.LOADING) return <p>Loading...</p>;
    if (status === Status.FAILURE) return <p>Error...</p>;
    return null;
};

const MapWrapper = () => (
    <Wrapper apiKey={process.env.REACT_APP_apiKey} render={render}>
        <MyMapComponent />
    </Wrapper>
);

export default MapWrapper;
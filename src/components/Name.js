import React from "react";


export default function Name(props) {
    return (
        <div className={props.className}>
            <h1>{props.name}</h1>
            <p>{props.job}</p>
        </div>
    );
}
import React from "react";
import { BiMap } from "react-icons/bi";

export default function Address(props) {
    return (
        <div className={props.className}>
            <p> <BiMap className="icon-address" /> {props.data}</p>
        </div >
    );
}
import React from 'react';

export default function EducationItem(props) {
    return (
        <div className={props.className}>
            <h3>{props.major}</h3>
            <h3>{props.schoolName}</h3>
            <p>{props.date}</p>
        </div>
    )
}
import React from 'react';

export default function section(props) {
    var content = props.content.map((rows, index) => {
        return (
            <li key={index.toString()} >{rows}</li >
        )
    })
    return (
        <div className={props.className}>
            <h2>{props.title}</h2>
            <hr />
            <div className='content'>
                {content}
            </div>
        </div>
    );
}
import React from 'react';
import EducationItem from './EducationItem.js'

export default function Education(props) {
    var items = props.data.map((content, index) => {
        return (
            <EducationItem
                className={`education-describe-${index}`}
                key={index.toString()}
                major={content.major}
                schoolName={content.entity}
                date={content.date}
            />
        )
    })

    return (
        <div className={props.className}>
            <h2>{props.title}</h2>
            <hr />
            {items}
        </div>
    );
}
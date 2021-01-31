import React from 'react';

export default function SocialItem(props) {
    return (
        <div className="social-item">
            <p>{props.description}</p>
        </div>
    );
}
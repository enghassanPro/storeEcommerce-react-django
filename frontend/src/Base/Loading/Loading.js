import React from 'react';

import '../../../static/css/loading.css';
export default function Loading() {
    return (
        <div className="loading">
            <div className="overlay"></div>
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
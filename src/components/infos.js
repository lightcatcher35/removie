import React from 'react';

export const  Error = (props) => {
    return (
        <div className="ui negative message">
            <div className="header">{props.title}</div>
            <p>{props.content}</p>
        </div>
    );
}

export const  Info = (props) => {
    return (
        <div className="ui info message">
            <div className="header">{props.title}</div>
            <p>{props.content}</p>
        </div>
    );
}

export const  Warn = (props) => {
    return (
        <div className="ui warning message">
            <div className="header">{props.title}</div>
            <p>{props.content}</p>
        </div>
    );
}

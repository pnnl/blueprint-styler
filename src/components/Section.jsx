import React from 'react';
import { } from '@blueprintjs/core'

function Section(props) {
    return (
        <div className={props.title} id={props.title}>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    );
}

export default Section;

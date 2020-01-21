import React from 'react';
import { Button } from '@blueprintjs/core'

export function Buttons() {
    return (
        <div className="Buttons" >
            <Button text="Hello World" />
            <Button text="Hello World" intent="primary" />
            <Button text="Hello World" minimal />
            <Button text="Hello World" intent="primary" minimal />
        </div>
    );
}

export default Buttons

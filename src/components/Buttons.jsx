import React from 'react';
import { Button, AnchorButton, ButtonGroup } from '@blueprintjs/core'
import Section from './Section';

export function Buttons() {
    return (
        <Section title="Buttons" >
            <Button text="Normal" />
            <Button text="Primary" intent="primary" />
            <br />
            <Button text="Normal" disabled />
            <Button text="Primary" intent="primary" disabled />
            <br />
            <Button text="Minimal" minimal />
            <Button text="Minimal Primary" intent="primary" minimal />
            <Button text="Minimal" minimal disabled />
            <Button text="Minimal Primary" intent="primary" minimal disabled />
            <br />
            <Button text="Danger!" intent="danger" />
            <Button text="Warning!" intent="warning" />
            <Button text="Success!" intent="success" />
            <br />
            <Button text="Danger!" intent="danger" disabled />
            <Button text="Warning!" intent="warning" disabled />
            <Button text="Success!" intent="success" disabled />
            <br />
            <AnchorButton text="Anchor" />
            <br />
            <ButtonGroup>
                <Button icon="database">Queries</Button>
                <Button icon="function">Functions</Button>
                <AnchorButton rightIcon="settings">Options</AnchorButton>
            </ButtonGroup>
            <br />
            <ButtonGroup minimal>
                <Button icon="database">Queries</Button>
                <Button icon="function">Functions</Button>
                <AnchorButton rightIcon="settings">Options</AnchorButton>
            </ButtonGroup>
        </Section>
    );
}

export default Buttons

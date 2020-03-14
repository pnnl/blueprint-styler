import React from 'react';
import { Callout } from '@blueprintjs/core'
import Section from './Section';

function Callouts() {

    const content = `The component is a simple wrapper around the CSS API that provides props for modifiers and optional title element. Any additional HTML props will be spread to the rendered <div> element.`;

    return (
        <Section title="Callouts" >
            <Callout>{content}</Callout>
            <Callout title="Info Callout" icon="notifications">{content}</Callout>
            <Callout title="Primary Callout" intent="primary">{content}</Callout>
            <Callout title="Success Callout" intent="success">{content}</Callout>
            <Callout title="Warning Callout" intent="warning">{content}</Callout>
            <Callout title="Danger Callout" intent="danger">{content}</Callout>
        </Section>
    );
}

export default Callouts;

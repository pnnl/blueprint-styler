import React from 'react';
import { } from '@blueprintjs/core'
import Section from './Section';

function Typography() {

    const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos explicabo earum molestiae impedit, accusamus ullam id voluptas! Earum ab eligendi natus cum facere, tempora, quibusdam atque repellendus sequi maxime tempore! `

    return (
        <Section title="Typography" >
            <h1>Heading One</h1>
            <h2>Heading Two</h2>
            <h3>Heading Three</h3>
            <h4>Heading Four</h4>
            <h5>Heading Five</h5>
            <h6>Heading Six - Running Text</h6>
            <div class="bp3-running-text">
                <h3>Running Text</h3>
                <p>
                    We build products that make people better at their most important
                    work — the kind of work you read about on the front page of the
                    newspaper, not just the technology section.
                </p>
                <ul>
                    <li>Item the <code>first</code>.</li>
                    <li>Item the <strong>second</strong>.</li>
                    <li>Item the <a href="#">third</a>.</li>
                </ul>
            </div>
        </Section>
    );
}

export default Typography;

import React from 'react';
import { Colors } from '@blueprintjs/core'
import Section from './Section';


function Color(props) {
    return (
        <div class={['Color', props.colorName].join(' ')}>{props.colorName}</div>
    )
}

function ColorList() {

    const colorList = []

    for (const colorName in Colors) {
        if (Colors.hasOwnProperty(colorName)) {
            // const colorValue = Colors[colorName];
            colorList.push(<Color colorName={colorName} />)
        }
    }

    return (
        <Section title="ColorList" >
            {colorList}
        </Section>
    );
}

export default ColorList;

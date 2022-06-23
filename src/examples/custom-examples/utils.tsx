import { Classes, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import React from "react";

export type DivFC = React.FC<React.HTMLProps<HTMLDivElement>>

/** https://stackoverflow.com/a/1026087/5648839 */
export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
/** https://stackoverflow.com/a/5915122/5648839 */
export function randomItemFromArray(array) {
    return array[Math.floor(Math.random() * array.length)]
}
/** https://stackoverflow.com/a/7228322/5648839 */
export function randomIntFromInterval(min: number = 0, max: number = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
export const intents = Object.values(Intent)
export const icons = Object.values(IconNames)
export const randomIcon = () => randomItemFromArray(icons)
export const noOp = () => undefined
export const vibes = ['Select', 'cool', 'chill', 'hot hot hot', 'fyre']


export const randomLorem = (sentences: number = 5) => {
    let lorem = ''
    for (let i = 0; i < sentences; i++) {
        lorem += loremIpsum[randomIntFromInterval(0, loremIpsum.length - 1)] + ' ' // + i
    }
    return lorem
}



const loremIpsum = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Hac habitasse platea dictumst quisque.',
    'Auctor urna nunc id cursus metus aliquam eleifend mi.',
    'Vitae et leo duis ut.',
    'Habitant morbi tristique senectus et.',
    'Facilisi nullam vehicula ipsum a arcu cursus vitae.',
    'Gravida rutrum quisque non tellus.',
    'Sed risus ultricies tristique nulla aliquet.',
    'Amet nisl suscipit adipiscing bibendum est ultricies integer quis.',
    'A condimentum vitae sapien pellentesque habitant morbi tristique senectus et.',
    'Semper viverra nam libero justo laoreet sit.',
    'Amet justo donec enim diam vulputate.',
    'Cras adipiscing enim eu turpis.',
    'Vulputate odio ut enim blandit volutpat maecenas volutpat.',
    'Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula.',
    'Risus nec feugiat in fermentum posuere urna nec tincidunt praesent.',
    'Accumsan lacus vel facilisis volutpat est.',
    'Massa placerat duis ultricies lacus sed turpis.',
    'Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum.',
    'Magnis dis parturient montes nascetur ridiculus mus mauris vitae.',
    'Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc.',
    'Consectetur a erat nam at lectus urna duis convallis convallis.',
    'Quis hendrerit dolor magna eget est lorem ipsum dolor sit.',
    'Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet.',
    'Feugiat nibh sed pulvinar proin gravida.',
    'At imperdiet dui accumsan sit amet nulla facilisi morbi.',
    'Risus feugiat in ante metus dictum at.',
    'In nulla posuere sollicitudin aliquam ultrices sagittis.',
    'Sed adipiscing diam donec adipiscing tristique risus.',
    'A arcu cursus vitae congue.',
    'Ac placerat vestibulum lectus mauris.',
    'Sollicitudin tempor id eu nisl.',
    'Faucibus in ornare quam viverra orci sagittis.',
    'Laoreet suspendisse interdum consectetur libero.',
    'Faucibus ornare suspendisse sed nisi lacus sed viverra.',
    'Enim eu turpis egestas pretium aenean.',
    'Quam quisque id diam vel quam elementum.',
    'Fames ac turpis egestas sed tempus urna et pharetra pharetra.',
    'Euismod elementum nisi quis eleifend quam adipiscing.',
    'Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc.',
    'Odio tempor orci dapibus ultrices in iaculis nunc sed.',
    'Mauris vitae ultricies leo integer malesuada nunc vel.',
    'Velit aliquet sagittis id consectetur.',
    'Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida.',
    'Varius sit amet mattis vulputate enim.',
    'Pulvinar mattis nunc sed blandit libero.',
    'Quis vel eros donec ac.',
    'Viverra nam libero justo laoreet sit amet cursus.',
    'Sapien et ligula ullamcorper malesuada.',
    'Orci phasellus egestas tellus rutrum tellus pellentesque eu.',
    'Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa.',
    'Egestas fringilla phasellus faucibus scelerisque eleifend donec.',
    'Purus ut faucibus pulvinar elementum integer enim.',
    'Ullamcorper sit amet risus nullam eget felis eget.',
    'Adipiscing elit ut aliquam purus sit amet.',
    'Urna duis convallis convallis tellus id.',
    'Consectetur lorem donec massa sapien.',
    'Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac.',
    'Eget nullam non nisi est.',
    'Malesuada nunc vel risus commodo viverra maecenas accumsan lacus.',
    'Libero id faucibus nisl tincidunt eget nullam non nisi est.',
    'Id interdum velit laoreet id donec ultrices tincidunt arcu non.',
    'Sed sed risus pretium quam vulputate dignissim suspendisse in est.',
    'Mi bibendum neque egestas congue quisque egestas.',
    'Parturient montes nascetur ridiculus mus mauris vitae ultricies leo.',
    'Gravida arcu ac tortor dignissim convallis aenean et tortor at.',
]

export const codeSample = `// code sample
export function hasModifier(
    modifiers: ts.ModifiersArray,
    ...modifierKinds: ts.SyntaxKind[],
    ) {
    if (modifiers == null || modifierKinds == null) {
    return false;
    }
    return modifiers.some(m => modifierKinds.some(k => m.kind === k));
}`

const _TextSample = ({ className = '', ...props }) => {
    return (
        <p className={[Classes.RUNNING_TEXT, className].join(' ')} {...props}>
            {randomLorem(1)}{' '}
            <strong>Bold Text Callout {randomLorem(1)}</strong>{' '}
            {randomLorem(1)}{' '}
            <em>Italic text {randomLorem(1)}</em>{' '}
            {randomLorem(1)}{' '}
            <a href="#">Inline hyperlink text</a>.{' '}
            {randomLorem(1)}{' '}
            <code className={Classes.CODE}>./inline/code/text.txt</code>{' '}
            {randomLorem(1)}{' '}
        </p>
    )
};

export const TextSample = React.memo(_TextSample);

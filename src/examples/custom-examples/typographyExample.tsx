import * as React from "react";
import { Example, IExampleProps } from "@blueprintjs/docs-theme";
import "./typographyExample.scss";
import { Blockquote, Classes, H1, H2, H3, H4, H5, H6, OL, UL } from "@blueprintjs/core";

export class TypographyExample extends React.PureComponent<IExampleProps> {

    public render() {
        const { className, ...props } = this.props
        return (
            <Example options={false} className={['TypographyExample', className].join(' ')} {...props}>

                <section className="section--headings" >

                    <MetaTitle>
                        Headings<br/>
                        <LabelTitle code={`<h0 class="${Classes.HEADING}"/>`} />
                    </MetaTitle>

                    <H1>Heading 1</H1>
                    <p>{randomLorem()}</p>

                    <H2>Heading 2</H2>
                    <p>{randomLorem()}</p>

                    <H3>Heading 3</H3>
                    <p>{randomLorem()}</p>

                    <H4>Heading 4</H4>
                    <p>{randomLorem()}</p>

                    <H5>Heading 5</H5>
                    <p>{randomLorem()}</p>

                    <H6>Heading 6</H6>
                    <p>{randomLorem()}</p>

                </section>
                <section>

                    <MetaTitle>Text Sizes</MetaTitle>
                    <LabelTitle label='Large' code={Classes.TEXT_LARGE} />
                    <p className={Classes.TEXT_LARGE}>{randomLorem()}</p>
                    <LabelTitle label='Normal'  />
                    <p className={''}>{randomLorem()}</p>
                    <LabelTitle label='Small' code={Classes.TEXT_SMALL} />
                    <p className={Classes.TEXT_SMALL}>{randomLorem()}</p>

                </section>
                <section>

                    <MetaTitle>Text Utilities</MetaTitle>
                    <LabelTitle label='Overflow Ellipsis' code={Classes.TEXT_OVERFLOW_ELLIPSIS} />
                    <p className={Classes.TEXT_OVERFLOW_ELLIPSIS}>{randomLorem()}</p>
                    <LabelTitle label='Running Text' code={Classes.RUNNING_TEXT} />
                    <p className={Classes.RUNNING_TEXT}>{randomLorem()}</p>
                    <LabelTitle label='Monospace' code={Classes.MONOSPACE_TEXT} />
                    <p className={Classes.MONOSPACE_TEXT}>{randomLorem()}</p>

                </section>
                <section>

                    <MetaTitle>Text Colors</MetaTitle>
                    <LabelTitle label='Heading' code={Classes.HEADING} />
                    <p className={Classes.HEADING}>{randomLorem()}</p>
                    <LabelTitle label='Normal' />
                    <p className={''}>{randomLorem()}</p>
                    <LabelTitle label='Muted' code={Classes.TEXT_MUTED} />
                    <p className={Classes.TEXT_MUTED}>{randomLorem()}</p>
                    <LabelTitle label='Disabled' code={Classes.TEXT_DISABLED} />
                    <p className={Classes.TEXT_DISABLED}>{randomLorem()}</p>

                </section>
                <section>

                    <MetaTitle>Inline Examples</MetaTitle>
                    <p className={Classes.RUNNING_TEXT}>
                        {randomLorem(2)}{' '}
                        <strong>Bold Text Callout {randomLorem(1)}</strong>{' '}
                        {randomLorem(2)}{' '}
                        <em>Italic text {randomLorem(1)}</em>{' '}
                        {randomLorem(2)}{' '}
                        <a href="#">Inline hyperlink text {randomLorem(1)}</a>{' '}
                        {randomLorem(2)}{' '}
                        <code className={Classes.CODE}>./inline/code/text.txt</code>{' '}
                        {randomLorem(1)}{' '}
                    </p>

                </section>
                <section>

                    <MetaTitle>
                        Blockquote<br />
                        <LabelTitle code={Classes.BLOCKQUOTE} />
                    </MetaTitle>
                    <Blockquote>{randomLorem()}</Blockquote>

                </section>
                <section>

                    <MetaTitle>
                        Code Blocks<br />
                        <LabelTitle code={[Classes.CODE, Classes.CODE_BLOCK].join(' | ')} />
                    </MetaTitle>
                    <p>
                        Use the <code className={Classes.CODE}>&lt;code&gt;</code> tag for snippets of code.
                    </p>
                    <pre className={Classes.CODE_BLOCK}>
                        Use the &lt;pre&gt; tag for blocks of code.
                    </pre>
                    <pre className={Classes.CODE_BLOCK}>
                        <code>{codeSample}</code>
                    </pre>

                </section>
                <section>

                    <MetaTitle>
                        List<br />
                        <LabelTitle code={Classes.LIST} />
                    </MetaTitle>
                    <OL>
                        <li>Item the first</li>
                        <li>Item the second</li>
                        <li>
                            Item the third
                            <UL>
                                <li>Item the fourth</li>
                                <li>Item the fifth</li>
                            </UL>
                        </li>
                    </OL>

                </section>
                <section>

                    <MetaTitle>
                        RTL Internationalization<br />
                        <LabelTitle code={Classes.RTL} />
                    </MetaTitle>
                    {/* <H5>Arabic</H5> */}
                    <p className={Classes.RTL}>
                        لكل لأداء بمحاولة من. مدينة الواقعة يبق أي, وإعلان وقوعها، حول كل, حدى عجّل مشروط الخاسرة قد.
                        من الذود تكبّد بين, و لها واحدة الأراضي. عل الصفحة والروسية يتم, أي للحكومة استعملت شيء. أم وصل زهاء اليا
                    </p>
                    {/* <H5>Hebrew</H5> */}
                    <p className={Classes.RTL}>
                        כדי על עזרה יידיש הבהרה, מלא באגים טכניים דת. תנך או ברית ביולי. כתב בה הטבע למנוע, דת כלים פיסיקה החופשית זכר.
                        מתן החלל מאמרשיחהצפה ב. הספרות אנציקלופדיה אם זכר, על שימושי שימושיים תאולוגיה עזה
                    </p>
                </section>
                <section>

                    <MetaTitle>
                        Table<br />
                        <LabelTitle code={tableClasses.join(' | ')} />
                    </MetaTitle>

                    <table className={tableClasses.join(' ')}>
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Description</th>
                                <th>Technologies</th>
                                <th>Contributors</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Blueprint</td>
                                <td>CSS framework and UI toolkit</td>
                                <td>Sass, TypeScript, React</td>
                                <td>268</td>
                            </tr>
                            <tr>
                                <td>TSLint</td>
                                <td>Static analysis linter for TypeScript</td>
                                <td>TypeScript</td>
                                <td>403</td>
                            </tr>
                            <tr>
                                <td>Plottable</td>
                                <td>Composable charting library built on top of D3</td>
                                <td>SVG, TypeScript, D3</td>
                                <td>737</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={3}>Total</td>
                            <td>1408</td>
                        </tr>
                    </tfoot>
                </table>

                </section>



            </Example>
        );
    }
}

const MetaTitle = (props) => <div className={["meta-title", Classes.TEXT_SMALL, Classes.HEADING].join(' ')} {...props} />

const LabelTitle: React.FC<{
    label?: React.ReactNode,
    code?: React.ReactNode,
}> = ({
    label,
    code,
    ...props
}) => (
    <div className={["label-title", Classes.TEXT_SMALL].join(' ')} >
        {label && <span className={Classes.HEADING}>{label}</span>}
        {code && <code className={[Classes.TEXT_MUTED, Classes.MONOSPACE_TEXT].join(' ')}>{code}</code>}
    </div>
)

const tableClasses = [
    Classes.HTML_TABLE,
    Classes.HTML_TABLE_BORDERED,
    Classes.HTML_TABLE_CONDENSED,
    Classes.HTML_TABLE_STRIPED,
    Classes.INTERACTIVE
]


const randomLorem = (sentences: number = 5) => {
    let lorem = ''
    for (let i = 0; i < sentences; i++) {
        lorem += loremIpsum[randomIntFromInterval(0, loremIpsum.length - 1)] + ' ' // + i
    }
    return lorem
}

/** https://stackoverflow.com/a/7228322/5648839 */
function randomIntFromInterval(min: number = 0, max: number = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const loremIpsum = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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

const codeSample = `// code sample
export function hasModifier(
    modifiers: ts.ModifiersArray,
    ...modifierKinds: ts.SyntaxKind[],
    ) {
    if (modifiers == null || modifierKinds == null) {
    return false;
    }
    return modifiers.some(m => modifierKinds.some(k => m.kind === k));
}`

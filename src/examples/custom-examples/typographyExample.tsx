import * as React from "react";
import { Example, IExampleProps } from "@blueprintjs/docs-theme";
// import "./typographyExample.scss"; // in src/styles/global/_styler.scss
import { Blockquote, Classes, H1, H2, H3, H4, H5, H6, OL, UL } from "@blueprintjs/core";
import { codeSample, randomLorem } from "./utils";

export class TypographyExample extends React.PureComponent<IExampleProps> {
    public render() {
        return (
            <Example options={false} {...this.props}>

                <section className="section--headings" >

                    <MetaTitle>
                        Headings<br />
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
                    <LabelTitle label='Normal' />
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
                        <a href="#example">Inline hyperlink text {randomLorem(1)}</a>{' '}
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

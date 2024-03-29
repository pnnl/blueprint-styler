import * as React from "react";
import { Example, ExampleProps } from "@blueprintjs/docs-theme";
import { Classes } from "@blueprintjs/core";
// import "./colorsExample.scss"; // in src/styles/global/_styler.scss

export class ColorsExample extends React.PureComponent<ExampleProps> {
    public render() {
        return (
            <Example {...this.props}>

                <div className="set-wrapper">
                    {colorSets.map(colorSet => (
                        <div key={colorSet[0]} className="color-set">
                            <h6 className={`color-set-name ${Classes.HEADING}`}>{colorSet[0]}</h6>
                            <div className="color-chip-set">
                                {colorSet[1].map((color, i) => (
                                    <div
                                        key={color}
                                        className={[
                                            "color-chip",
                                            i > 2 ? "chip-text-dark" : "chip-text-light"
                                        ].join(' ')}
                                        style={{ backgroundColor: `var(${color}, ${fallbackColor})` }}
                                        children={i + 1}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="set-wrapper">
                    {grayscaleSets.map((colorSet, j) => (
                        <div key={colorSet[0]} className="gray-set">
                            <h6 className={`gray-set-name ${Classes.HEADING}`}>{colorSet[0]}</h6>
                            <div className="gray-chip-set">
                                {colorSet[1].map((color, i) => (
                                    <div
                                        key={color}
                                        className={[
                                            "gray-chip",
                                            j > 1 ? "chip-text-dark" : "chip-text-light"
                                        ].join(' ')}
                                        style={{ backgroundColor: `var(${color}, ${fallbackColor})` }}
                                        children={i + 1}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </Example>
        );
    }
}

const fallbackColor = 'hsla(0, 0%, 50%, 0.05)'

type Title = string
type ColorVar = string
type ColorSet = [Title, ColorVar[]][]

const grayscaleSets: ColorSet = [
    ['Black', [
        '--black',
    ]],
    ['Dark Gray', [
        '--dark-gray1',
        '--dark-gray2',
        '--dark-gray3',
        '--dark-gray4',
        '--dark-gray5',
    ]],
    ['Gray', [
        '--gray1',
        '--gray2',
        '--gray3',
        '--gray4',
        '--gray5',
    ]],
    ['Light Gray', [
        '--light-gray1',
        '--light-gray2',
        '--light-gray3',
        '--light-gray4',
        '--light-gray5',
    ]],
    ['White', [
        '--white',
    ]],
]
const colorSets: ColorSet = [
    ['Vermilion', [
        '--vermilion1',
        '--vermilion2',
        '--vermilion3',
        '--vermilion4',
        '--vermilion5',
    ]],
    ['Red', [
        '--red1',
        '--red2',
        '--red3',
        '--red4',
        '--red5',
    ]],
    ['Rose', [
        '--rose1',
        '--rose2',
        '--rose3',
        '--rose4',
        '--rose5',
    ]],
    ['Violet', [
        '--violet1',
        '--violet2',
        '--violet3',
        '--violet4',
        '--violet5',
    ]],
    ['Indigo', [
        '--indigo1',
        '--indigo2',
        '--indigo3',
        '--indigo4',
        '--indigo5',
    ]],
    // ['Cobalt', [
    //     '--cobalt1',
    //     '--cobalt2',
    //     '--cobalt3',
    //     '--cobalt4',
    //     '--cobalt5',
    // ]],
    ['Blue', [
        '--blue1',
        '--blue2',
        '--blue3',
        '--blue4',
        '--blue5',
    ]],
    ['Cerulean', [
        '--cerulean1',
        '--cerulean2',
        '--cerulean3',
        '--cerulean4',
        '--cerulean5',
    ]],
    ['Turquoise', [
        '--turquoise1',
        '--turquoise2',
        '--turquoise3',
        '--turquoise4',
        '--turquoise5',
    ]],
    ['Green', [
        '--green1',
        '--green2',
        '--green3',
        '--green4',
        '--green5',
    ]],
    ['Forest', [
        '--forest1',
        '--forest2',
        '--forest3',
        '--forest4',
        '--forest5',
    ]],
    ['Lime', [
        '--lime1',
        '--lime2',
        '--lime3',
        '--lime4',
        '--lime5',
    ]],
    ['Gold', [
        '--gold1',
        '--gold2',
        '--gold3',
        '--gold4',
        '--gold5',
    ]],
    ['Orange', [
        '--orange1',
        '--orange2',
        '--orange3',
        '--orange4',
        '--orange5',
    ]],
    ['Sepia', [
        '--sepia1',
        '--sepia2',
        '--sepia3',
        '--sepia4',
        '--sepia5',
    ]]
]

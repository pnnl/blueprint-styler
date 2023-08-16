import * as React from "react";
import { ExampleMap, ExampleProps } from "@blueprintjs/docs-theme";
import { BlueprintExampleData } from "./types";

import * as CoreExamples from "../examples/core-examples";
import * as DateExamples from "../examples/datetime-examples";
import * as SelectExamples from "../examples/select-examples";
import * as TableExamples from "../examples/table-examples";
import { getTheme } from '../components/BlueprintStylerApp';

/** Interface for `IExampleProps` `data` in this here Blueprint docs-app. */


const SRC_HREF_BASE = "https://github.com/palantir/blueprint/blob/develop/packages/docs-app/src/examples";

function getPackageExamples(
    packageName: string,
    packageExamples: { [name: string]: React.ComponentClass<ExampleProps<BlueprintExampleData>> },
) {
    const ret: ExampleMap = {};
    for (const exampleName of Object.keys(packageExamples)) {
        const example = packageExamples[exampleName];
        const fileName = exampleName.charAt(0).toLowerCase() + exampleName.slice(1) + ".tsx";
        ret[exampleName] = {
            render: props => React.createElement(example, { ...props, data: { themeName: getTheme() } }),
            sourceUrl: [SRC_HREF_BASE, `${packageName}-examples`, fileName].join("/"),
        };
    }
    return ret;
}

export const reactExamples: ExampleMap = (() => {
    return {
        ...getPackageExamples("core", CoreExamples as any),
        ...getPackageExamples("datetime", DateExamples as any),
        ...getPackageExamples("select", SelectExamples as any),
        ...getPackageExamples("table", TableExamples as any),
    };
})();

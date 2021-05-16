import * as React from "react";
import { Button, Classes, ControlGroup, HTMLSelect, Icon, InputGroup, TagInput } from "@blueprintjs/core";
import { Example, IExampleProps } from "@blueprintjs/docs-theme";

export class CustomWorkingExample extends React.PureComponent<IExampleProps> {

    // this is a workspace for specific combinations of components

    public render() {
        return (
            <Example options={false} {...this.props}>

                <ControlGroup fill >
                    <TagInput
                        // onChange={updateSearchFilter}
                        // inputValue={text}
                        // onInputChange={(e) => setText((e.target as HTMLInputElement).value)}
                        // values={terms}
                        values={['one', 'two', 'three']}
                        placeholder="Enter search terms..."
                        rightElement={
                            <Button
                                // onClick={clearSearch}
                                icon={'cross'} minimal
                                // disabled={terms.length === 0 && text.length === 0}
                            />
                        }
                        tagProps={{minimal: true}}
                        fill
                        leftIcon={'search'}
                    />
                    <Button
                        text={'Search'}
                        intent={'primary'}
                        type="submit"
                        className={Classes.FIXED}
                    />
                </ControlGroup>

                <ControlGroup fill >
                    <InputGroup
                        // onChange={updateSearchFilter}
                        // inputValue={text}
                        // onInputChange={(e) => setText((e.target as HTMLInputElement).value)}
                        // values={terms}
                        type={'text'}
                        value={'one two three'}
                        placeholder="Enter search terms..."
                        rightElement={
                            <Button
                                // onClick={clearSearch}
                                icon={'cross'} minimal
                                // disabled={terms.length === 0 && text.length === 0}
                            />
                        }
                        fill
                        leftIcon={'search'}
                    />
                    <Button
                        text={'Search'}
                        intent={'primary'}
                        type="submit"
                        className={Classes.FIXED}
                    />
                    {/* <HTMLSelect>
                        <option selected>Choose an item...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                    </HTMLSelect> */}
                </ControlGroup>

                <ControlGroup fill >
                    <InputGroup
                        // onChange={updateSearchFilter}
                        // inputValue={text}
                        // onInputChange={(e) => setText((e.target as HTMLInputElement).value)}
                        // values={terms}
                        type={'search'}
                        // value={'one two three'}
                        placeholder={`this is type="search"`}
                        rightElement={
                            <Button
                                // onClick={clearSearch}
                                icon={'cross'} minimal
                            // disabled={terms.length === 0 && text.length === 0}
                            />
                        }
                        fill
                        leftIcon={'search'}
                    />
                    <Button
                        text={'Search'}
                        intent={'primary'}
                        type="submit"
                        className={Classes.FIXED}
                    />
                </ControlGroup>

            </Example>
        );
    }
}

import * as React from "react";
import {
    Alert, AlertProps, Breadcrumbs, Button, ButtonGroup, Callout, Card, Checkbox, Classes,
    ControlGroup, Dialog, DialogProps, Divider, Drawer, DrawerProps, FormGroup, H2, H3, H5,
    HTMLSelect, Icon, InputGroup, Intent, Menu, MenuDivider, MenuItem, NumericInput, ProgressBar,
    Radio, RadioGroup, Slider, Spinner, Switch, Tab, Tabs, TextArea, Toast, Toaster, ToastProps
} from "@blueprintjs/core";
import { Example, IExampleProps, handleStringChange } from "@blueprintjs/docs-theme";
import { DateRangeInput } from "@blueprintjs/datetime";
import { Popover2, Popover2Props } from "@blueprintjs/popover2";
import { capitalizeFirstLetter, DivFC, intents, noOp, randomIcon, randomLorem, TextSample, vibes } from "./utils";

export class SampleExample extends React.PureComponent<IExampleProps> {
    public render() {
        return (
            <Example options={false} {...this.props}>

                <div className="content-sample">

                    <Breadcrumbs items={[
                        { onClick: noOp, text: "Bread" },
                        { onClick: noOp, text: "Crumbs" },
                        { text: "Sample" },
                    ]} />

                    <div className="text-sample">
                        <H2>Text Sample</H2>
                        <TextSample />
                        <OverlaySample>
                            <Button
                                text="Open Popovers"
                                intent="primary"
                                minimal
                                rightIcon="chevron-right"
                                style={{ marginLeft: -8 }}
                            />
                        </OverlaySample>
                    </div>

                    <Divider />

                    <div className="tabs-sample">
                        <Tabs>
                            <Tab id="b" title={<>Controls &amp; Loaders</>} panel={<ControlsLoadingSample />} />
                            <Tab id="d" title="Callout" panel={<CalloutSample />} />
                            <Tab id="c" title="Card" panel={<CardSample />} />
                            <Tab id="a" title="Intents" panel={<IntentsSample />} />
                        </Tabs>
                    </div>

                    <Divider />

                </div>

                <FormSample className="form-sample"  />

            </Example>
        );
    }
}





const IntentsSample: DivFC = (props) => (
    <div className="tab-sample intent-sample" {...props}>
        {[{}, { outlined: true }, { minimal: true }].map((typeProps, i) => intents.map((intent, ii) => (
            <Button {...typeProps} intent={intent} text={capitalizeFirstLetter(intent)} icon={randomIcon()} key={`${i}${ii}`} />
        )))}
    </div>
)

type LoadingState = 'Static' | 'Loading' | 'Primary'
const ControlsLoadingSample: DivFC = (props) => {
    const progress = 0.7;
    const [loadingState, setLoadingState] = React.useState<LoadingState>('Static')
    return (
        <div className="tab-sample group-tab-sample" {...props}>
            <ControlGroup fill>
                <HTMLSelect options={vibes} fill />
                <InputGroup placeholder="ControlGroup" fill />
                <Button icon="arrow-right" />
            </ControlGroup>

            <ButtonGroup fill>
                {['Static', 'Loading', 'Primary'].map((l: LoadingState) => (
                    <Button key={l} text={l} active={loadingState === l} onClick={() => setLoadingState(l)} />
                ))}
            </ButtonGroup>

            <ProgressBar
                value={progress}
                stripes={loadingState !== 'Static'}
                intent={loadingState === 'Primary' ? 'primary' : undefined}
            />

            <span style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                <Spinner
                    size={20}
                    value={loadingState === 'Static' ? progress : undefined}
                    intent={loadingState === 'Primary' ? 'primary' : undefined}
                />
                <span>Loading...</span>
            </span>

        </div>
    )
}

const CardSample: DivFC = (props) => (
    <div className="tab-sample card-tab-sample" {...props}>
        <Card interactive>
            <H5>
                <a href="#example">Analytical applications</a>
            </H5>
            <p>
                User interfaces that enable people to interact smoothly with data, ask better questions, and
                make better decisions.
            </p>
            <Button text="Explore products" />
        </Card>
    </div>
)

const CalloutSample: DivFC = (props) => {
    const [intentIndex, setIntentIndex] = React.useState(0)
    const intent: Intent = intents[intentIndex % 5]
    return (
        <div className="tab-sample callout-tab-sample" {...props}>
            <Callout intent={intent} title="Visually important content" icon={intent === 'none' ? "info-sign" : undefined} >
                The component is a simple wrapper around the CSS API that provides props for modifiers and optional
                title element. Any additional HTML props will be spread to the rendered <code>{"<div>"}</code> element.
                <br />
                <Button
                    minimal
                    small
                    text="Cycle intent"
                    onClick={() => setIntentIndex(intentIndex + 1)}
                    style={{ margin: '0.25rem -8px', textDecoration: 'underline' }}
                />
            </Callout>
        </div>
    )
}


const OverlaySample: React.FC<Popover2Props> = (props) => {

    const [isAlertOpen, setAlertOpen] = React.useState(false)
    const [isDialogOpen, setDialogOpen] = React.useState(false)
    const [isDrawerOpen, setDrawerOpen] = React.useState(false)

    const [toasts, setToasts] = React.useState<(ToastProps & { key: string })[]>([])
    const dismissToast = React.useCallback((index: number) => {
        const _toasts = [...toasts]
        _toasts.splice(index, 1)
        setToasts(_toasts)
    }, [toasts, setToasts])
    const createToast = React.useCallback((intent: Intent) => {
        setToasts(toasts.concat({
            message: (<div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <Icon icon={randomIcon()} />
                <div>
                    <b>Toast {capitalizeFirstLetter(intent)}:</b>{' '}
                    <span>{randomLorem(2)}</span>
                    <div style={{ marginTop: 6 }}>
                        <Button text="Button" style={{ flex: '0 0 auto' }} />{' '}
                        <Button text="Minimal" minimal style={{ flex: '0 0 auto' }} />
                    </div>
                </div>
            </div>),
            intent,
            key: Math.random().toString()
        }))
    }, [toasts, setToasts])
    const Toasts = toasts.map((toastProps, index) => (
        <Toast {...toastProps} onDismiss={() => dismissToast(index)} timeout={0} />
    ))

    const MenuSample = (
        <Menu>
            <MenuItem icon="modal" text="Open Alert" onClick={() => setAlertOpen(true)} />
            <MenuItem icon="application" text="Open Dialog" onClick={() => setDialogOpen(true)} />
            <MenuItem icon="drawer-right" text="Open Drawer" onClick={() => setDrawerOpen(true)} />
            <MenuDivider />
            <MenuItem icon="notifications" text="Toast...">
                <MenuItem icon="info-sign" text="Info" onClick={() => createToast('none')} />
                <MenuItem icon="circle-arrow-up" text="Primary" intent="primary" onClick={() => createToast('primary')} />
                <MenuItem icon="tick-circle" text="Success" intent="success" onClick={() => createToast('success')} />
                <MenuItem icon="warning-sign" text="Warning" intent="warning" onClick={() => createToast('warning')} />
                <MenuItem icon="error" text="Danger" intent="danger" onClick={() => createToast('danger')} />
            </MenuItem>
            <MenuDivider />
            <MenuItem icon="remove" text="disabled" disabled />
            <MenuItem icon="tick" text="selected" selected />
        </Menu>
    );
    return (<>
        <Popover2 content={MenuSample} placement="right" {...props} />
        <DialogSample isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} />
        <AlertSample isOpen={isAlertOpen} onClose={() => setAlertOpen(false)} />
        <DrawerSample isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
        <Toaster position="top-right" children={Toasts} />
    </>);
}

const DialogSample: React.FC<DialogProps> = (props) => {
    return (
        <Dialog
            title="Dialog"
            {...props}
        >
            <div className={Classes.DIALOG_BODY}>
                <p>{randomLorem(4)}</p>
                <p>{randomLorem(2)}</p>
                <p>{randomLorem(3)}</p>
            </div>
            <div className={Classes.DIALOG_FOOTER}>
                <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                    <Button text="Confirm" intent="primary" />
                    <Button text="Cancel" />
                </div>
            </div>
        </Dialog>
    )
}

const AlertSample: React.FC<AlertProps> = (props) => {
    return (
        <Alert
            confirmButtonText="Confirm"
            cancelButtonText="Cancel"
            intent="primary"
            {...props}
        >
            <p><b>Alert:</b> {randomLorem(3)}</p>
        </Alert>
    )
}
const DrawerSample: React.FC<DrawerProps> = (props) => {
    return (
        <Drawer
            title="Drawer"
            {...props}
        >
            <div className={Classes.DRAWER_BODY}>
                <div className={Classes.DIALOG_BODY}>
                    <H3>Lorem Ipsum</H3>
                    <p>{randomLorem(4)}</p>
                    <H3>Dolor Sit Amet</H3>
                    <p>{randomLorem(2)}</p>
                    <H3>Consectetur Adipiscing Elit</H3>
                    <p>{randomLorem(3)}</p>
                </div>
            </div>
            <div className={Classes.DRAWER_FOOTER}>Footer</div>
        </Drawer>
    )
}

const FormSample: DivFC = (props) => {
    const [radioValue, setRadioValue] = React.useState<string>()
    const [sliderValue, setSliderValue] = React.useState(4)
    const [isDisabled, setDisabled] = React.useState(false)
    const d = { disabled: isDisabled }
    return (
        <div {...props}>
            <FormGroup label="Text Input Group" >
                <InputGroup
                    placeholder="Why"
                    type="text"
                    fill
                    rightElement={<Button minimal text="more" intent="primary" rightIcon="caret-down" {...d} />}
                    {...d}
                />
            </FormGroup>
            <FormGroup label="Select" >
                <HTMLSelect
                    placeholder="vibe"
                    options={vibes}
                    fill
                    {...d}
                />
            </FormGroup>
            <FormGroup label="Numeric Input">
                <NumericInput
                    placeholder="How many?"
                    fill
                    {...d}
                />
            </FormGroup>
            <FormGroup label="Date Range" >
                <DateRangeInput
                    formatDate={noOp}
                    parseDate={noOp}
                    startInputProps={{ fill: true }}
                    endInputProps={{ fill: true }}
                    {...d}
                />
            </FormGroup>
            <FormGroup label="Text Area" >
                <TextArea
                    placeholder="Please explain"
                    style={{ resize: 'vertical' }}
                    fill
                    {...d}
                />
            </FormGroup>
            <FormGroup label="Slider" labelInfo={sliderValue}>
                <Slider
                    min={0}
                    max={10}
                    stepSize={0.1}
                    labelRenderer={false}
                    value={sliderValue}
                    onChange={(value) => setSliderValue(Math.round(value * 10) / 10)}
                    {...d}
                />
            </FormGroup>
            <FormGroup>
                <Switch label="Switch" {...d} />
            </FormGroup>
            <div style={{ display: 'flex' }}>
                <FormGroup label="Checkbox" style={{ flex: '0 0 50%' }}>
                    <Checkbox label="Indeterminate" defaultIndeterminate {...d} />
                    <Checkbox label="Checked" checked {...d} />
                    <Checkbox label="UnChecked" {...d} />
                </FormGroup>
                <RadioGroup
                    label="Radio"
                    name="group"
                    onChange={handleStringChange((value) => setRadioValue(value))}
                    selectedValue={radioValue}
                    {...d}
                >
                    <Radio label="This" value="one" />
                    <Radio label="That" value="two" />
                    <Radio label="The Other" value="three" />
                </RadioGroup>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
                <Button intent="primary" text="Submit" {...d} />
                <Button text="Cancel" {...d} />
                <Button text={isDisabled ? "Enable" : "Disable"} minimal onClick={() => setDisabled(!isDisabled)} />
            </div>
        </div>


    )
}

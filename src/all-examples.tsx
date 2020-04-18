import * as CoreExamples from './examples/core-examples';

type ComponentSet = [string, React.ComponentClass[]]
type NestedComponentSets = [string, ComponentSet[]][];

export const allExamples: NestedComponentSets = [
    ['Components', [
        ['Breadcrumbs', [CoreExamples.BreadcrumbsExample,]],
        ['Button', [
            CoreExamples.ButtonsExample,
            CoreExamples.ButtonsIconsExample,
        ]],
        ['Button Group', [
            CoreExamples.ButtonGroupExample,
            CoreExamples.ButtonGroupPopoverExample,
        ]],
        ['Callout', [CoreExamples.CalloutExample,]],
        ['Card', [CoreExamples.CardExample,]],
        ['Collapse', [CoreExamples.CollapseExample,]],
        ['Collapsible list', [CoreExamples.CollapsibleListExample,]],
        ['Divider', [CoreExamples.DividerExample,]],
        ['Editable text', [CoreExamples.EditableTextExample,]],
        // ['HTML elements', []],
        // ['HTML table', []],
        // ['Hotkeys', [
        //     CoreExamples.HotkeyPiano,
        //     CoreExamples.HotkeyTester,
        // ]],
        ['Icon', [CoreExamples.IconExample,]],
        ['Menu', [
            CoreExamples.MenuExample,
            CoreExamples.DropdownMenuExample,
        ]],
        ['Navbar', [CoreExamples.NavbarExample,]],
        ['Non-ideal state', [CoreExamples.NonIdealStateExample,]],
        ['Overflow list', [CoreExamples.OverflowListExample,]],
        ['Panel stack', [CoreExamples.PanelStackExample,]],
        ['Progress bar', [CoreExamples.ProgressExample,]],
        ['Skeleton', []],
        ['Spinner', [CoreExamples.SpinnerExample,]],
        ['Tabs', [CoreExamples.TabsExample,]],
        ['Tag', [CoreExamples.TagExample,]],
        ['Text', [CoreExamples.TextExample,]],
        ['Tree', [CoreExamples.TreeExample,]],
    ]],

    ['Form Controls', [
        ['Form group', [CoreExamples.FormGroupExample]],
        ['Control group', [CoreExamples.ControlGroupExample,]],
        // ['Label', []],
        ['Checkbox', [CoreExamples.CheckboxExample,]],
        ['Radio', [CoreExamples.RadioExample,]],
        // ['HTML select', []],
        ['Slider', [
            CoreExamples.SliderExample,
            CoreExamples.RangeSliderExample,
            CoreExamples.MultiSliderExample,
        ]],
        ['Switch', [CoreExamples.SwitchExample,]],
    ]],

    ['Form Inputs', [
        ['File input', [CoreExamples.FileInputExample,]],
        ['Numeric input', [
            CoreExamples.NumericInputBasicExample,
            CoreExamples.NumericInputExtendedExample,
        ]],
        ['Text inputs', [CoreExamples.InputGroupExample,]],
        ['Tag input', [CoreExamples.TagInputExample]],
    ]],

    ['Overlays', [
        ['Overlay', [CoreExamples.OverlayExample,]],
        ['Portal', [CoreExamples.PopoverPortalExample,]],
        ['Alert', [CoreExamples.AlertExample,]],
        ['Context menu', [CoreExamples.ContextMenuExample,]],
        ['Dialog', [CoreExamples.DialogExample,]],
        ['Drawer', [CoreExamples.DrawerExample,]],
        ['Popover', [
            CoreExamples.PopoverDismissExample,
            CoreExamples.PopoverExample,
            CoreExamples.PopoverInteractionKindExample,
            CoreExamples.PopoverMinimalExample,
            CoreExamples.PopoverPositionExample,
            CoreExamples.PopoverSizingExample,
        ]],
        ['Toast', [CoreExamples.ToastExample,]],
        ['Tooltip', [CoreExamples.TooltipExample,]],
    ]],

    ['Other', [
        ['Focus', [
            CoreExamples.FocusExample,
        ]],
    ]]
];

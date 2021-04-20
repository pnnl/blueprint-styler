import * as CoreExamples from '../examples/core-examples';
import { CustomWorkingExample } from '../examples/custom-examples/customWorkingExample';
import * as DateTimeExamples from '../examples/datetime-examples';
import * as SelectExamples from '../examples/select-examples';
import * as TableExamples from '../examples/table-examples';
import * as TimezoneExamples from '../examples/timezone-examples';


type ComponentSet = [string, React.ComponentClass[]]
type NestedComponentSets = [string, ComponentSet[]][];

export const allExamples: NestedComponentSets = [
    // ['Working Example', [ // for working on specific use cases
    //     ['Custom Working Example', [CustomWorkingExample,]],
    // ]],
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
        // ['Tree', [CoreExamples.TreeExample,]],
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
    ]],

    ['DateTime', [
        ['Date Input', [DateTimeExamples.DateInputExample]],
        ['Date Range Input', [DateTimeExamples.DateRangeInputExample]],
        ['Date Picker', [DateTimeExamples.DatePickerExample]],
        ['Date Range Picker', [DateTimeExamples.DateRangePickerExample]],
        ['DateTime Picker', [DateTimeExamples.DateTimePickerExample]],
        ['Time Picker', [DateTimeExamples.TimePickerExample]],
        ['Timezone Picker', [TimezoneExamples.TimezonePickerExample]],
    ]],

    // ['Timezone', [ ['Timezone Picker', [TimezoneExamples.TimezonePickerExample]] ]],

    ['Select', [
        ['MultiSelect', [SelectExamples.MultiSelectExample]],
        ['Omnibar', [SelectExamples.OmnibarExample]],
        ['Select', [SelectExamples.SelectExample]],
        ['Suggest', [SelectExamples.SuggestExample]],
    ]],

    ['Table', [
        // TODO: add a component that wraps these components to optionally load them.
        // // ... because they slow the page down

        ['Table Editable', [TableExamples.TableEditableExample]],
        // ['Table Loading', [TableExamples.TableLoadingExample]],
        // ['Table Reorderable', [TableExamples.TableReorderableExample]],
        // ['Table Sortable', [TableExamples.TableSortableExample]],

        // Less useful for styling
        // ['Cell Loading', [TableExamples.CellLoadingExample]],
        // ['Column Loading', [TableExamples.ColumnLoadingExample]],
        // ['Table Dollar', [TableExamples.TableDollarExample]],
        // ['Table Formats', [TableExamples.TableFormatsExample]],
        // ['Table Freezing', [TableExamples.TableFreezingExample]],
    ]],

];

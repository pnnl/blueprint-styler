import { ExampleProps } from '@blueprintjs/docs-theme';
import * as CustomExamples from '../examples/custom-examples';
import * as CoreExamples from '../examples/core-examples';
import * as DateTimeExamples from '../examples/datetime-examples';
import * as SelectExamples from '../examples/select-examples';
import * as TableExamples from '../examples/table-examples';

type ExampleComponentName = string // must be equal to the example component class name
type ExampleComponentClass = React.ComponentClass<ExampleProps<{}> | Readonly<ExampleProps<{}>>>
type ExampleFC = React.FC<ExampleProps>
type ComponentSetName = string
type ComponentSet = [ComponentSetName, [ExampleComponentClass | ExampleFC, ExampleComponentName][]]
type GroupedComponentSets = [string, ComponentSet[]][];

export const allExamples: GroupedComponentSets = [
    ['Core', [
        // ['Custom Working Example', [[CustomExamples.CustomWorkingExample, 'CustomWorkingExample'],]], // for working on specific use cases
        ['Sample', [[CustomExamples.SampleExample, 'SampleExample'],]],
        ['Colors', [[CustomExamples.ColorsExample, 'ColorsExample'],]],
        ['Typography', [[CustomExamples.TypographyExample, 'TypographyExample'],]],
    ]],
    ['Components', [
        ['Breadcrumbs', [[CoreExamples.BreadcrumbsExample, 'BreadcrumbsExample'],]],
        ['Button', [
            [CoreExamples.ButtonsExample, 'ButtonsExample'],
            [CoreExamples.ButtonsIconsExample, 'ButtonsIconsExample'],
        ]],
        ['Button Group', [
            [CoreExamples.ButtonGroupExample, 'ButtonGroupExample'],
            [CoreExamples.ButtonGroupPopoverExample, 'ButtonGroupPopoverExample'],
        ]],
        ['Callout', [[CoreExamples.CalloutExample, 'CalloutExample'],]],
        ['Card', [[CoreExamples.CardExample, 'CardExample'],]],
        ['Collapse', [[CoreExamples.CollapseExample, 'CollapseExample'],]],
        ['Divider', [[CoreExamples.DividerExample, 'DividerExample'],]],
        ['Editable text', [[CoreExamples.EditableTextExample, 'EditableTextExample'],]],
        // ['HTML elements', [[]]],
        // ['HTML table', [[]]],
        // ['Hotkeys', [
        //     [CoreExamples.HotkeyPiano, 'HotkeyPiano'],
        //     [CoreExamples.HotkeyTesterExample, 'HotkeyTesterExample'],
        // ]],
        ['Icon', [[CoreExamples.IconExample, 'IconExample'],]],
        ['Menu', [
            [CoreExamples.MenuExample, 'MenuExample'],
            [CoreExamples.DropdownMenuExample, 'DropdownMenuExample'],
        ]],
        ['Navbar', [[CoreExamples.NavbarExample, 'NavbarExample'],]],
        ['Non-ideal state', [[CoreExamples.NonIdealStateExample, 'NonIdealStateExample'],]],
        ['Overflow list', [[CoreExamples.OverflowListExample, 'OverflowListExample'],]],
        ['Panel stack', [[CoreExamples.PanelStack2Example, 'PanelStack2Example'],]],
        ['Progress bar', [[CoreExamples.ProgressExample, 'ProgressExample'],]],
        ['Section', [[CoreExamples.SectionExample, 'SectionExample'],]],
        ['Card list', [[CoreExamples.CardListExample, 'CardListExample'],]],
        // ['Skeleton', [[]]],
        ['Spinner', [[CoreExamples.SpinnerExample, 'SpinnerExample'],]],
        ['Tabs', [[CoreExamples.TabsExample, 'TabsExample'],]],
        ['Tag', [[CoreExamples.TagExample, 'TagExample'],]],
        ['Text', [[CoreExamples.TextExample, 'TextExample'],]],
        // ['Tree', [[CoreExamples.TreeExample, 'TreeExample'],]],
    ]],

    ['Form Controls', [
        ['Form group', [[CoreExamples.FormGroupExample, 'FormGroupExample'],]],
        ['Control group', [[CoreExamples.ControlGroupExample, 'ControlGroupExample'],]],
        // ['Label', [[]]],
        ['Checkbox', [[CoreExamples.CheckboxExample, 'CheckboxExample'],]],
        ['Radio', [[CoreExamples.RadioExample, 'RadioExample'],]],
        // ['HTML select', [[]]],
        ['Slider', [
            [CoreExamples.SliderExample, 'SliderExample'],
            [CoreExamples.RangeSliderExample, 'RangeSliderExample'],
            [CoreExamples.MultiSliderExample, 'MultiSliderExample'],
        ]],
        ['Switch', [[CoreExamples.SwitchExample, 'SwitchExample'],]],
        // ['Search Field', [[CoreExamples.SearchInputExample, 'SearchInputExample'],]],
    ]],

    ['Form Inputs', [
        ['File input', [[CoreExamples.FileInputExample, 'FileInputExample'],]],
        ['Numeric input', [
            [CoreExamples.NumericInputBasicExample, 'NumericInputBasicExample'],
            [CoreExamples.NumericInputExtendedExample, 'NumericInputExtendedExample'],
        ]],
        ['Text inputs', [[CoreExamples.InputGroupExample, 'InputGroupExample'],]],
        ['Tag input', [[CoreExamples.TagInputExample, 'TagInputExample'],]],
    ]],

    ['Overlays', [
        ['Overlay', [[CoreExamples.OverlayExample, 'OverlayExample'],]],
        ['Portal', [[CoreExamples.PopoverPortalExample, 'PopoverPortalExample'],]],
        ['Alert', [[CoreExamples.AlertExample, 'AlertExample'],]],
        // ['Context menu', [[CoreExamples.ContextMenuExample, 'ContextMenuExample'],]], // Decorator
        // ['Context menu', [[CoreExamples.ContextMenuPopoverExample, 'ContextMenuPopoverExample'],]],
        ['Dialog', [[CoreExamples.DialogExample, 'DialogExample'],]],
        ['Drawer', [[CoreExamples.DrawerExample, 'DrawerExample'],]],
        ['Popover', [
            // [CoreExamples.PopoverDismissExample, 'PopoverDismissExample'],
            [CoreExamples.PopoverExample, 'PopoverExample'],
            [CoreExamples.PopoverInteractionKindExample, 'PopoverInteractionKindExample'],
            [CoreExamples.PopoverMinimalExample, 'PopoverMinimalExample'],
            [CoreExamples.PopoverPlacementExample, 'PopoverPlacementExample'],
            [CoreExamples.PopoverSizingExample, 'PopoverSizingExample'],
        ]],
        ['Toast', [[CoreExamples.ToastExample, 'ToastExample'],]],
        ['Tooltip', [[CoreExamples.TooltipExample, 'TooltipExample'],]],
    ]],

    ['Other', [
        ['Focus', [
            [CoreExamples.FocusExample, 'FocusExample'],
        ]],
    ]],

    ['DateTime', [
        ['Date Input', [[DateTimeExamples.DateInputExample, 'DateInputExample'],]],
        ['Date Range Input', [[DateTimeExamples.DateRangeInputExample, 'DateRangeInputExample'],]],
        ['Date Picker', [[DateTimeExamples.DatePickerExample, 'DatePickerExample'],]],
        ['Date Range Picker', [[DateTimeExamples.DateRangePickerExample, 'DateRangePickerExample'],]],
        ['Time Picker', [[DateTimeExamples.TimePickerExample, 'TimePickerExample'],]],
        ['Timezone Picker', [[DateTimeExamples.TimezoneSelectExample, 'TimezoneSelectExample'],]],
    ]],

    ['Select', [
        ['MultiSelect', [[SelectExamples.MultiSelectExample, 'MultiSelectExample'],]],
        ['Omnibar', [[SelectExamples.OmnibarExample, 'OmnibarExample'],]],
        ['Select', [[SelectExamples.SelectExample, 'SelectExample'],]],
        ['Suggest', [[SelectExamples.SuggestExample, 'SuggestExample'],]],
    ]],

    ['Table', [
        // TODO: add a component that wraps these components to optionally load them.
        // // ... because they slow the page down

        ['Table Editable', [[TableExamples.TableEditableExample, 'TableEditableExample'],]],
        // ['Table Loading', [[TableExamples.TableLoadingExample, 'TableLoadingExample'],]],
        // ['Table Reorderable', [[TableExamples.TableReorderableExample, 'TableReorderableExample'],]],
        // ['Table Sortable', [[TableExamples.TableSortableExample, 'TableSortableExample'],]],

        // Less useful for styling
        // ['Cell Loading', [[TableExamples.CellLoadingExample, 'CellLoadingExample'],]],
        // ['Column Loading', [[TableExamples.ColumnLoadingExample, 'ColumnLoadingExample'],]],
        // ['Table Dollar', [[TableExamples.TableDollarExample, 'TableDollarExample'],]],
        // ['Table Formats', [[TableExamples.TableFormatsExample, 'TableFormatsExample'],]],
        // ['Table Freezing', [[TableExamples.TableFreezingExample, 'TableFreezingExample'],]],
    ]],

];

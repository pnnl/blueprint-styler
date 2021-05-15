import React from 'react'
import { createUseDisableImportedStyles } from '../useDisableImportedStyles'
import './styler-styles.scss'

const useDisableImportedStyles = createUseDisableImportedStyles()

export const CssComponent: React.FC = (props) => {
    useDisableImportedStyles()
    return <>{props.children}</>
}
export default CssComponent

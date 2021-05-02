import React from 'react'
import { createUseDisableImportedStyles } from '../useDisableImportedStyles'
import './styler-styles.scss'
const useDisableImportedStyles = createUseDisableImportedStyles()

export const CssComponent: React.FC<{}> = () => {
    useDisableImportedStyles()
    return null
}
export default CssComponent

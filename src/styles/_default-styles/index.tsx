import React from 'react'
import { createUseGlobalStyleSwitcher } from '../../components/useGlobalStyleSwitcher'
import './styler-styles.scss'
const useGlobalStyleSwitcher = createUseGlobalStyleSwitcher()

export const CssComponent: React.FC<{}> = () => {
    useGlobalStyleSwitcher()
    return null
}
export default CssComponent

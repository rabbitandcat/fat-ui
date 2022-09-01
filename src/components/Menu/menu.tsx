import React, {FC} from 'react'
import classNames from 'classnames'

type MenuMode = 'horizontal' | 'vertical'
export interface MenuProps {
    defaultIndex?: number
    className?: string
    mode?: MenuMode
    children: any
    style?: React.CSSProperties
    onSelect?: (selectedIndex: number) => void
}

const Menu: FC<MenuProps> = (props) => {
    const {
        className,
        mode,
        style,
        children,
        defaultIndex
    } = props
    const classes = classNames('viking-menu', className, {
        'menu-vertical': mode === 'vertical'
    })
    return (
        <ul 
        className={classes}
        style={style}
        >
            {children}
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal',
}

export default Menu
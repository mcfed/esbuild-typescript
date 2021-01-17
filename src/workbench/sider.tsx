import React from 'react'
import { Alignment, Classes, Icon, Menu, MenuDivider, MenuItem, Navbar } from '@blueprintjs/core'



interface PSider {
    menu: Array<any>
}

export function RFSider(props: PSider) {

    return (
        <Menu className={Classes.ELEVATION_1}>
            <MenuItem text="Custom SVG icon" label="⌘X" />
            <MenuDivider />
            <MenuItem icon="new-text-box" text="New text box" label="⌘T"/>
            <MenuItem icon="new-object" text="New object" label="⌘N" />
            <MenuItem icon="new-link" text="New link" />
            <MenuDivider />
            <MenuItem icon="cog" labelElement={<Icon icon="share" />} text="Settings..." />
        </Menu>
    )
}
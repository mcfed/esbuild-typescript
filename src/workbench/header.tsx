import { Alignment, Button, Navbar } from '@blueprintjs/core'
import React from 'react'


interface PHeader {
    title:String
}

export function Header(props: PHeader) {
    return (
        <Navbar className="bp3-dark">
            <Navbar.Group align={Alignment.RIGHT}>
                <Navbar.Heading>{props.title}</Navbar.Heading>
                <Navbar.Divider />
                <Button className="bp3-minimal" icon="home" text="Home" />
                <Button className="bp3-minimal" icon="document" text="Files" />
            </Navbar.Group>
        </Navbar>
    )
}
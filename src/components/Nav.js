import React, { useState } from 'react'
import Header from './header'
import Menu from './menu'

function Nav() {
    const [opened, setOpened] = useState(false)

    const toggle = () => {
        setOpened(!opened)
    }

    return (
        <header>
            <Header opened={opened} toggle={toggle} />
            <Menu opened={opened} toggle={toggle} />
        </header>
    )
}
export default Nav

# react-ui-drawer
Drawer is a panel that is slides in from Left, Right, Top or Bottom.

## How to Install

Make sure you have [Node.js](http://nodejs.org/) and NPM installed.

```sh
npm install react-ui-drawer
```
Or
```sh
yarn add react-ui-drawer
```

## How to Use
```sh
import React, { useState } from 'react'
import Drawer from 'react-ui-drawer'

const DrawerDemo = () => {
  const [showDrawer, setShowDrawer] = useState(false)

  const handleOpenDrawer = () => {
    setShowDrawer(prevState => !prevState)
  }

  return (
    <>
      <button
        className='open-drawer-button'
        onClick={() => setShowDrawer(prevState => !prevState)}>
        Open Drawer
      </button>
      {showDrawer && (
        <Drawer requestClose={() => setShowDrawer(false)}>
          Your Content Goes here...
        </Drawer>
      )}
    </>
  )
}
```

## Drawer Positions Available

```sh
import React, { useState } from 'react'
import Drawer from 'react-ui-drawer'

const POSITIONS = ['left', 'right', 'top', 'bottom']
const menuItems = [
  {
    name: 'Home',
    icon: 'fa-home'
  },
  {
    name: 'Contacts',
    icon: 'fa-address-book'
  },
  {
    name: 'Messages',
    icon: 'fa-envelope'
  },
  {
    name: 'Podcast',
    icon: 'fa-podcast'
  },
  {
    name: 'Profile',
    icon: 'fa-user-circle-o'
  },
  {
    name: 'Settings',
    icon: 'fa-cogs'
  }
]

const DrawerDemo = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  const [position, setPosition] = useState('left')

  const handleOpenDrawer = (pos) => {
    setPosition(pos)
    setShowDrawer(prevState => !prevState)
  }

  return (
    <>
      <h4>Drawer Positions</h4>
      {POSITIONS.map((position, index) => (
        <button
          className='open-drawer-button'
          onClick={() => handleOpenDrawer(position)}>
          {`From ${position}`}
        </button>
      ))}
      {showDrawer && (
        <Drawer
          position={position}
          requestClose={() => setShowDrawer(false)}
        >
          <div className="links-container">
            {menuItems.map((link, index) => (
              <div className="link-section">
                <i className={`fa ${link.icon}`} />
                {link.name}
              </div>
            ))}
          </div>
        </Drawer>
      )}
    </>
  )
}
```
## Demo
![Tag Input Demo](https://github.com/Santhosh1392/react-ui-drawer/blob/main/demo/drawer.gif)

Check out [Online Demo](https://ky6tb.csb.app/) here.

## Available PropTypes

| Prop Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| position | String | left | Drawer position to open from [left, right, top, bottom] |
| requestClose | Function | null | Function to close opened Drawer |

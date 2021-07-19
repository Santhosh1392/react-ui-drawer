import React from 'react'
import './Drawer.scss'

const Drawer = ({children, requestClose, position}) => {
  return (
    <div className="drawer-backdrop">
      <div className={`drawer-content ${position}`}>
        <div className="close-icon" onClick={requestClose}>×</div>
        {children}
      </div>
    </div>
  )
}

Drawer.defultProps = {
  position: 'left'
}

export default Drawer
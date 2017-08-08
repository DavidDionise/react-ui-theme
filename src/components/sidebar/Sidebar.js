import React from 'react';
import propTypes from 'prop-types';

const Sidebar = (props) => {
  const {
    header,
    children
  } = props;

  return (
    <nav
      id='sidebar'
      className='sidebar'
      role='navigation'
      >
      <div className='js-sidebar-content'>
        <header className='logo hidden-sm-down'>
          {header}
        </header>
        {children}
      </div>
    </nav>
  )
}

export default Sidebar;

import React from 'react'
import {withRouter} from 'react-router-dom'

function NavbarItem(props) {
  const linkClasses = ['nav-link'];
  if (props.active) {
    linkClasses.push('active')
  }

  return (
    <li className="NavbarItem nav-item">
      <a className={linkClasses.join(' ')} href="/" onClick={(e) => {
        e.preventDefault();
        props.history.push(props.path);
      }}>
        {props.text}
      </a>
    </li>
  );
}

export default withRouter(NavbarItem);
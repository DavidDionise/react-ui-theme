import React from 'react';
import propTypes from 'prop-types';

const Header = (props) => {
  return (
    <nav className='page-controls navbar navbar-dashboard'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <ul className='nav navbar-nav'>
            <li className='nav-item'>
              <a
                className='hidden-md-down nav-link'
                id='nav-state-toggle'
                href='#'
                data-toggle='tooltip'
                data-html='true'
                data-original-title='Turn<br>on/off<br>sidebar<br>collapsing'
                data-placement='bottom'
                >
                <i className='fa fa-bars fa-lg' />
              </a>
              <a
                className='hidden-lg-up nav-link'
                id='nav-collapse-toggle'
                href='#'
                data-html='true'
                title='Show/hide<br>sidebar'
                data-placement='bottom'
                >
                <span className='rounded rounded-lg bg-gray text-white hidden-md-up'>
                  <i className='fa fa-bars fa-lg' />
                </span>
                <i className='fa fa-bars fa-lg hidden-sm-down' />
              </a>
            </li>
          </ul>
          <ul className='nav navbar-nav navbar-right hidden-md-up'>
            <li>
              <a href='#' data-toggle='chat-sidebar'>
                <span className='rounded rounded-lg bg-gray text-white'><i className='fa fa-globe fa-lg' /></span>
              </a>
            </li>
          </ul>
            <a className='navbar-brand hidden-md-up' href='index.html'>
              <i className='fa fa-circle text-gray mr-n-sm' />
              <i className='fa fa-circle text-warning' />
              &nbsp;
              sing
              &nbsp;
              <i className='fa fa-circle text-warning mr-n-sm' />
              <i className='fa fa-circle text-gray' />
            </a>
        </div>
        <div className='collapse navbar-collapse'>
          <ul className='nav navbar-nav pull-xs-right'>
            <li className='dropdown nav-item'>
              <a
                href='#'
                className='dropdown-toggle dropdown-toggle-notifications nav-link'
                id='notifications-dropdown-toggle'
                data-toggle='dropdown'
                >
                <span className='thumb-sm avatar pull-xs-left'>
                  <img className='img-circle' src='demo/img/people/a5.jpg' alt='...' />
                </span>
                &nbsp;
                Philip <strong>Smith</strong>&nbsp;
                <span className='circle bg-warning fw-bold'>
                  13
                </span>
                <b className='caret'></b>
              </a>
            </li>
            <li className='dropdown nav-item'>
              <a href='#' className='dropdown-toggle nav-link' data-toggle='dropdown'>
                <i className='fa fa-cog fa-lg' />
              </a>
              <ul className='dropdown-menu dropdown-menu-right'>
                <li>
                  <a className='dropdown-item' href='profile.html'>
                    <i className='glyphicon glyphicon-user' /> &nbsp; My Account
                  </a>
                </li>
                <li className='dropdown-divider'></li>
                <li>
                  <a className='dropdown-item' href='calendar.html'>Calendar</a>
                </li>
                <li>
                  <a className='dropdown-item' href='inbox.html'>
                    Inbox &nbsp;&nbsp;<span className='label label-pill label-danger animated bounceIn'>9</span>
                  </a>
                </li>
                <li className='dropdown-divider'></li>
                <li>
                  <a className='dropdown-item' href='login.html'>
                    <i className='fa fa-sign-out' /> &nbsp; Log Out
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

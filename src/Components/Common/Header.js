import React from 'react';
import { Link } from 'react-router-dom';
const Header = (props) => {
  return (
    <div className="ui borderless top fixed menu">
      <div className="ui text container">
        <div className="item">
          <Link to={'/'}>
            <img
              src="https://react.semantic-ui.com/logo.png"
              class="ui mini image"
            />
          </Link>
        </div>
        <div className="header item">
          <Link to={'/'}>E Com App</Link>
        </div>
        <a className="item">
          <Link to={'/about'}>About</Link>
        </a>
        <a className="item">
          <Link to={'/category'}>Category</Link>
        </a>
        <a className="item">
          <Link to={'/cart'}>Cart</Link>
        </a>
        <div class="right menu">
          <div
            role="listbox"
            aria-expanded="false"
            class="ui pointing dropdown link item"
            tabindex="0"
          >
            <div
              aria-atomic="true"
              aria-live="polite"
              role="alert"
              class="divider text"
            >
              Guest
            </div>
            <i aria-hidden="true" class="dropdown icon"></i>
            <div class="menu transition">
              <div role="option" class="item">
                List Item
              </div>
              <div role="option" class="item">
                List Item
              </div>
              <div class="divider"></div>
              <div class="header">Header Item</div>
              <div role="option" class="item">
                <i class="dropdown icon"></i>
                <span class="text">Submenu</span>
                <div class="menu transition">
                  <div role="option" class="item">
                    List Item
                  </div>
                  <div role="option" class="item">
                    List Item
                  </div>
                </div>
              </div>
              <div role="option" class="item">
                List Item
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

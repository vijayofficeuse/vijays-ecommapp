import React from "react";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <div id="footer-ecom" className="ui inverted vertical segment">
        <div className="ui center aligned container">
          <img src="https://react.semantic-ui.com/logo.png" className="ui mini centered image"/>
          <div role="list" class="ui small divided horizontal inverted link list">
            <a role="listitem" className="item" href="#"><Link to={'/contactus'}>Contact Us</Link></a>
            <a role="listitem" className="item" href="#"><Link to={'/'}>Terms and condition</Link></a>
            <a role="listitem" className="item" href="#"><Link to={'/'}>Privacy Policy</Link></a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import './footer.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'

function Footer(props) {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>
        <Logo className='logo-xd' />
          King<span> Clothing</span>
        </h3>

        <p class="footer-links">
          <Link to='/' className='footer-link'>Home</Link>
          <Link to='/shop' className='footer-link'>Shop</Link>
          <Link to='/shop/mens' className='footer-link'>Mens</Link>
          <Link to='/shop/womens' className='footer-link'>Womens</Link>
          <Link to='/checkout' className='footer-link' >CheckOut</Link>
        </p>

        <p class="footer-company-name">Made with ❤ by Azeem Subhani &copy; 2021</p>
      </div>

      <div class="footer-center">
        <div>
        <i class="fas fa-location"></i>
          <p>
             Lahore, Pakistan
          </p>
        </div>

        <div>
        <i class="fas fa-mobile"></i>
          <p>+92-306-4446303</p>
        </div>

        <div>
        <i class="fas fa-at"></i>
          <p>
            <a href="mailto:azeemforall4406148@gmail.com">azeemforall4406148@gmail.com</a>
          </p>
        </div>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span>About Me</span>
          I'm a Computer Scientist specialized in Front-end, Backend development  &amp; Mobile App development.
        </p>

        <div class="footer-icons">
          <Link to={{ pathname: 'https://www.facebook.com/azeemsubhani771998/' }} target='_blank'>
            <i className="fab fa-facebook icon-facebook"></i>
          </Link>
          <Link to={{ pathname: 'https://twitter.com/AzeewSubhani' }} target='_blank'>
            <i class="fab fa-twitter icon-twitter"></i>
          </Link>
          <Link to={{ pathname: 'https://www.linkedin.com/in/azeem-subhani-a6806a20b/' }} target='_blank'>
            <i className="fab fa-linkedin-in icon-linkedin"></i>
          </Link>
          <Link to={{ pathname: 'https://github.com/AzeemSubhani7' }} target="_blank">
            <i class="fab fa-github-square icon-github"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

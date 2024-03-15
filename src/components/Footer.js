import { animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <footer>
      <div className="container">
        <h1 className="logo text-center">Innoventures</h1>
        <p className="footer-text text-center " style={{fontSize: 'large' , paddingTop:"5px",}}>
          Securing Tomorrow, Today : Safer Solutions for Smater Cities
        </p>
      </div>
      <div>
        <p className="footer-text text-center " style={{fontSize: 'medium' , paddingTop:"5px",}}>
          &copy; Innoventures 2024
        </p>
      </div>

      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop">
        <i className="fas fa-level-up-alt"></i>
      </button>
    </footer>
  );
}
export default Footer;


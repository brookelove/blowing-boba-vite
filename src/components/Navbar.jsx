import { AiOutlineShoppingCart, AiFillCaretRight } from "react-icons/ai";
import "../assets/CSS/Navbar.css"
const Navbar = () =>  {

    return (
      <nav className="d-between">
        <section className="links d-even">
          {/* drop down and show all, categories, and tags that are on the bottom */}
        <a>SHOP <AiFillCaretRight /></a>
        <a>OUR STORY <AiFillCaretRight /></a>
        </section>
        <h1>BLOWING BOBA</h1>
        <section>
          {/* icon of a shopping bag */}
          <AiOutlineShoppingCart className="shopping-cart-icon"/>
          {/* needs to have a count where it changes on the cart count it is connected to the cart */}
        </section>
      </nav>
    );
  }
  
export default Navbar;
import "../assets/CSS/Contact.css"
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Contact = () =>  {

    return (
      <section>
        <Navbar/>
        <main className="contactContainer d-even">
          <form className="">
            <input name="name" type="text" placeholder="Name"/>
            <input name="email"type="email"placeholder="Email"/>
            <input name="phone"type="text"placeholder="Phone"/>
            <select name="Su">
            <option value="">Why Did You Reach Out?</option>
              <option value="questions">Question</option>
              <option value="purchases">Purchase</option>
              <option value="order history">Order History</option>
              <option value="just wanna chat">Just Wanna Chat</option>
            </select>
            <textarea name="message" className="message-input" placeholder="Message"/>
            <button name="submit"><FaArrowRightFromBracket/></button>
          </form>
          {/* image on the right of fish in a bowl */}
          <div></div>
        </main>
        <Footer/>
      </section> 
    );
}
  
export default Contact;
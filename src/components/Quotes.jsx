import "../assets/CSS/Quotes.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
const Quotes = () =>  {

    return (
      <section className="quotesConatiner d-even">
       <button><FaArrowAltCircleLeft className="arrow-icon"/></button>
       <h1 className="sub-text">TEXT IN THE MIDDLE THAT ROTATES</h1>
       <button><FaArrowAltCircleRight className="arrow-icon"/></button>
      </section> 
    );
}
  
export default Quotes;
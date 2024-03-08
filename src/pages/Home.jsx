import "../assets/CSS/Home.css";
import PartyPack from "../components/PartyPack";
import Quotes from "../components/Quotes";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Home = () =>  {

    return (
      <section className="homeSection">
        <header className="homeContiner d-c-even">
        <section className="bigBox"></section>
        <h1 className="">BLOWING BOBA</h1>
        </header>
        <main className="d-c-center">
          {/* navbar is coming here */}
          <h1>HOW DOES IT WORK?</h1>
          <section className="d-even">
          <div>
            <h5>.01</h5>
            <p>We grab the ingredients needed to create a order.</p>
          </div>
          <div>
            <h5>.02</h5>
            <p>You place an order at one of our locations or online.</p>
          </div>
          <div>
            <h5>.03</h5>
            <p>We carefully package your order to your specifications</p>
          </div>
          <div>
            <h5>.04</h5>
            <p>You enjoy your drink in the comfort of anywheer</p>
          </div>
          </section>
          <button>SHOP NOW</button>
        </main>
        <PartyPack/>
        <Quotes/>
        <Footer/>
      </section>
    );
  }
  
  export default Home;
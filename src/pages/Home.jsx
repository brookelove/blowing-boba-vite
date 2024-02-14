import "../assets/CSS/Home.css";
import PartyPack from "../components/PartyPack";
import Quotes from "../components/Quotes";
const Home = () =>  {

    return (
      <section>
        <header className="homeContiner d-c-even">
        <section className="bigBox"></section>
        <h1 className="">BLOWING BOBA</h1>
        </header>
        <PartyPack/>
        <Quotes/>
      </section>
    );
  }
  
  export default Home;
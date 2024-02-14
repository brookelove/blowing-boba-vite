import "../assets/CSS/PartyPack.css"
const PartyPack = () =>  {

    return (
      <section className="partyPackConatiner d-c-center">
        <section className="d-even">
            <div></div>
            <div></div>
            <div></div>
        </section>
        <button>BUILD YOUR PARTY PACK</button>
        <section className="d-c-center">
          <h1 className="sub-text">WANT SOMETHING MORE CUSTOM?</h1>
          {/* needs to be a reactarrow from reactIcons */}
          <button>FIND OUT MORE</button>
        </section>
      </section> 
    );
}
  
export default PartyPack;
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Tag from "../components/Tags";

const ProductPage = () =>  {

  const numberOfCards = 10;
  const cards = [];
  for(let i = 0; i < numberOfCards; i++) {
    cards.push(
      <Card key={i} name={`Product ${i + 1}`} price={`$${(i + 1) * 10}`} />
    );  
  }

    return (
      <secion>
        <Navbar/>
        <main className="productPageContainer">
          <Tag/>
          {/* this is where the if or statement comes to play where it is a */}
        <section>
          {/* cards that are product where they are mapped*/}
          {cards}
        </section>
        </main>
      </secion>
    );
  }
  
export default ProductPage;
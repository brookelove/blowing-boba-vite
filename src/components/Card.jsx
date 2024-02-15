const Card = () =>  {

    return (
      <button className="cardContainer">
        <a><img src=""/></a>
        <section>
        <aside>
          <h1>PRODUCT NAME</h1>
          <p>$9.00</p>
        </aside>
        <aside className="d-center">
          <button>-</button>
          <p>0</p>
          <button>+</button>
        </aside>
        </section>
      </button>
    );
  }
  
export default Card;
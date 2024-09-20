import Logo from "../assets/logoOnly.png";
// import BestSellerCards from "../components/bestSellerCard.tsx";

// const bestSellers = [
//   {
//     rank: 1,
//     image:
//       "https://storage.googleapis.com/du-prd/books/images/9781250289568.jpg",
//     title: "Passions In Death",
//     author: "J.D. Robb",
//   },
// ];

export default function Home() {
  return (
    <main className="container">
      <div className="row">
        {/* <aside className="col-md-5 col-md-7">
          <section>
            <h2>New York Times Best Sellers:</h2>
            <div className="d-flex flex-wrap justify-content-around">
              {bestSellers.map((bestSellers, index) => (
                <BestSellerCards
                  key={index}
                  rank={bestSellers.rank}
                  image={bestSellers.image}
                  title={bestSellers.title}
                  author={bestSellers.author}
                />
              ))}
            </div>
          </section>
        </aside> */}

        <section className="d-flex flex-column align-items-center text-center">
          <h2>Find, Organize, and Never Lose Track of a Book Again!</h2>
          <img src={Logo} alt="logo" className="my-3" />
          <div className="input-group my-2" style={{ maxWidth: "400px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Start your journey here..."
            />
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

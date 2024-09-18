import Logo from "../assets/logoOnly.png";

export default function Home() {
  return (
    <main className="container">
      <div className="row">
        <aside className="col-md-5">
          <section>
            <h2>New York Times Best Sellers:</h2>
          </section>
        </aside>

        <section className="col-md-7 d-flex flex-column align-items-center text-center">
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

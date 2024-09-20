interface BestSellerCardsProps {
  rank: number;
  image: string;
  title: string;
  author: string;
}

export default function BestSellerCards({
  rank,
  image,
  title,
  author,
}: BestSellerCardsProps) {
  return (
    <div className="card shadow m-3 border-0" style={{ width: "10rem" }}>
      <h4>{rank}</h4>
      <img src={image} className="card-img-top" alt={`Image of ${title}`} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">by {author}</p>
        <div className="mt-auto d-flex flex-column align-items-center">
          <a
            href="#"
            className="btn btn-primary mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bookmark
          </a>
          <a
            href="#"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            On my Bookshelf
          </a>
        </div>
      </div>
    </div>
  );
}

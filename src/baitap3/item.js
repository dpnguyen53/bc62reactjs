export default function Item() {
  return (
    <div className="col-sm-4">
      {/* item */}
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="https://picsum.photos/200/300"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

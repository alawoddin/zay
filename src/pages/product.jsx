import productsData from "./products.json";

const Blog = () => {
  const products = productsData.products.slice(0, 6);

  return (
    <section className="bg-light">
      <div className="container py-5">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Featured Products</h1>
            <p>Images loaded from online URLs</p>
          </div>
        </div>

        <div className="row">
          {products.map((product) => (
            <div className="col-12 col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt={product.title}
                />

                <div className="card-body">
                  <h5>{product.title}</h5>
                  <p>{product.description}</p>
                  <p className="text-muted">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

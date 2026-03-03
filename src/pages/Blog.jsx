import { useEffect, useState } from "react";

const Blog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // 👉 take only first 6 products
        setProducts(data.products.slice(0, 6));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3 className="text-center py-5">Loading products...</h3>;
  }

  return (
    <section className="bg-light">
      <div className="container py-5">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Featured Products</h1>
            <p>Showing only 6 products from API</p>
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
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <i
                          key={index}
                          className={`fa fa-star ${
                            index < Math.round(product.rating)
                              ? "text-warning"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </li>
                    <li className="text-muted">${product.price}</li>
                  </ul>

                  <h2 className="h5 text-dark">{product.title}</h2>

                  <p className="card-text">
                    {product.description.slice(0, 80)}...
                  </p>

                  <p className="text-muted">
                    Brand: {product.brand}
                  </p>
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

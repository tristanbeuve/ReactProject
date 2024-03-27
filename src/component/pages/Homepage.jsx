
export default function Homepage({changeCurrentPage}){
    

    return (
        <section>
            <div className="container mt-4">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to our E-Commerce Store</h1>
        <p className="lead">Discover amazing products and great deals!</p>
        <hr className="my-4" />
        <p>Start shopping now.</p>
        <a className="btn btn-primary btn-lg" onClick={() => changeCurrentPage('store')} role="button">Shop Now</a>
      </div>
    </div>
            </section>
    )
}
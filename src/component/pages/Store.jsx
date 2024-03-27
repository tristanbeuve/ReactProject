import ListProduit from "../ListProduit";

export default function Store({products, Cart}){
    

    return (
        <section>
            <div className="container mt-4">
                <div className="jumbotron">
                    <h1 className="display-4">Our store</h1>
                    <ul>
                <li>Easy to use interface</li>
                <li>Secure payment gateway integration</li>
                <li>Responsive design for all devices</li>
                <li>Product categorization and search</li>
                <li>Customer reviews and ratings</li>
            </ul>
                </div>
            </div> 
            
            <ListProduit products={products} Cart={Cart}/>
        </section>
    )
}
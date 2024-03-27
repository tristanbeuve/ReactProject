import ListProduit from "../ListProduit";

export default function Homepage({products, Cart}){
    

    return (
        <section>
            <h1>Page d'accueil</h1>
            <ListProduit products={products} Cart={Cart}/>
        </section>
    )
}
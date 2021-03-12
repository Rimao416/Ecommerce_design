const getProducts=async()=>{
    try{
        const results=await fetch('/data/products.json')
        const data=await results.json();
        const products=data.products
        return products
    }catch(err){
        console.log(err)
    }
}
getProducts();
window.addEventListener('DOMContentLoad',async()=>{
    const products=await getProducts();
    console.log(products);
})
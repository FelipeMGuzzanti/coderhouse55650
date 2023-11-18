class ProductManager{
    constructor(){
        this.products = [];
        this.id = 1;
    }

    addProduct(title, description, price, url, code, stock){
        if ( title && description && price && url && code && stock){
            const verificationCode = this.products.some (product => product.code === code);
            if (verificationCode){
                console.error("Codigo Repetido");
            }else{
                let id = this.id++;
                const newProduct = {id, title, description, price, url, code, stock};
                this.products.push(newProduct);
            }
        }else {
            console.error("Por favor completar todos los campos");
        }
    }

    getProduct(){
        return this.products;
    }

    getProductByID(id){
        const productID = this.products.find(product => product.id === id);
        if (!productID){
            return console.error("Not Found")
        }else {
            return console.log("El producto solicitado es: ", productID);
        }
    }
}

const productManager = new ProductManager()

productManager.addProduct("Producto prueba", "este es un producto de prueba", 200, "sin imagen", "abc123", 25);

productManager.getProductByID(1);

console.log(productManager);
(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {

        //private httpService: Object;

        getProduct (id: number){
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    }


    class Mailer {
        private masterEmail: string = 'juanfa107@gmail.com';

        sendEmail(emailString: string[], template: 'to-clients' | 'to-admins'){
            console.log('Sending Email ', template)
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
    
        //private productService: ProductService;
        //private mailer: Mailer;


        constructor(private productService: ProductService, private mailer: Mailer){
            //this.productService = productService;3
            //this.mailer = mailer;
        }


        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            return this.productService.getProduct( id );
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            return this.productService.saveProduct(product)
        }

        notifyClients(){
            return this.mailer.sendEmail(['juanfa108@gmail.com'], 'to-clients');
        }
    
    }


    class CartBloc {

        private items: Object[] = [];


        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }

    const mailer:Mailer = new Mailer();
    const productService:ProductService = new ProductService();
    

    const productBloc = new ProductBloc( productService, mailer);
    const cartBloc: CartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    cartBloc.onAddToCart(10);








})();
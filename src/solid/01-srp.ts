(() => {

    interface Product { 
        id:   number;
        name: string;
    }


    class ProductService {

        getProduct( id: number ) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }

    }

    class Mailer {

        private masterEmail: string = 'fernando@google.com';


        sendEmail( emailList: string[], template: 'to-clients' | 'to-admins' ) {
            console.log('Enviando correo a los clientes', emailList, template );
        }

    }

    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        constructor( productService: ProductService, mailer: Mailer ) { // Inyectar dependencias en mi block
            this.productService = productService;
            this.mailer = mailer;
        }

    
        loadProduct( id: number ) {
            this.productService.getProduct( id ); // así le dejo la responsabilidad a de llamada a productService 
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct( product ); // así le dejo la responsabilidad a productService  de guardar en DDBB
        }
    
        notifyClients() {
            this.mailer.sendEmail(['eduardo@google.com'], 'to-clients');
        }
    
    }

    class CartBloc {

        private itemsInCart: Object[] = [];

        addToCart( productId: number ) {
            console.log('Agregando al carrito ', productId );
        }

    }


    const productService = new ProductService();
    const mailer = new Mailer();


    const productBloc = new ProductBloc( productService, mailer ); // inyectamos dependencias. Para testear simplemente hacemos mock de productService y mailer
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);

})();
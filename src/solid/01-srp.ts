(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService{

       
        getProduct(id: number){
            console.log("Product",{id,name:'oleed Tv'});
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    }

    class Mailer{
        private masterEmail: string='CvelascoSaavedra@gmail.com';

        sendEmail(email: string,template:'to-clientes'| 'to-admins'){
            console.log('Envio correo a los clientes',template);
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        private productService:ProductService;
        private mailer:Mailer;
    
        constructor(productService:ProductService, mailer:Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct( id: number ) {
           this.productService.getProduct(id)
        }

        
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
          this.mailer.sendEmail('Eduardo@gmail.com','to-clientes');
        }
    
    
    }
    

    class CardBloc{

        private itemsInCart:object[]= [];

        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }
   
    const productService= new ProductService();
    const mailer= new Mailer();

    const productBloc = new ProductBloc(productService,mailer);
    const cardBloc= new CardBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cardBloc.onAddToCart(10);








})();
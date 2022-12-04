(() => {

    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getMovieCast( movieId: string ) {
        console.log({ movieId });
    }

    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    // Crear una película
    function createMovie(title: string, description: string, rating: number, cast: string[] ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    


})();
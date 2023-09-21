(() => {

    // función para obtener información de una película por Id
    function getInformationMovie( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieActors( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getBioOfActor( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crear una película
    interface props{
        cast:string[],
        description: string,
        rating: number,
        title: string,
    }
    function createMovie({title, description, rating, cast}:props ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthDay: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor',birthDay);
        return true;        

    }

    
  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
    let result;
    if ( isDead ) {
        return  1500;
    } 
     if ( isSeparated ) {
         return  2500;
     } 
     return isRetired?300:400;
    
}


})();

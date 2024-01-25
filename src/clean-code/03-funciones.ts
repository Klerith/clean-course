(() => {

    // función para obtener información de una película por Id
    function getMovieById( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getBioActorById( id: string ) {
        console.log({ id });
    }
    

    interface Movie{
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }
    // Crear una película
    function createMovie({title, description, rating, cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }


    interface Actor{
        birthdate: Date;
        fullName: string;
    }

    function checkFullName(fullName: string){
        console.log({fullName})
        return true 
    }
    // Crea un nuevo actor
    function createActor( {fullName, birthdate}: Actor): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (checkFullName(fullName)) return false;

        console.log('Crear actor' , birthdate);
        return true;        

    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) : number => {

        if ( isDead )  return 1500;
        
        if ( isSeparated ) return 2500;
        
        return (isRetired)  ? 3000 : 4000;
    
    }

})();

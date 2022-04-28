(() => {

  function getMovieById( id: string ) {
      console.log({ id });
  }

  function getAllActorsByMovie( id: string ) {
      console.log({ id });
  }

  function getActorBioById( id: string ) {
      console.log({ id });
  }
  
  // Crear una película
  interface Movie {
    cast:             string[];
    description: string ;
    rating:         number ;
    title:            string;
  }
  function createMovie({ title, description, rating , cast }: Movie ) {
      console.log({ title, description, rating, cast });
  }

  function createActor( fullName: string, birthdate: Date ): boolean {
      
      // tarea asincrona para verificar nombre
      // ..
      // ..
      if (chackFullName(fullName) ) return false;

      console.log('Crear actor', birthdate);
      return true;        

  }

  function chackFullName(fullName: string): boolean {
    if ( fullName === 'fernando' ) return true;
    return false;
  }

  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    let result: number;

    if ( isDead ) return 1500;
    
    if ( isSeparated ) return 2500;

    return ( isRetired ) ? 3000 : 4000;
}


})();





(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, delete: false },
        { id: 2, delete: false },
        { id: 3, delete: true },
        { id: 4, delete: false },
        { id: 5, delete: false },
        { id: 7, delete: true },
    ]; 

    // Archivos marcados para borrar - files to delete
    const arhivos = filesToEvaluate.map( (file: {id: number, delete: boolean}) => file.delete );


    // Todo: Tarea

    // día de hoy - elapsed time in days
    const currentDate = new Date();

    // días transcurridos - elapsed time in days
    const elapseddDays: number = 23;

    // número de archivos en un directorio - number of files in directory
    const numberOfFilesInDirectory = 33;

    // primer nombre - first name
    const firstName = 'Fernando';

    // primer apellido - last name
    const LastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastModification = 12;

    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent = 6;


})();
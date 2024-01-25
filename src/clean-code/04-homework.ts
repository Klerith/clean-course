(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays
    function isRedFruit( nameFruit: string ): boolean {

        const redFruits = ["manzana","cereza", "ciruela"]
        return redFruits.includes(nameFruit);
        
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    type FruitColor = "red"|"yellow"|"purple";
    function getFruitsByColor( color: FruitColor ): string[] {

        const fruitsByColor = {
            red: ['manzana','fresa'],
            yellow: ['piña','banana'],
            purple: ['moras','uvas'],
        }

       if ( !Object.keys(fruitsByColor).includes(color)) {
            throw Error('the color must be: red, yellow, purple');
        }
            

       return fruitsByColor[color]
        
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {

        if( !isFirstStepWorking) return 'First step broken.';
            
        if( !isSecondStepWorking ) return 'Second step broken.';
        
        if( !isThirdStepWorking ) return  'Third step broken.';
        
        if( !isFourthStepWorking) return 'Fourth step broken.';
                    
        return 'Working properly!';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), nameFruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), nameFruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();

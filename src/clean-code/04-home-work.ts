(() => {
  const isRedFruit = (fruit: string): boolean =>
    ["manzana", "cereza", "ciruela"].includes(fruit);

  type FruitColor = "red" | "yellow" | "purple";

  function getFruitsByColor(color: FruitColor): string[] {
    const errorMessage = "the color must be: red, yellow, purple";

    const fruitsByColor = {
      red: ["manzana", "fresa"],
      yellow: ["piña", "banana"],
      purple: ["moras", "uvas"],
    };

    if (!(color in fruitsByColor)) throw Error(errorMessage);

    return fruitsByColor[color];
  }

  // Simplificar esta función
  let isFirstStepWorking = true,
    isSecondStepWorking = true,
    isThirdStepWorking = false,
    isFourthStepWorking = true;

  function workingSteps() {
    if (!isFirstStepWorking) return "First step broken.";

    if (!isSecondStepWorking) return "Second step broken.";

    if (!isThirdStepWorking) return "Third step broken.";

    if (!isFourthStepWorking) return "Working properly!";

    return "Fourth step broken.";
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
  console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();

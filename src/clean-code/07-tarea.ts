(() => {

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  class HtmlElement {
    constructor(
      public id: string,
      public type: HtmlType,
    ) { }
  }

  class InputAttributes {
    // Se declaran las propiedades dentro del constructor
    constructor(
      public value: string,
      public placeholder: string,
    ) { }
  }

  // class InputEvents {

  //   setFocus() { };
  //   getValue() { return "valor" };
  //   isActive() { };
  //   removeValue() { };
  // }


  //? Idea para la nueva clase InputElement
  class InputElement {

    public html: HtmlElement;
    public attributes: InputAttributes;

    constructor(
      value: string, placeholder: string, id: string
    ) {
      this.html = new HtmlElement(id, 'input');
      this.attributes = new InputAttributes(value, placeholder);
    }

    setFocus() { };
    getValue() { return this.attributes.value };
    isActive() { };
    removeValue() { };
  }

  const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

  console.log({ nameField, evento: nameField.getValue() });

})()
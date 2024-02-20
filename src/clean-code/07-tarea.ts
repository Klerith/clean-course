(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';

    interface HtmlElementProps{
        id: string;
        type: HtmlType;
    }
    class HtmlElement {
        public id: string;
        public type: HtmlType;

        constructor( {id,type} : HtmlElementProps ){
            this.id = id;
            this.type = type;
        }
    }


    interface InputAttributesProps{
        value: string,
        placeholder: string,
    }

    class InputAttributes {
        public value: string;
        public placeholder: string;

        constructor ( {value ,placeholder}: InputAttributesProps){
            this.value = value;
            this.placeholder = placeholder;
        }
    }

    interface InputElementsProps{
        id: string;
        type: HtmlType;
        value: string,
        placeholder: string,
    }
    
    class InputEvents{
  
        constructor(){}
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }
    class InputElement{
        public html: HtmlElement;
        public attributes :  InputAttributes;
        public events: InputEvents;

        constructor({
            id, type,
            value, placeholder,
        }:InputElementsProps){
            this.html = new HtmlElement({id, type});
            this.attributes = new InputAttributes({value, placeholder});
            this.events = new InputEvents()
        }
    }

    //? Idea para la nueva clase InputElement

    const nameField = new InputElement({
        id: 'Fernando', 
        type: "input",
        placeholder:'Enter first name',
        value: 'txtName'
    });

    console.log({ nameField });

})()
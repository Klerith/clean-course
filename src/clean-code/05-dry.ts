
type size=''|'S'|'M'|'XL'
class Prouct{
    constructor(
        public name:string='',
        public price:number=0,
        public size:size='',
    ){}

    isProductReady():boolean{

        for (const key in this) {
            switch(typeof this[key]){
                case 'number':
                    if ((<number>this[key])<=0)throw Error (`${key} is zero`);
                    break;
                case 'string':
                    if ((<string>this[key]).length<=0)throw Error (`${key} is empty`);
                    break;
            }

        }
        return true;

    }
    tostring(){
        if(!this.isProductReady()){
            return ;
        }
        return `${this.name} (${this.price}) ${this.size}`; 
    }
};

(()=>{
    const bluePants=new Prouct('Blue Large',5,'M');
    console.log(bluePants.tostring());
  
})()
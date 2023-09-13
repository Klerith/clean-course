
interface Bird{
    eat():void;
    Ran():void

}

interface Flybird {
    fly():void;
}

class Tucan implements Bird,Flybird{

    public fly(){}
    public eat(){}
    public Ran(){}

}

class Humminbird implements Bird,Flybird{
    public fly(){}
    public eat(){}
    public Ran(){}
}

class Ostrich implements Bird {
    public eat(){}
    public Ran(){}
}
(() => {

    // NO aplicando el principio de resposnsabilidad unica

    type Gender = 'M'|'F';
    class Person {
        /* FORMA LARGA
        public  name: string;
        public gender: Gender;
        public birthdate: Date;
    

        constructor(name: string, gender:Gender, birthdate: Date){
            this.name= name;
            this.gender= gender;
            this.birthdate = birthdate;

        } */

        constructor(
            public  name: string,
            public gender: Gender,
            public birthdate: Date, 
        ){}
    }

    class User extends Person{
        public  lasAccess:Date
        constructor(
            public email: string,
            public role: string,
            
            name: string,
            gender: Gender,
            birthdate:Date,
        ){
            super(name,gender,birthdate);
            this.lasAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User{
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate:Date,
        ){ 
            super(email, role, name, gender, birthdate);
        }
    }
    

    const userSettings = new UserSettings(
        "/usr/home",
        "/home",
        "fernando@google.com",
        "Admin",
        "Fernando",
        "M",
        new Date("1985-10-21")
    )
    
    console.log({userSettings, areCredentialsValid: userSettings.checkCredentials()})
})();
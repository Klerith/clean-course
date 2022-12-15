(() => {
    
    type Gender = 'M' | 'F';
    // without single responsibility
    class Person{

        constructor(
            public name: string, 
            public gender: Gender, 
            public birthdate: Date
        ){

        }

    }


    class User extends Person {
        
        private lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            public name: string, 
            public gender: Gender, 
            public birthdate: Date
        ){
            super(name, gender, birthdate)
            this.lastAccess = new Date();
        }

        checkCredenciales(){
            return true;
        }


        
    }

    class UserSettings extends User{

        constructor(
            public workingDirectory: string,
            public lastOpenedFolder: string,
            public email: string,
            public role: string,
            public name: string, 
            public gender: Gender, 
            public birthdate: Date
        ){
            super(email, role, name, gender, birthdate)
        }
    }


    const x = new UserSettings(
        'usr/home',
        '/home',
        'juanfa1207@gmail.com',
        'Admin',
        'Juan Arenas',
        'M',
        new Date('1996-05-30'),
    )

        console.log({x})
})();
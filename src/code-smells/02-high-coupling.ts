(()=>{
    // No aplicando el principio de responsabilidad única
    type Gender = 'M'|'F';

    // Alto Acoplamiento

    class Person {
        constructor(
            public lastName: string,
            public firstName: string,
            public gender: Gender,
            public birthdate: Date,
        ){}
    }

    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            private lastAccess: Date,
            firstName: string,
            lastName: string,
            gender: Gender,
            birthdate: Date,
        ){
            super(firstName, lastName, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }


class UserSettings extends User {
    constructor(
        public workingDirectory: string,
        public lastFolderOpen: string,
        email     : string,
        role      : string,
        firstName : string,
        lastName   : string,
        gender    : Gender,
        birthdate : Date,
    ){
        super(
            email,
            role,
            new Date(),
            firstName,
            lastName,
            gender,
            birthdate
        );
    }
}
    


    const userSettings = new UserSettings(
        '/urs/home',
        '/development',
        'fernando@google.com',
        'F',
        'Fernando',
        'Herrera',
        'M',
        new Date('1985-10-21')
    );

    console.log({ userSettings, credentials: userSettings.checkCredentials() });
    
})()
(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M'|'F';

    interface PersonProps{
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person {
        public birthDate: Date;
        public gender: Gender;
        public name: string;
        constructor({ name, gender,birthdate}: PersonProps
        ){
            this.name      = name;
            this.gender    = gender;
            this.birthDate = birthdate;
        }
    }


    interface UserProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        name: string;
        role: string;
    }


    class User extends Person {
        
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({role,email,name, gender,birthdate}:UserProps) {
            super( {name, gender, birthdate});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }
  
    interface UserSettings{
        birthdate       : Date;
        email           : string;
        gender          : Gender;
        lastOpenFolder  : string;
        name            : string;
        role            : string;
        workingDirectory: string;
    }

    class UserSettings extends User {
        public  workingDirectory:string;
        public  lastOpenFolder:string;
        constructor({
             workingDirectory,
            lastOpenFolder  ,
            email,
            role,
            name,
            gender,
            birthdate              }:UserSettings
        ) {
            super({email, role, name, gender, birthdate} );
            this.lastOpenFolder=lastOpenFolder;
            this.workingDirectory=workingDirectory;
        }
    }


    const userSettings = new UserSettings({
        birthdate:new Date('1985-10-21'),
        email:'fernando@google.com',
        gender:'M',
        lastOpenFolder:'/home',
        name:'Carlos',
        role:'Admin',
        workingDirectory:'/usr/home',
    });

    console.log({ userSettings });


})();
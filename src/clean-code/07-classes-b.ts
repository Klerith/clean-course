(() => {
    
    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string, 
        gender: Gender, 
        birthdate: Date
    }
    // without single responsibility
    class Person{
        birthdate: Date;
        gender: string;
        name: string;

        constructor({ name, gender, birthdate}: PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }

    }

    interface userProps{
        email:string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }


    class User extends Person {
        
        public lastAccess: Date;
        public email: string;
        public role: string;


        constructor({
            email,
            role,
            name, 
            gender, 
            birthdate
        }: userProps){
            super({name, gender, birthdate})
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredenciales(){
            return true;
        }


        
    }


    interface UserSettingsProps{
        workingDirectory: string,
        lastOpenedFolder: string,
        email: string,
        role: string,
        name: string, 
        gender: Gender, 
        birthdate: Date
    }

    class UserSettings extends User{

        public workingDirectory: string;
        public lastOpenedFolder: string;


        constructor({
            workingDirectory,
            lastOpenedFolder,
            email,
            role,
            name, 
            gender, 
            birthdate
        }: UserSettingsProps){
            super({email, role, name, gender, birthdate})
            this.workingDirectory = workingDirectory;
            this.lastOpenedFolder = lastOpenedFolder
        }
    }


    const x = new UserSettings({

        workingDirectory:  'usr/home',
        lastOpenedFolder: '/home',
        email: 'juanfa1207@gmail.com',
        role:  'Admin',
        name:  'Juan Arenas',
        gender: 'M',
        birthdate: new Date('1996-05-30'),
    })

        console.log({x})
})();
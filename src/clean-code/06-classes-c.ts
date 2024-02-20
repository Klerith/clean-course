(() => {

    // aplicando el principio de resposnsabilidad unica
    // priorizar la composicion frente a la herencia

    type Gender = 'M'|'F';

    interface PersonProps{
        name: string;
        gender: Gender;
        birthdate: Date; 
    }
    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor( {name, gender, birthdate}: PersonProps ){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps{
        email: string,
        role: string,
    }

    class User {
        public lastAccess:Date;
        public email: string;
        public role: string;

        constructor ( {email ,role}: UserProps){
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }

    interface SettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;            
    }
    class Settings {
        public  workingDirectory: string;
        public lastOpenFolder: string;
        constructor({
            workingDirectory,
            lastOpenFolder
        }: SettingsProps) {        
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder= lastOpenFolder;
        }
    }

    interface UserSettingsProps{
        birthdate : Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }
    
    class UserSettings{
        public person: Person;
        public user :  User;
        public settings: Settings;

        constructor({
            name, gender,birthdate,
            email, role,
            workingDirectory, lastOpenFolder
        }:UserSettingsProps){
            this.person = new Person({name,gender, birthdate });
            this.user = new User({email, role});
            this.settings = new Settings({workingDirectory, lastOpenFolder})
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: "/usr/home",
        lastOpenFolder: "/home",
        email: "fernando@google.com",
        role: "Admin",
        name: "Fernando",
        gender: "M",
        birthdate: new Date("1985-10-21")
    })
    
    console.log({userSettings})
})();
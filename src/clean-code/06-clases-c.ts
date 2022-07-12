(() => {

  // Aplicando el principio de responsabilidad única
  // Priorizar la composición frente a la herencia!

  type Gender = 'M' | 'F';

  interface PersonProps {
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  class Person {

    public name: string;
    public gender: Gender;
    public birthDate: Date;

    constructor({ name, gender, birthDate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthDate = birthDate;
    }

  }

  interface UserProps {
    email: string;
    role: string;
  }

  class User {

    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Settings {

    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps {
    birthDate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings {

    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({ name, gender, birthDate, email, role, workingDirectory, lastOpenFolder }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthDate });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastOpenFolder });
    }

  }

  const userSettings = new UserSettings({ workingDirectory: '/usr/home', lastOpenFolder: '/home', email: 'aldo@google.com', role: 'Admin', name: 'Aldo', gender: 'M', birthDate: new Date('1997-06-16T00:00:00') });

  console.log({ userSettings, areCredentialsValid: userSettings.user.checkCredentials() })

})();
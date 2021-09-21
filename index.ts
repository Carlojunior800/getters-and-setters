// UserProps, que conterá as propriedades 
// firtsName,lastName, username, email, password, cpf, contacto e isAdmin. 
interface UserProps {
    firtsName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    cpf: string;
    contacto: string;
    isAdmin: boolean;
}

class User implements UserProps {
    firtsName!: string;
    lastName!: string;
    username!: string;
    email!: string;
    password!: string;
    cpf!: string;
    contacto!: string;
    isAdmin!: boolean;

    constructor(firtsName: string, lastName: string, username: string, email: string, password: string, cpf: string, contacto: string, isAdmin: boolean) {
        this.firtsName = firtsName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.cpf = cpf;
        this.contacto = contacto
        this.isAdmin = isAdmin;
    }

    escreverPropriedades() {
        console.log(this.firtsName);
        console.log(this.lastName);
        console.log(this.username);
        console.log(this.email);
        console.log(this.password);
        console.log(this.cpf);
        console.log(this.contacto);
        console.log(this.isAdmin);

    }

    getFirtsName() {
        return this.firtsName;
    }

    setFirtsName(firtsName: string) {
        return this.firtsName = firtsName;
    }

    getLastName() {
        return this.lastName;
    }

    setLastName(lastName: string) {
        return this.lastName = lastName;
    }

    getUsername() {
        return this.username;
    }

    setUsername(username: string) {
        return this.username = username;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email: string) {
        return this.email = email;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password: string) {
        return this.password = password;
    }

    getCpf() {
        return this.cpf;
    }

    setCpf(cpf: string) {
        return this.cpf = cpf;
    }

    getContacto() {
        return this.contacto;
    }

    setContacto(contacto: string) {
        return this.contacto = contacto;
    }

    getIsAdmin() {
        return this.isAdmin;
    }

    setIsAdmin(isAdmin: boolean) {
        return this.isAdmin = isAdmin;
    }
}

let user = new User("pedro","henrique","Mario323XX","XaolinMatadorDePorco@gmail.com","futebol123","1321313123","11 92323-2323", false);

user.escreverPropriedades();

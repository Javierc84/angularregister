export class RegisterModel{

    public email:String;

    public password: String;
    public company: String;
    public name: String;
    public surname: String;
    public experiencie:String;
    public dni:String;

    constructor(email: String,
        password:String,
        company:String,
        name:String,
        surname:String,
        experiencie:String,
        dni:String
        ){
            this.email = email;
            this.password = password;
            this.company = company;
            this.name = name;
            this.surname = surname;
            this.experiencie = experiencie;
            this.dni = dni;
            
        }}
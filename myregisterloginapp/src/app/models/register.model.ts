export class RegisterModel{
    public email: String;
    public password:String;
    public confirmPassword: String;

    public token:String;


    constructor(email: String,password:String,confirmPassword:String, token:String ){
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword; 
        this.token = token;
    }
}
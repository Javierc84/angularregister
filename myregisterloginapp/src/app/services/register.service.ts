import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterModel } from '../models/register.model';



const REGISTER_KEY = 'register'


@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  private registerModelBehavoirSubject: BehaviorSubject<RegisterModel | null>;
  public register: Observable<RegisterModel | null>;

  constructor(private http:HttpClient, private route1:Router) {
    this.registerModelBehavoirSubject = new BehaviorSubject<RegisterModel | null>(JSON.parse(<string>localStorage.getItem(REGISTER_KEY)));
    this.register = this.registerModelBehavoirSubject.asObservable();
   }


  perfomRegister(entrada:RegisterModel):Observable<RegisterModel>{
    console.log('performRegister(' + JSON.stringify(entrada) + ')');
    return this.http.post<RegisterModel>(environment.register, entrada).pipe(map(retornoApi => {

      console.log('register OK: ' + JSON.stringify(retornoApi));
      this.registerModelBehavoirSubject.next(retornoApi);
      localStorage.setItem(REGISTER_KEY, JSON.stringify(retornoApi));
      return retornoApi;
    }));
  }

  performLogout(): void{
    localStorage.removeItem(REGISTER_KEY);
    this.registerModelBehavoirSubject.next(null);
    this.route1.navigate(['/home']);
    console.log(localStorage)
  }

}

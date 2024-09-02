import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



interface User {
  uuid: string;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private usersUrl = 'assets/users.json'; 

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<{ success: boolean; uuid?: string; message?: string }> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      map(users => {
        console.log(username, password);
        
        const user = users.find(u => u.username === username && u.password === password);
        console.log(user);
        
        if (user) {
          return { success: true, uuid: user.uuid };
        } else {
          return { success: false, message: 'Invalid username or password' };
        }
      })
    );
  }


}



 
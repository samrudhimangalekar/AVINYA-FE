import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   username:any = "";
   password:string = "";
   message: string | undefined = "";

   constructor(private router: Router, private authService : AuthService) {

   }

   navigateToPage() {
     this.router.navigate(['auth/register']); 
}

   
   onSubmit(form:any){
    console.log(this.username, this.password);
    
    this.authService.login(this.username, this.password).subscribe(result => {
      if (result.success) {
        this.message = `Login successful! User UUID: ${result.uuid}`;
        console.log('Success');
        
      } else {
        this.message = result.message;
        console.log('failed');
      }
    });

   }


 

}

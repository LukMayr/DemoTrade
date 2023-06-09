import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoTrade';
  private isUserLoggedIn: boolean = false;
  constructor(private router: Router, private http: HttpClient) {
    this.checkUserLoggedIn();
  }

  private fetchUserLoggedIn(){
    this.http.get('/api/auth/isLoggedIn').subscribe((res: any) => {
      this.isUserLoggedIn = res;
    });
  };
  
  //TODO: Fix not able to navigate to login page
  private checkUserLoggedIn(){
    if(!this.isUserLoggedIn){
      this.router.navigate(['signup']);
    };
  }
  
}

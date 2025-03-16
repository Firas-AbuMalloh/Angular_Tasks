import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private ser: CategoryService, private router: Router) { }


  ngOnInit() {

  }


  onSub(user: any) {
    const formadata = user.value
    this.ser.onSubmit(formadata).subscribe(() => { })
  }

  log: any = 0;

  loginBtn() {

    this.log++;

  }

  user1: any;
  onLogIn(LogIn: any) {
    const user = LogIn.value;

    this.ser.onLogIn().subscribe((data: any) => {
      this.user1 = data.find((u: any) => u.email === user.email && u.password === user.password);
    });

    if (this.user1) {

        alert("Log in successful");
        this.router.navigate(["/catagory"]);
      }

      else {
        alert('Invalid email or password. Please try again.');
      }
    
  }
}




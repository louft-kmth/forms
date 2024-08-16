import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sign } from '../sign.model';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  newSign : Sign = {
    firstname : "",
    lastname : "", 
    email : ""
  }; 
  onSubmit(): void{
    console.log(this.newSign);
  }
}

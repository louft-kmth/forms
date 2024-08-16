import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Order } from '../order.model';


@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})
export class MyFormComponent {
  newOrder: Order = {
    title : "",
    quantity: 0,
    date: new Date(),
    contact : ""
  };
  onSubmit(): void {
    console.log(this.newOrder);
  }


}

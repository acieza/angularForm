import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularForm';

  emailCorreo: FormControl;

  constructor(){
    this.emailCorreo = new FormControl('', [
      Validators.required,
      Validators.maxLength(10)
    ]);
    this.emailCorreo.valueChanges
    .subscribe(value =>{
      console.log(value)
    })
  }
}

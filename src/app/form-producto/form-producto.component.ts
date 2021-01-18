import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.CreadordeFormularios();
  }

  ngOnInit(): void {
  }


  private CreadordeFormularios(){
    this.form=this.formBuilder.group({
      nombre:['',[
        Validators.required,
        Validators.maxLength(15)
      ]],
      direccion:['',[
        Validators.required,
      ]],
      poblacion:['',[
        Validators.required,
      ]],
      descripcion:['Prueba número uno',[
         Validators.required,]],
    })
  }
}

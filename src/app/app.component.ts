import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicejsonService } from './services/servicejson.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a?: Number;
  b?: Number;
  c?: Number;

  mulForm: FormGroup;

  constructor(private fb: FormBuilder, private service: ServicejsonService){
    this.mulForm = this.fb.group(
      { 'a' : ['', Validators.required],
        'b': ['', Validators.required]
    }
      )
  }

  submit(){
    this.service.getMul(this.mulForm.value)
    .subscribe((data) => {
      this.c = data
    })
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private fb:FormBuilder){
    
  }

  get name(){
    return this.form.get('name') as FormControl;
  }
  get age(){
    return this.form.get('age') as FormControl;
  }
  
  get birth(){
    return this.form.get('birth') as FormControl;
  }
  

  form=this.fb.group({
    'name':['',Validators.required],
    'age':['', Validators.pattern(/^\d+$/)],
    'birth':['',Validators.required]
  });

  almacenar(){
    let data=this.form.value;
    console.log(data)
    this.form.reset();
    let theJSON = JSON.stringify(data);
    let uri = "data:application/json;charset=UTF-8," + encodeURIComponent(theJSON);
    let a = document.createElement('a');
    a.href = uri;
    a.innerHTML = "Right-click and choose 'save as...'";
    document.body.appendChild(a);
  }

  
  

}

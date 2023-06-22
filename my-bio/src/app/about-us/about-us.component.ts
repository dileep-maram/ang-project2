import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit{
  myForm!: FormGroup;
  constructor (private _fb:FormBuilder) {
    
  }
  ngOnInit(): void {
    this.myForm = this._fb.group({
      nameF: ['dileep',Validators.required],
      email: ['',Validators.required],
      comments: ['',Validators.required]
    });
  }
  onSubmit(){
    console.log(this.myForm.value);
  }
}

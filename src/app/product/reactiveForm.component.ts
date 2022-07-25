import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector:'app-reactiveForm',
    templateUrl:'./reactiveForm.component.html',
    styleUrls:['./reactiveForm.component.css']
})

export class ReactiveForm{

    constructor(private fb: FormBuilder){}

    @Input() test = '';

    get name(){
        return this.registrationForm.get('name');
    }

    registrationForm =  this.fb.group({
        name: ['',Validators.required,[Validators.minLength(3),Validators.maxLength(6)]],
        password: [''],
        confirmPassword: [''],
        address : this.fb.group({
            city: [''],
            state: [''],
            postalCode: ['']
        })  
    })

    // registrationForm = new FormGroup({
    //     name: new FormControl(''),
    //     password: new FormControl(''),
    //     confirmPassword: new FormControl(''),
    //     address: new FormGroup({
    //         city: new FormControl(),
    //         state: new FormControl(),
    //         postalCode: new FormControl()
    //     })
    // })

    
    ngOnInit():void{

    }
    loadApiData(){
        this.registrationForm.setValue({
            name: 'Tripti',
            password:'Tripti',
            confirmPassword: 'Tripti',
            address: {
                city: 'Jaipur',
                state: 'Raj',
                postalCode: '123456'
            }
        });
        // this.registrationForm.patchValue({
        //     name: 'Ashu',
        //     password:'Ashu',
        //     confirmPassword:'Ashu'
        // });
    }
}
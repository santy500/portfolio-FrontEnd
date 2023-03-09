import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/Modelo/Usuario';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  creds: Credentials ={
    email:'',
    password:''
  };

  constructor(private portfolioService:PortfolioService,
    private router:Router){

  }

  login(form:NgForm){
    console.log('form value', form.value);
    

    this.portfolioService.login(this.creds)
    .subscribe(response =>{
      this.router.navigate(['/crud'])
    })
  }

}


//export class LoginComponent implements OnInit {
  //form:FormGroup;
  //constructor() {
  //constructor(private formBuilder:FormBuilder, private http:HttpClient,private autenticacionService:AutenticacionService, private router:Router) {
  //  this.form=this.formBuilder.group(
  //    {
  //      email:['',[Validators.required,Validators.email]],
  //      password:['',[Validators.required,Validators.minLength(4)]]
  //    }
  //  )
  // }
//
  //ngOnInit(): void {
  //}
//
  //get Email(){
  //  return this.form.get('email');
  //}

  //get Password(){
  //  return this.form.get('password');
  //}

  //onEnviar(){
    //event?.preventDefault;
    //this.autenticacionService.iniciarSesion(this.form.value).subscribe(data=>{
    //  console.log("DATA" + JSON.stringify(data));
    //  this.router.navigate(['crud']);
    //})
  //}

//  Enviar(){
//    console.log(this.form.value)
//    this.http.post("http://localhost:8080/token",this.form.value).subscribe();
//  }
//
//  
//
//}

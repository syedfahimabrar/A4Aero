import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import * as Country from 'Countries-Api';
import {BsentityService} from '../../_service/bsentity.service';
import {Business} from '../../_models/business.model';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.scss']
})
export class AddusersComponent implements OnInit {

  countries;
  logo;
  userForm:FormGroup;
  model:Business;
  constructor(private fb:FormBuilder,private bs:BsentityService,
              private toastr:ToastrService) {
    this.loadCountry();
    this.logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png";
    this.model = new Business();
    this.userForm = this.fb.group({
      code:['',Validators.required],
      name:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
      phone:[''],
      country:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      state:[''],
      smtpport:['',Validators.required],
      logo:['',Validators.required],
      smtpserver:['',Validators.required],
      smtpusername:['',Validators.required],
      smtppassword:['',Validators.required],
      loginurl:['',Validators.required]
    });
  }
  save(){
    console.log(this.userForm);
    this.model.Code = this.userForm.get('code').value;
    this.model.Name = this.userForm.get('name').value;
    this.model.Email = this.userForm.get('email').value;
    this.model.Mobile = this.userForm.get('mobile').value;
    this.model.Phone = this.userForm.get('phone').value;
    this.model.Country = this.userForm.get('country').value;
    this.model.Street = this.userForm.get('address').value;
    this.model.City = this.userForm.get('city').value;
    this.model.State = this.userForm.get('state').value;
    this.model.Logo = this.userForm.get('logo').value;
    this.model.SMTPServer = this.userForm.get('smtpserver').value;
    this.model.SMTPUserName = this.userForm.get('smtpusername').value;
    this.model.SMTPPassWord = this.userForm.get('smtppassword').value;
    this.model.SMTPPort = this.userForm.get('smtpport').value;
    this.model.LoginUrl = this.userForm.get('loginurl').value;
    this.bs.AddUser(this.model).subscribe((suc)=>{
      console.dir(suc);
      this.toastr.success('User Added!', 'Success!');
      this.userForm.reset();
    },error1 =>{
      this.toastr.error(error1.error,"failed!");
    });
  }
  loadCountry(){
    this.countries = Country.findAll().data;
    console.log(Country.findAll());
    console.log(this.countries);
  }
  onSelectCountry(){
    console.log("selected");

  }

  ngOnInit() {
  }
  findInvalidControls() {
    const invalid = [];
    const controls = this.userForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    console.log(invalid);
  }

}

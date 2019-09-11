import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BsentityService} from '../../_service/bsentity.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as Country from 'Countries-Api';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.scss']
})
export class EditusersComponent implements OnInit {

  id;
  countries;
  model;
  logo;
  userForm:FormGroup;
  constructor(private toastr:ToastrService,private fb:FormBuilder,private route:ActivatedRoute,
              private service:BsentityService,private router:Router) {
    this.id = (this.route.snapshot.params['id']);
    this.service.getUser(this.id).subscribe((payload)=>{
      this.model = payload;
      console.log(this.model);
      this.loadform();
    });

  }
  save(){
    console.log(this.userForm);
    this.model.businessId = this.id;
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
    this.model.CreatedOnUtc = this.model.createdOnUtc;
    this.model.SMTPServer = this.userForm.get('smtpserver').value;
    this.model.SMTPUserName = this.userForm.get('smtpusername').value;
    this.model.SMTPPassWord = this.userForm.get('smtppassword').value;
    this.model.SMTPPort = this.userForm.get('smtpport').value;
    this.model.LoginUrl = this.userForm.get('loginurl').value;
    this.service.UpdateUser(this.model).subscribe((suc)=>{
      console.dir(suc);
      this.toastr.success('User Updated!', 'Success!');
      this.userForm.reset();
      this.router.navigateByUrl('/user/'+this.id);
    },error1 =>{
      this.toastr.error(error1.error,"failed!");
    });

  }
  loadCountry(){
    this.countries = Country.findAll().data;
    console.log(Country.findAll());
    console.log(this.countries);
  }
  loadform(){
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
    console.log(this.model);
    this.loadCountry();
    this.userForm.setValue({
      code:this.model.code,
      name:this.model.name,
      email:this.model.email,
      mobile:this.model.mobile,
      phone:this.model.phone,
      country:this.model.country,
      address:this.model.street,
      city:this.model.city,
      state:this.model.state,
      smtpport:this.model.smtpPort,
      logo:this.model.logo,
      smtpusername:this.model.smtpUserName,
      smtpserver:this.model.smtpServer,
      smtppassword:this.model.smtpPassWord,
      loginurl:this.model.loginUrl
    });
    this.logo = this.model.logo;
  }
  ngOnInit() {
  }

}

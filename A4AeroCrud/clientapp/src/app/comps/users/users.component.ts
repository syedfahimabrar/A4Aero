import { Component, OnInit } from '@angular/core';
import {Business} from '../../_models/business.model';
import {BsentityService} from '../../_service/bsentity.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  totalPage=20;
  pagenumber=1;
  bs=[];
  constructor(private toastr:ToastrService,private bzs:BsentityService,private route:ActivatedRoute,private router:Router) {
    //this.bs = new Array<Business>();
    this.pagenumber = (this.route.snapshot.queryParams['pageNumber']==null?1:this.route.snapshot.queryParams['pageNumber']);
  }
  ngOnInit() {
    this.bzs.getUsers(this.pagenumber).subscribe((payload:any)=>{
      this.bs = payload.businessEntities;
      this.totalPage = payload.totalEntites;
      console.log(payload);
      console.log(this.bs);
    });

  }
  loadPage(pagenumber){
    this.router.navigate([], {
      queryParams: {
        'pageNumber': pagenumber
      }
    });
    this.bzs.getUsers(pagenumber).subscribe((payload:any)=>{
      this.bs = payload.businessEntities;
      this.totalPage = payload.totalEntites;
      console.log(payload);
      console.log(this.bs);
    });
  }
  delete(id){
    this.bzs.deleteUser(id).subscribe((payload)=>{
      this.toastr.success("Deleted Successfully!!!","Success!!!");
      this.loadPage(this.pagenumber);
    },(error)=>{
      this.toastr.error("error happend","Error!!!")
    });
  }

}

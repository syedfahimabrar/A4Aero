import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BsentityService} from '../../_service/bsentity.service';
import {Business} from '../../_models/business.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id;
  model;
  constructor(private route:ActivatedRoute,private service:BsentityService) {
    this.id = (this.route.snapshot.params['id']==null?1:this.route.snapshot.params['id']);
    service.getUser(this.id).subscribe((payload)=>{
      console.log(payload);
      this.model = payload;
    });
  }

  ngOnInit() {
  }

}

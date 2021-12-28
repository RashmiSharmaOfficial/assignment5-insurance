import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Insurance } from '../insurance';
import { insuranceFetch } from '../insurance-fetch';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css'],

})
export class UpdateComponentComponent implements OnInit {

  constructor(public route: ActivatedRoute, public router:Router, public restService: RestService, public user: insuranceFetch) { }

  val : any;
  arrInsu: Insurance[] = [];



  ngOnInit(){
    let sub = this.route.params.subscribe(params => {
      this.val = params['id'];
    })
    console.log("id"+this.val)
    this.restService.getupdateRecord(this.val).subscribe(
      (data:any) => {
        this.user = data;
    },
    (error) => console.log(error))
  }


  update(){
    this.restService.updateRecord(this.user).subscribe(
      data => {}
    )
    this.restService.getUsers().subscribe((response) => {
      this.arrInsu = response;
      location.reload();

    })
    this.router.navigate([''])
  }

  // getUsers(){
  //   this.restService.getUsers().subscribe((response) => {
  //     this.arrInsu = response;
  //   })
  // }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';
import { Insurance } from '../insurance';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public route: ActivatedRoute, public router:Router, public RestService: RestService) { }

  arrInsu: Insurance[] = [];

  ngOnInit(){
    this.readData();
  }

  readData(){
    this.RestService.getUsers().subscribe(
      (data) => {
        this.arrInsu = data;
      },
      (error) => console.log(error)
    )
  }

  insertRecord(pId: any, pName: string, pAmt: any, pEmi:any, pNominee: string){
    let userObj = new Insurance(pId,pName, pAmt, pEmi, pNominee);
    this.RestService.insertData(userObj).subscribe(
      (data) => {
        console.log("Inserted data is" + data);
        this.readData();
        location.reload();
      },
      (error) => console.log("Inserted data is" + error)
    )
    this.router.navigate(['/'])

  }

}

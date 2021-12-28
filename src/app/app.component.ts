import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance } from './insurance';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'insurance';

  columns = ["ID", "Name", "Amount", "Emi", "Nominee", "Action"];

  arrInsu:Insurance[] = [];

  ngOnInit(){
    this.readData();
  }
  constructor(private RestService: RestService, private router: Router){};

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
      },
      (error) => console.log("Inserted data is" + error)
    )
  }

  recordNum = "";
  deleteRecord(id:any){
    this.RestService.deleteRecord(id).subscribe(
      (data) =>{
        this.readData();
      },
      (error) => console.log("Unable to delete data" + error)
    )
  }

  updateRecord(id: any){
    this.router.navigate(['/update', id]);
  }

  add(){
    this.router.navigate(['/add']);
  }


}

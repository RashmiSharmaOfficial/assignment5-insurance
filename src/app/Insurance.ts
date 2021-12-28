export class Insurance{
  id: number = 0;
  firstName: string = "";
  amount: number = 0;
  emi: number = 0;
  nominee: string = "";

  constructor(id:number, firstName:string, amount: number, emi: number, nominee: string){
    this.id = id;
    this.firstName = firstName;
    this.amount = amount;
    this.emi = emi;
    this.nominee = nominee;
  }
}

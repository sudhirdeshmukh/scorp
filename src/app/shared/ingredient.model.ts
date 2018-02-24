export class Ingredient {
  public name: string
  public amount: number

  constructor(name:string, amount:number){
    this.name = name
    this.amount = amount
  }

  //this all above can be declared as
  // constructor(public name:string, public amount:number)
}

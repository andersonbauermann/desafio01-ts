import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if (this.status == true) {
      this.balance += value
      console.log(`Empréstimo no valor de R$ ${value} realizado com sucesso!`)
    } else {
      console.log('Conta inválida!')
    }
  }
}

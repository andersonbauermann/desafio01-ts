import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
      }

      deposit = (value: number): void => {
        if(this.validateStatus()){
          if (value > 0) {
            let i = value + 10
            this.balance += i
            console.log(`Depósito no valor de R$ ${i} efetuado com sucesso!`)
          } else {
            console.log('Valor de depósito inválido!')
          }      
        }
      }
    
}
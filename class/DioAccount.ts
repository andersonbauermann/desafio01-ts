export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  readonly status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      if (value > 0) {
        this.balance += value
        console.log(`Depósito no valor de R$ ${value} efetuado com sucesso!`)
      } else {
        console.log('Valor de depósito inválido!')
      }      
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus()) {
      if (value <= this.balance) {
        this.balance -= value
        console.log(`Saque no valor dr R$ ${value} efetuado com sucesso!`)
      } else {
        console.log('Saldo insuficiênte para saque. ')
      }
    }

  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}

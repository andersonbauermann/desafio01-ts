import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(200)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(300)
console.log(companyAccount)
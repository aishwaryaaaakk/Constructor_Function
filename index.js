let body = document.querySelector("body");

function BankAccount(accountNumber,name,type,balance){

    this.accountNumber=accountNumber;
    this.name=name;
    this.type=type;
    this.balance=balance;
    // this.IsActive=IsActive;

    let head = document.createElement("h1");
    

    this.deposit = function(amount){
        this.balance += amount;
        console.log(`Your account Balance is : ${this.balance}`);
    }
    this.withdrawl = function(amount){
        if (this.balance >= amount){
            this.balance -= amount;
            console.log(`Your account balance is : ${this.balance}`);
        }
        else{
            alert("Insufficient funds");
            console.log(`Insufficient Balance`);
        }
    }
    this.checkBalance = function(){
         console.log(`${this.name} your account balance is: ${this.balance}`)
        
    }
    this.IsActive = function(){
        if(this.balance > 0){
            console.log(`${this.name} your account status is : Active`);
        }else{
            console.log(`${this.name} your account status is : InActive`);
        }
    }

    
}
let account1 = new BankAccount(23456718,"Gabriel","Saving",2000);

let account2 = new BankAccount(23456719,"Aishwarya","Saving",1000);

account2.withdrawl(500)
account1.deposit(1000)
account1.IsActive()
account2.checkBalance()

let arr = [account1,account2];

function getTotalBalance(){
    for(let i=0;i<arr.length;i++){
    console.log(arr[i].name+" "+ "your total account balance is :"+" "+ arr[i].balance)
    let total = document.createElement("h2");

    total.innerText=(`${arr[i].name} your account balance is : ${arr[i].balance}` );
    body.append(total);
    }   
}
getTotalBalance()


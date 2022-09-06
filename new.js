class User{
    static count = 0;
    constructor(username, email, password) 
    {
        this.username=username;
        this.email=email;
        this.password=password;
        User.count++;
    }
    register()
    {
        console.log(this.username, 'is now registered');
    }
    registeredUsers()
    {
        console.log('Number of users registered = ',User.count);
    }
}

class Member extends User{
    constructor(username, email, password, memberPackage){
    super(username, email, password);
    this.package=memberPackage;
    
    let todaysdate = new Date();
    const membershipactivetillYear = todaysdate.getFullYear();
    const membershipactivetillMonth = todaysdate.getMonth();
    const membershipactivetillDay = todaysdate.getDay();
    
    this.membershipactivetilldate = new Date(membershipactivetillYear, membershipactivetillMonth, membershipactivetillDay);

}

renewmembership()
{
    const membershipactivetillYear = this.membershipactivetilldate.getFullYear()
    const membershipactivetillMonth = this.membershipactivetilldate.getMonth()
    const membershipactivetillDay = this.membershipactivetilldate.getDay()

    if(this.package === 'Standard'){
    this.membershipactivetilldate = new Date(membershipactivetillYear, membershipactivetillMonth + 1, membershipactivetillDay);
    }
    else if(this.package === 'Yearly'){
        this.membershipactivetilldate = new Date(membershipactivetillYear + 1, membershipactivetillMonth, membershipactivetillDay);
    }
}

subscibtionvalidTill()
{
    console.log(this.username,' is subscribed to ',this.package,' uptill ',this.membershipactivetilldate);
}

getPackage()
{
    console.log(this.username,' is subscribed to ',this.package);
}
}
const mike = new Member('mike', 'mike@gmail.com', '123', 'Yearly');
mike.getPackage();
mike.renewmembership();
mike.subscibtionvalidTill();

const shubham = new Member('shubham', 'shubhamcholke000@gmail.com', '123', 'Standard');
shubham.getPackage();
shubham.renewmembership();
shubham.subscibtionvalidTill();



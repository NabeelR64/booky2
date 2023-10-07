export class Person{
    pid: string | undefined | null;
    firstName: string | undefined | null;
    lastName: string | undefined | null;    

    constructor(pid: string | undefined | null, firstName: string | undefined | null, lastName: string | undefined | null){
        this.pid = pid;
        this.firstName = firstName;
        this.lastName = lastName;
    }


}
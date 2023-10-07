import { Person } from './person';
export class CheckIn{
    checkInTime: Date;
    person: Person;

    constructor(checkInTime: Date, person: Person){
        this.checkInTime = checkInTime;
        this.person = person;
    }

    getDate(){
        return this.checkInTime;
    }

    
}
import { User } from './user';
export class CheckIn{
    checkInTime: Date;
    user: User;

    constructor(checkInTime: Date, user: User){
        this.checkInTime = checkInTime;
        this.user = user;
    }

    getDate(){
        return this.checkInTime;
    }

    
}
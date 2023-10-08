import { User } from './user';


export interface CheckIn{
    user: User;
    created_at: Date;

    getDate(){
        return this.checkInTime;
    }
    

}
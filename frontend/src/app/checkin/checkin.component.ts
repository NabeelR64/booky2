import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CheckinService } from '../checkin.service';
import { CheckIn } from '../checkin';
import { Person } from '../person';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent {

  checkInForm = this.formBuilder.group({
    PID: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    //private registerMemebers: RegisteredMembersService,
    private checkInService: CheckinService
  ) {}


  onSubmit(): void {
    var PID = this.checkInForm.value.PID;
    if (PID?.length !== 9){
      alert(PID + " is not 9 characters");
    }
    else{
      var found = false;
      var first_name: string | null | undefined;
      var last_name: string | null | undefined;

      this.checkInService.getRegisteredMembers().subscribe({
        
        next(user) {
          console.log(user);
        },
        error(msg) {
          console.log('Error Getting Location:');
        }
      })

      /*for (let i = 0;i<this.checkInService.getRegisteredMembers().length;i++){
        if (this.checkInService.getRegisteredMembers()[i].pid === PID){
          found = true;
          first_name = this.checkInService.getRegisteredMembers()[i].firstName;
          last_name = this.checkInService.getRegisteredMembers()[i].lastName;
          break;
        }
      }
      if (!found){
        alert(PID + " could not be found");
      }
      else{
        alert(first_name + " " + last_name + " has been checked in");
        const newCheckIn = new CheckIn(new Date, new Person(PID, first_name, last_name))
        this.checkInService.addCheckIn(newCheckIn);
        this.checkInForm.reset();
      }*/

    }
  }
}

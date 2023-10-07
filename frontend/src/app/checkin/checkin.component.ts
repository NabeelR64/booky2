import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CheckinService } from '../checkin.service';
import { CheckIn } from '../checkin';
import { User } from '../user';

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

      let form = this.checkInForm.value;
      let pid = parseInt(PID);





      this.checkInService
      .addCheckIn(pid)
      .subscribe({
        next: (checkIn) => this.onSuccess(checkIn.user),
        error: (err) => this.onError(err)
      });

    }
  }


  private onSuccess(user: User): void {
    window.alert(`${user.first_name} ${user.last_name} is checked in.`);
    this.checkInForm.reset();
  }

  private onError(err: Error) {
    if (err.message) {
      window.alert("PID not found");
    } else {
      window.alert("Unknown error: " + JSON.stringify(err));
    }
  }


}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationService } from '../registration.service';
import { CheckinService } from '../checkin.service';
import { User } from '../user';
import { CheckIn } from '../checkin';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  public users$: Observable<User[]>;
  public checkIns$: Observable<CheckIn[]>;

  private registrationService: RegistrationService;

  constructor(registrationService: RegistrationService, checkInService: CheckinService) {
    this.users$ = registrationService.getUsers();

    this.checkIns$ = checkInService.getCheckIns();
    //console.log('this is checkings' + this.checkIns$, typeof this.checkIns$);

    this.registrationService = registrationService;

  }

  onDelete(user: User){
    console.log('delete clicked');
    //this.registrationService.deleteUser(user.pid);

    this.registrationService
      .deleteUser(user.pid)
      .subscribe({
        next: (user) => this.onSuccess(user),
        error: (err) => this.onError(err)
      });
  }

  private onSuccess(user: User): void {
    this.users$ = this.registrationService.getUsers(); // reset the UI
  }

  private onError(err: Error) {
    if (err.message) {
      window.alert(err.message);
    } else {
      window.alert("Unknown error: " + JSON.stringify(err));
    }
  }


}
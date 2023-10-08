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

  constructor(registrationService: RegistrationService, checkInService: CheckinService) {
    this.users$ = registrationService.getUsers();
    this.checkIns$ = checkInService.getCheckIns();
    //console.log('this is checkings' + this.checkIns$, typeof this.checkIns$);
  }

}
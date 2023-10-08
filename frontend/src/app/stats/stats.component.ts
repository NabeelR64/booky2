import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  public users$: Observable<User[]>;
  private registrationService: RegistrationService;

  constructor(registrationService: RegistrationService) {
    this.users$ = registrationService.getUsers();
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
import { Injectable } from '@angular/core';
import { Person } from './person';
import { HttpClient } from '@angular/common/http';

import {CheckIn} from './checkin';
import { RegistrationService } from './registration.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  //checkIns: CheckIn[] = [];

  constructor(
    private registrationService: RegistrationService,
    private http: HttpClient) { }


  // TODO: post request
  addCheckIn(checkIn: CheckIn){

    this.http.post("/api/checkin", checkIn.person.pid);

    //this.checkIns.push(checkIn);
  }

  getCheckIns(): Observable<CheckIn[]> {
    return this.http.get<CheckIn[]>("/api/checkin");
  }

  getRegisteredMembers(){
    return this.registrationService.getUsers();
  }
}

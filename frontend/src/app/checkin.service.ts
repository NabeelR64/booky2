import { Injectable, importProvidersFrom } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CheckinRequest } from './checkInRequest'
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
  addCheckIn(pid: number): Observable<CheckIn>{
    //let ch: CheckinRequest = {pid};
    console.log("pid = ", pid);
    return this.http.post<CheckIn>("/api/checkin", { pid });

    //this.checkIns.push(checkIn);
  }

  getCheckIns(): Observable<CheckIn[]> {
    return this.http.get<CheckIn[]>("/api/checkin");
  }

  getRegisteredMembers(){
    return this.registrationService.getUsers();
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  public static domainName = 'https://machinestream.herokuapp.com';

  constructor(
    private http: HttpClient,
  ) { }

  getMachineList(): Observable<MachineResponse> {
    return this.http.get<MachineResponse>(`${MachineService.domainName}/api/v1/machines`);
  }

  getMachineDetail(id: string): Observable<Machine> {
    return this.http.get<Machine>(`${MachineService.domainName}/api/v1/machines/${id}`);
  }
}

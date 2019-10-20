import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map, filter, toArray } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class AppService {

    appUrl: string = " http://localhost:3000/enigma/";

    constructor(private http: HttpClient) {
    }

    getVehicleHistory(vnumber) {
        return this.http.post<any>(this.appUrl + 'getVehicleHistory', { "vehicleNumber": vnumber})
            .pipe();
    }
    
    getVehicleList(value) {
        return this.http.get('/assets/data.json').pipe(
            map(data => {
                if (Array.isArray(data)) {
                    return data.filter(v => v.vehicleNumber == value || v.chasisNumber == value)
                }
            })
        );
    }
    
    getMyCar(model) {
        return this.http.get('/assets/data.json').pipe(
            map(data => {
                if (Array.isArray(data)) {
                    return data.filter(v => v.model == model)
                }
            })
        );
    }

    requestVehicleInfo(vnumber, cnumber) {
        return this.http.post<any>(this.appUrl + 'requestVehicleInfo', { "vehicleNumber": vnumber, "chasisNumber": cnumber })
            .pipe();
    }
}
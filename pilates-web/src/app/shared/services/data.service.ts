import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppConfigService } from '../../core/app-config.service';
import { IClass, IApiResponse, IMembership } from '../interfaces';


@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient, private configService: AppConfigService) { 
    }

    getClasses(): Observable<IApiResponse<IClass[]>> {
        var endpoint = '/api/Classes';
        return this.http.get<IApiResponse<IClass[]>>(this.configService.settings.apiUrl + endpoint)
            .pipe(catchError(this.handleError));
    }

    getMemberships(): Observable<IApiResponse<IMembership[]>> {
        var endpoint = '/api/Memberships';
        return this.http.get<IApiResponse<IMembership[]>>(this.configService.settings.apiUrl + endpoint)
            .pipe(catchError(this.handleError));
    }

    getClassesCalendar(): Observable<IApiResponse<IClass[]>> {
        var endpoint = '/api/Classes/timetable/week';
        return this.http.get<IApiResponse<IClass[]>>(this.configService.settings.apiUrl + endpoint)
            .pipe(catchError(this.handleError));
    }


    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Server error');
    }
}
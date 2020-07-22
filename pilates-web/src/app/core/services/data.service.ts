import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AppConfigService } from '../app-config.service';
import { IClass, IApiResponse } from '../../shared/interfaces';


@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient, private configService: AppConfigService) { }

    getClasses(): Observable<IApiResponse<IClass[]>> {
        var endpoint = '/api/Classes';
        console.log(this.configService.settings.apiUrl);
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
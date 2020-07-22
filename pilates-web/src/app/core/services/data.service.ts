import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AppConfigService } from '../app-config.service';
import { IClass } from 'src/app/shared/interfaces';


@Injectable()
export class DataService {
    constructor(private http: HttpClient, private configService: AppConfigService) { }

    getClasses(): Observable<IClass[]> {
        return this.http.get<IClass[]>(this.configService.settings.apiUrl)
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
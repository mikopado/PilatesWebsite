import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class SpinnerService{

    public loading$: Subject<boolean> = new Subject();

    public startLoading(){
        this.loading$.next(true);
    }

    public stopLoading(){
        this.loading$.next(false);
    }

}
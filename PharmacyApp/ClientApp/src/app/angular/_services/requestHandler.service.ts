import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestHandlerService {

    constructor(private http: HttpClient) { }

    sendGetRequest(url: string, requestData: any) {
        return this.http.get<any>(url, requestData)
        .pipe(
            tap(
                (data) => {
                    return data;
                },
                (error) => {
                    return throwError(error);
                }
            )
        );
    }

    sendPostRequest(url: string, requestData: any) {
        return this.http.post<any>(url, requestData)
        .pipe(
            tap(
                (data) => {
                    return data;
                },
                (error) => {
                    return throwError(error);
                }
            )
        );
    }


    sendPutRequest(url: string, requestData: any) {
        return this.http.put<any>(url, requestData)
        .pipe(
            tap(
                (data) => {
                    return data;
                },
                (error) => {
                    return throwError(error);
                }
            )
        );
    }
}

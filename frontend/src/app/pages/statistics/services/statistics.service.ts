import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor(private http: HttpClient) {}

  getJobs(tag: string) {
    return this.http.get(`${environment.backendEndpoint}/jobs`, {
      params: {
        tag,
      },
    });
  }
  getDevelopers(tag: string) {
    return this.http.get(`${environment.backendEndpoint}/people`, {
      params: {
        tag,
      },
    });
  }

  getAvgPayment(tag: string, size: number = 10) {
    return this.http.get(`${environment.backendEndpoint}/jobs/avg-pay`, {
      params: {
        tag,
        size,
      },
    });
  }
}

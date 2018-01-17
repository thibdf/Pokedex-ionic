import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class TypeService {
  private endpoint = 'type';

  constructor(private http: HttpClient) {
  }

  getType(id: number) {
    return this.http.get<any>(`${environment.baseUrl}/${this.endpoint}/${id}`);
  }
}

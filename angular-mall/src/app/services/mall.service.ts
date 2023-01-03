import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IProduct } from '../dto/IProduct';

@Injectable({
  providedIn: 'root',
})
export class MallService {
  constructor(private http: HttpClient) {}

  PRODUCT_BASE_URL: string = '/api/product';

  getProducts():Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.PRODUCT_BASE_URL);
  }

}

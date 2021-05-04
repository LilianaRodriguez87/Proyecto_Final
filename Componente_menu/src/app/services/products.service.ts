import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL_API = 'http://localhost:5000/api'

  constructor() { }
}

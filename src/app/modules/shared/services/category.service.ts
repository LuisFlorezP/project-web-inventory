import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories() {
    const endpoint = `${base_url}/categories`
    return this.http.get(endpoint, {
      headers: {
        rqUuid: uuidv4()
      },
    });
  }
}

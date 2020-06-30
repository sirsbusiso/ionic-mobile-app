import { Injectable } from "@angular/core";
import { Person } from "../models/person";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { inject } from "@angular/core/testing";

@Injectable({
  providedIn: "root",
})
export class PeopleService {
  apiUrl = "http://localhost:54580/api/people";

  constructor(private _http: HttpClient) {}

  GetAll(): Observable<Person[]> {
    return this._http.get<Person[]>(this.apiUrl);
  }

  GetById(id: number): Observable<Person> {
    return this._http.get<Person>(this.apiUrl + "/" + id);
  }

  AddPerson(person: Person) {
    return this._http.post(this.apiUrl, person);
  }

  UpdatePerson(person: Person, id: number) {
    return this._http.put(this.apiUrl + "/" + id, person);
  }

  DeletePerson(id: number) {
    return this._http.delete(this.apiUrl + "/" + id);
  }
}

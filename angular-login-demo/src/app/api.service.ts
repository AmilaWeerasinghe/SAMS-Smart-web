import { Student } from "./student";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Policy } from "./policy";
import { Observable } from "rxjs";
import { Teacher } from "./teacher";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  PHP_API_SERVER = "http://127.0.0.1:8080";
  constructor(private httpClient: HttpClient) {}
  read_t(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(
      `${this.PHP_API_SERVER}/api/t_read.php`
    );
  }
  create(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(
      `${this.PHP_API_SERVER}/api/creating.php`,
      student
    );
  }
  readPolicies(): Observable<Policy[]> {
    return this.httpClient.get<Policy[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }
  createPolicy(policy: Policy): Observable<Policy> {
    return this.httpClient.post<Policy>(
      `${this.PHP_API_SERVER}/api/create.php`,
      policy
    );
  }
  updatePolicy(policy: Policy) {
    return this.httpClient.put<Policy>(
      `${this.PHP_API_SERVER}/api/update.php`,
      policy
    );
  }
  deletePolicy(id: number) {
    return this.httpClient.delete<Policy>(
      `${this.PHP_API_SERVER}/api/delete.php/?id=${id}`
    );
  }
}

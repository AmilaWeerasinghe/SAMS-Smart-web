import { Student } from "./student";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApistudentService {
  PHP_API_SERVER = "http://127.0.0.1:8080";
  constructor(private httpClient: HttpClient) {}
  reading(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(
      `${this.PHP_API_SERVER}/api/read_student.php`
    );
  }
  creating(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(
      `${this.PHP_API_SERVER}/api/creating.php`,
      student
    );
  }
  update(student: Student) {
    return this.httpClient.put<Student>(
      `${this.PHP_API_SERVER}/api/updating.php`,
      student
    );
  }
}

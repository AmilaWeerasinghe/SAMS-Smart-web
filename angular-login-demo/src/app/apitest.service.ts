import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Test } from "./test";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApitestService {
  PHP_API_SERVER = "http://127.0.0.1:8080";
  constructor(private httpClient: HttpClient) {}
  read_test(): Observable<Test[]> {
    return this.httpClient.get<Test[]>(
      `${this.PHP_API_SERVER}/api/reading.php`
    );
  }
}

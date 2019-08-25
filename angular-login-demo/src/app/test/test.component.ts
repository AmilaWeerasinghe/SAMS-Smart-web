import { Test } from "./../test";
import { Component, OnInit } from "@angular/core";
import { ApitestService } from "../apitest.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"]
})
export class TestComponent implements OnInit {
  testies: Test[];
  selectedtesties: Test = { id: null, num: null, password: null };
  constructor(private apitestService: ApitestService) {}

  ngOnInit() {
    this.apitestService.read_test().subscribe((testies: Test[]) => {
      this.testies = this.testies;
      console.log(this.testies);
    });
  }
}

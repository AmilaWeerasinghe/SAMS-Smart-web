import { Policy } from "./../policy";
import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"]
})
export class TestComponent implements OnInit {
  policies: Policy[];
  selectedPolicy: Policy = { id: null, number: null, amount: null };

  constructor(private apiService: ApiService) {}
  createOrUpdatePolicy(form) {
    if (this.selectedPolicy && this.selectedPolicy.id) {
      form.value.id = this.selectedPolicy.id;
      this.apiService.updatePolicy(form.value).subscribe((policy: Policy) => {
        console.log("Policy updated", policy);
      });
    } else {
      this.apiService.createPolicy(form.value).subscribe((policy: Policy) => {
        console.log("Policy created, ", policy);
      });
    }
  }

  selectPolicy(policy: Policy) {
    this.selectedPolicy = policy;
  }

  deletePolicy(id) {
    this.apiService.deletePolicy(id).subscribe((policy: Policy) => {
      console.log("Policy deleted, ", policy);
    });
  }

  ngOnInit() {}
}

import { Student } from "./../student";
import { Policy } from "./../policy";
import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { ApistudentService } from "../apistudent.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"]
})
export class TestComponent implements OnInit {
  students: Student[];
  selectedStudent: Student = { stdid: null, age: null };
  a = 10;
  b = 1;

  constructor(private apistudentService: ApistudentService) {}
  create(form) {
    this.apistudentService
      .creating(form.value)
      .subscribe((student: Student) => {
        console.log("Student ", student);
      });
  }
  createOrUpdateStudent(form) {
    if (this.a == this.b) {
      form.value.id = this.selectedStudent.stdid;
      this.apistudentService
        .update(form.value)
        .subscribe((student: Student) => {
          console.log("Student updated", student);
        });
    } else {
      this.apistudentService
        .creating(form.value)
        .subscribe((student: Student) => {
          console.log("Student created, ", student);
        });
    }
  }

  selectStudent(student: Student) {
    this.selectedStudent = student;
  }

  ngOnInit() {
    this.apistudentService.reading().subscribe((students: Student[]) => {
      this.students = students;
      console.log(this.students);
    });
  }
}

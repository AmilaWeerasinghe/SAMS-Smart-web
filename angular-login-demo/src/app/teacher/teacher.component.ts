import { Teacher } from "./../teacher";
import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-teacher",
  templateUrl: "./teacher.component.html",
  styleUrls: ["./teacher.component.scss"]
})
export class TeacherComponent implements OnInit {
  teachers: Teacher[];
  selectedTeacher: Teacher = {
    teacherId: null,
    subjectid: null,
    subName: null,
    teacherName: null
  };
  constructor(private apiService: ApiService) {}
  selectTeacher(teacher: Teacher) {
    this.selectedTeacher = teacher;
  }

  ngOnInit() {
    this.apiService.read_t().subscribe((teachers: Teacher[]) => {
      this.teachers = teachers;
      console.log(this.teachers);
    });
  }
}

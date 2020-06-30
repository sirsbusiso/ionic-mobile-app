import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Person } from "../models/person";
import { PeopleService } from "../services/people.service";

@Component({
  selector: "app-add-person",
  templateUrl: "./add-person.page.html",
  styleUrls: ["./add-person.page.scss"],
})
export class AddPersonPage implements OnInit {
  model = new Person();
  submitted = false;

  constructor(private _router: Router, private _peopleService: PeopleService) {}

  onSubmit() {
    this.submitted = true;
  }
  AddPerson(person: Person) {
    this._peopleService.AddPerson(person).subscribe(
      () => {
        this._router.navigateByUrl("/all-people");
      },
      (error) => console.error(error)
    );
  }
  BackToList() {
    this._router.navigateByUrl("/all-people");
  }

  ngOnInit() {}
}

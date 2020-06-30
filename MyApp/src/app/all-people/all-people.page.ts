import { Component, OnInit } from "@angular/core";
import { PeopleService } from "../services/people.service";
import { Person } from "../models/person";
import { Router } from "@angular/router";

@Component({
  selector: "app-all-people",
  templateUrl: "./all-people.page.html",
  styleUrls: ["./all-people.page.scss"],
})
export class AllPeoplePage implements OnInit {
  people: Person[];
  constructor(private _peopleService: PeopleService, private _router: Router) {
    this.GetAllPeople();
  }

  GetAllPeople() {
    this._peopleService.GetAll().subscribe(
      (response) => {
        this.people = response;
      },
      (error) => console.error(console.error)
    );
  }

  doRefresh(event) {
    console.log("Begin async operation");

    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 2000);
  }

  delete(person) {
    console.log(person);
    if (confirm("Are you sure you want to delete " + person.Name + "?")) {
      let index = this.people.indexOf(person, 0);

      this._peopleService.DeletePerson(person.Id).subscribe(
        () => {
          this.people.splice(index, 1);
        },
        (error) => console.error(error)
      );
    }
  }

  AddPerson() {
    this._router.navigate(["add-person"]);
  }

  UpdatePerson(id: number) {
    this._router.navigate(["update-person/" + id]);
  }

  ngOnInit() {
    this.GetAllPeople();
  }
}

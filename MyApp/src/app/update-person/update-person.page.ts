import { Component, OnInit, Inject } from "@angular/core";
import { Person } from "../models/person";
import { Router, ActivatedRoute } from "@angular/router";
import { PeopleService } from "../services/people.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-update-person",
  templateUrl: "./update-person.page.html",
  styleUrls: ["./update-person.page.scss"],
})
export class UpdatePersonPage implements OnInit {
  model: Person;
  public personUpdateForm: FormGroup;
  id: number;
  constructor(
    private _router: Router,
    private _peopleService: PeopleService,
    private _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) {
    this.id = parseInt(this._activatedRoute.snapshot.paramMap.get("id"));
    this._peopleService.GetById(this.id).subscribe((response) => {
      // this.model.name = response.name;
      // this.model.email = response.email;
      this.personUpdateForm = this._formBuilder.group({
        id: [response.id],
        name: [response.name, [Validators.minLength(3), Validators.required]],
        email: [response.email, [Validators.email, Validators.required]],
      });
    });
  }

  UpdatePerson(person) {}

  ngOnInit() {}
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"],
})
export class TabsPage implements OnInit {
  numberOfNotifications = 45;
  constructor() {}

  GetNotifications() {
    return this.numberOfNotifications;
  }

  ngOnInit() {
    this.GetNotifications();
  }
}

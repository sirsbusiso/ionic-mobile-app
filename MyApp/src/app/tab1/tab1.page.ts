import { Component } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  constructor(private splash: SplashScreen) {}
}

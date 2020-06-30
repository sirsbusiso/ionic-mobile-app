import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { ThemeServicesService } from "../app/light-dark-theme/theme-services.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private themeSwitcher: ThemeServicesService
  ) {
    this.initializeApp();
    this.sideMenu();
  }

  ThemeSwitcher() {
    // 0 = day mode
    // 1 = night mode
    if (this.themeSwitcher.currentTheme === 0) {
      this.themeSwitcher.setTheme("night");
      this.themeSwitcher.currentTheme = 1;
    } else {
      this.themeSwitcher.setTheme("day");
      this.themeSwitcher.currentTheme = 0;
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu() {
    this.navigate = [
      {
        title: "Home",
        url: "tabs/home",
        icon: "home-outline",
      },
      {
        title: "Appointment",
        url: "tabs/appointment",
        icon: "fitness-outline",
      },
      {
        title: "Notifications",
        url: "tabs/notification",
        icon: "notifications-outline",
      },

      {
        title: "Profile",
        url: "tabs/profile",
        icon: "person-circle-outline",
      },

      {
        title: "Covid-19",
        url: "tabs/covid19",
        icon: "document-text-outline",
      },
      {
        title: "People",
        url: "/all-people",
        icon: "document-text-outline",
      },
    ];
  }
}

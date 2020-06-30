import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "appointment",
    loadChildren: () =>
      import("./appointment/appointment.module").then(
        (m) => m.AppointmentPageModule
      ),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./register/register.module").then((m) => m.RegisterPageModule),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./profile/profile.module").then((m) => m.ProfilePageModule),
  },
  {
    path: "covid19",
    loadChildren: () =>
      import("./covid19/covid19.module").then((m) => m.Covid19PageModule),
  },
  {
    path: "start",
    loadChildren: () =>
      import("./start/start.module").then((m) => m.StartPageModule),
  },
  {
    path: "notification",
    loadChildren: () =>
      import("./notification/notification.module").then(
        (m) => m.NotificationPageModule
      ),
  },
  {
    path: "all-people",
    loadChildren: () =>
      import("./all-people/all-people.module").then(
        (m) => m.AllPeoplePageModule
      ),
  },
  {
    path: "add-person",
    loadChildren: () =>
      import("./add-person/add-person.module").then(
        (m) => m.AddPersonPageModule
      ),
  },
  {
    path: "update-person/:id",
    loadChildren: () =>
      import("./update-person/update-person.module").then(
        (m) => m.UpdatePersonPageModule
      ),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

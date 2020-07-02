import { Component, OnInit } from "@angular/core";
import { ActionSheetController } from "@ionic/angular";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  textToShare =
    "Hello Appery! (optional message, may be ignored by Facebook app)";
  urlToShare = "https://appery.io/";
  imageToShare = "https://appery.io/wp-content/uploads/nature-bg.jpg";
  canShareTwitter: boolean;

  constructor(
    private actionSheetController: ActionSheetController,
    private socialSharing: SocialSharing
  ) {}
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Share",
      cssClass: "my-custom-class",
      buttons: [
        {
          text: "Twitter",
          role: "twitter",
          icon: "logo-twitter",
          handler: () => {
            // Check if sharing via Twitter, Facebook and email is supported:
            this.socialSharing
              .canShareVia("twitter", this.textToShare, null, this.urlToShare)
              .then(() => {
                // Sharing via twitter is possible
                this.canShareTwitter = true;
              })
              .catch(() => {
                // Sharing via twitter is not possible
                this.canShareTwitter = false;
              });
          },
        },
        {
          text: "Facebook",
          icon: "logo-facebook",
          handler: () => {
            this.socialSharing
              .shareViaEmail("Body", "Subject", ["khaye.ksntanzi@gmail.com"])
              .then(() => {
                // Success!
              })
              .catch(() => {
                // Error!
              });
          },
        },
        {
          text: "Whatsapp",
          icon: "logo-whatsapp",
          handler: () => {
            console.log("Play clicked");
          },
        },
        {
          text: "Linkedin",
          icon: "logo-linkedin",
          handler: () => {
            console.log("Favorite clicked");
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    await actionSheet.present();
  }

  ngOnInit() {}
}

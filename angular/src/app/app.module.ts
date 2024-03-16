import { NgModule, importProvidersFrom } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatToolbarModule } from "@angular/material/toolbar";
import { PagesModule } from "./pages/pages.module";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { AuthentificationModule } from "./authentification";
import { AppComponent } from "./app.component";
import { provideAnimations } from "@angular/platform-browser/animations";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    AuthentificationModule,
    BrowserModule,
    CommonModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    PagesModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    provideAnimations(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          // TODO: ENV var for customization
          projectId: "mistiboard-dev",
          appId: "1:233556587793:web:3afd075bb260b0af6a88b0",
          storageBucket: "mistiboard-dev.appspot.com",
          apiKey: "AIzaSyAWWZp0L2mYYYwjJmdN1tofq3MQjDbjq4U",
          authDomain: "mistiboard-dev.firebaseapp.com",
          messagingSenderId: "233556587793",
          measurementId: "G-T9B5PWTZXX",
        }),
      ),
      provideFirestore(() => getFirestore()),
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
  ],
})
export class AppModule {}

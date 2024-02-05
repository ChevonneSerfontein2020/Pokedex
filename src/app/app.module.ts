import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [],
    imports: [BrowserModule, HttpClientModule],
    providers: [],
    bootstrap: []
})
export class AppModule {}
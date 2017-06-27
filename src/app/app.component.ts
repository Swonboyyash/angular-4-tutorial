import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featureToLoad = 'recipe';

  OnNavigate(feature: string) {
    console.log(feature);
    this.featureToLoad = feature;
  }
}

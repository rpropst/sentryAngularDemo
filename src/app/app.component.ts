import { Component } from '@angular/core';
import {throwError} from "rxjs/index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .then(success => console.log(`Bootstrap success`))
//   .catch(err => console.error(err));

export class AppComponent {
  title = 'sentryDemo';

  onClickMe() {
    console.error('Test error');
  }
}

import { Component } from '@angular/core';
import {throwError} from "rxjs/index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myTestApp';

  onMyClick() {
    throw throwError({error: 'Test error'});
  }
}

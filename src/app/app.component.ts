import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'AngularPlayground';
  envName: string = '';

  ngOnInit(): void {
    this.envName = environment.name;
  }

}

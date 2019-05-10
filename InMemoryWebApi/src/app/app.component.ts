import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './shared/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'InMemoryWebApi';
  constructor(private authenticationService: AuthenticationService) {}
  ngOnInit() {

    this.authenticationService.login({ userName: 'xxx.xxx@abc.com', password: 'asd123!@#'})
    .subscribe(
      (next) => {
        console.log(next);
      },
      (err) => {
        console.error(err);
      },
      () => {
        console.log('Completed succesfully');
      }
    );
  }
}

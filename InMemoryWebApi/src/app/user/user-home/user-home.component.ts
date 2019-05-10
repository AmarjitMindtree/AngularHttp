import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.sass']
})
export class UserHomeComponent implements OnInit {

  constructor( private authenticationService: AuthenticationService ) { }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { InMemoryDbService, ResponseOptions, BackendService } from 'angular-in-memory-web-api';
import { Observable, of } from 'rxjs';
import { usersData, adminsData } from '../_defaultData';
import { HttpRequest } from '@angular/common/http';
import { query } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  createDb(): {} | Observable<{}> | Promise<{}> {
    return { usersData , adminsData };
  }
}


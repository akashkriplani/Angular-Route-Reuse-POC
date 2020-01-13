import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable()

export class UserService {

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users');
    }
}
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../interfaces/post";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class PostService {
    constructor(private http: HttpClient) { }
    getPost(id: number): Observable<Post> {
        return this.http.get<Post>('http://jsonplaceholder.typicode.com/posts/' + id);
    }
    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
    }
}
import { User } from './../model/user.model';

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserRepository {

  constructor(private httpClient: HttpClient) {

  }

  public getAll() {
    return this.httpClient.get<User[]>('users');
  }

  public find(id: string) {
    return this.httpClient.get<User>(`users/${id}`);
  }

  public create(user: User) {
    return this.httpClient.post('users', user);
  }

  public update(id: string, user: User) {
    return this.httpClient.patch(`users/${id}`, user);
  }

  public delete(id: number) {
    return this.httpClient.delete(`users/${id}`);
  }

  public findAllTrash() {
    return this.httpClient.get<User[]>('users/trash');
  }

  public deleteTrash(id: number) {
    return this.httpClient.delete(`users/trash-delete/${id}`);
  }

  public restore(id: number) {
    return this.httpClient.get(`users/trash-restore/${id}`);
  }

}

import { Injectable } from "@angular/core";
import { tap } from "rxjs";

import { User } from "../model/user.model";
import { UserRepository } from "../repository/user.repository";

@Injectable()
export class UserService {

  constructor(private repository: UserRepository) {}

  public findAllTrash() {
    return this.repository.findAllTrash().pipe(
      tap(console.log)
    )
  }

  public restore(id: number) {
    return this.repository.restore(id);
  }

  public trashDelete(id: number) {
    return this.repository.deleteTrash(id);
  }

  public getAll() {
    return this.repository.getAll().pipe(
      tap(console.log)
    )
  }

  public find(id: string) {
    return this.repository.find(id);
  }

  public create(user: User) {
    return this.repository.create(user);
  }

  public update(id: string, user: User) {
    return this.repository.update(id, user);
  }

  public delete(id: number) {
    return this.repository.delete(id);
  }


}

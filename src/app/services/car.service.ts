import { Injectable } from "@angular/core";
import { tap, take } from "rxjs";

import { CarRepository } from "../repository/car.repository";
import { Car } from './../model/car.model';

@Injectable()
export class CarService {

  constructor(private repository: CarRepository) {}

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

  public create(car: Car) {
    return this.repository.create(car);
  }

  public update(id: string, car: Car) {
    return this.repository.update(id, car);
  }

  public delete(id: number) {
    return this.repository.delete(id);
  }


}

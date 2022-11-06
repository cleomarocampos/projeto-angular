import { Car } from './../model/car.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CarRepository {

  constructor(private httpClient: HttpClient) {
  }

  public getAll() {
    return this.httpClient.get<Car[]>('cars');
  }

  public find(id: string) {
    return this.httpClient.get<Car>(`cars/${id}`);
  }

  public create(car: Car) {
    return this.httpClient.post('cars', car);
  }

  public update(id: string, car: Car) {
    return this.httpClient.patch(`cars/${id}`, car);
  }

  public delete(id: number) {
    return this.httpClient.delete(`cars/${id}`);
  }

  public findAllTrash() {
    return this.httpClient.get<Car[]>('cars/trash');
  }

  public deleteTrash(id: number) {
    return this.httpClient.delete(`cars/trash-delete/${id}`);
  }

  public restore(id: number) {
    return this.httpClient.get(`cars/trash-restore/${id}`);
  }

}

import { Car } from './car.model';

export interface User {
  id: number;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  cars_count?: number;

  cars?: Car[];
}

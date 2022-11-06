import { User } from "./user.model";

export interface Car {
  id: number;
  user_id: number;
  title: string;
  model: string;
  plat: string;
  year: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  user?: User;
}

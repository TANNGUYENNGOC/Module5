import {Classroom} from "./classroom";

export interface Student {
  id?: number;
  name: string;
  dateOfBirth?: string;
  point: number;
  classroom?: Classroom
}

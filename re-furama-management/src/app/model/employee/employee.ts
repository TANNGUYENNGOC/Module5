import {EducationDegree} from "./education-degree";
import {Division} from "./division";

export interface Employee {
  id:number;
  name?:string;
  dateOfBirth?:string;
  idCard?:string;
  salary?:number;
  phoneNumber?:string;
  email?:string;
  address?:string;
  position?:Position;
  educationDegree?:EducationDegree;
  division?:Division;
}

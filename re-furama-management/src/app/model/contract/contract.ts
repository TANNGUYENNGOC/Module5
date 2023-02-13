import {Employee} from "../employee/employee";
import {Customer} from "../customer/customer";
import {Facility} from "../facility/facility";

export interface Contract {
  id?:number;
  startDate?:string;
  endDate?:string;
  deposit?:number;
  employee?:Employee;
  customer?:Customer;
  facility?:Facility
}

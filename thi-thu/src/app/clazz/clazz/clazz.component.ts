import { Component, OnInit } from '@angular/core';
import {ClazzService} from "./clazz.service";
import {Clazz} from "../../model/clazz";

@Component({
  selector: 'app-clazz',
  templateUrl: './clazz.component.html',
  styleUrls: ['./clazz.component.css']
})
export class ClazzComponent implements OnInit {
  constructor(private clazzService:ClazzService) { }

  ngOnInit(): void {
  }


}

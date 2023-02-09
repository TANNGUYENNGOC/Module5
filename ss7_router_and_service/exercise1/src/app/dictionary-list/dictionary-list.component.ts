import { Component, OnInit } from '@angular/core';
import {Dictionary} from '../../model/dictionary';

@Component({
  selector: 'app-dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.css']
})
export class DictionaryListComponent implements OnInit {
  dictionaryList: Dictionary[]=[{
    vietnamese: "xin chào",
    english: "hello"
  },{
    vietnamese: "táo",
    english: "apple"
  },{
    vietnamese: "cam",
    english: "orange"
  }]
  result:string;
  result1:string;


  constructor() { }

  ngOnInit(): void {
  }


  check(value: string) {
    for (let i = 0; i < this.dictionaryList.length; i++) {
      if (this.dictionaryList[i].english===(value)){
        this.result = this.dictionaryList[i].vietnamese;
      }
    }
  }

  check1(value: string) {
    for (let i = 0; i < this.dictionaryList.length; i++) {
      if (this.dictionaryList[i].english.includes(value)){
        this.result1 = this.dictionaryList[i].vietnamese;
      }
    }
  }
}

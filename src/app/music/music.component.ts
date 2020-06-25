import { Component, OnInit } from '@angular/core';
import { Work } from '../../work';
import { WorkService } from '../work.service';
import {dateCompareFunc} from '../compareFuncs';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor(private workService: WorkService) { }

  works: Work[];
  defaultCompareFunc: (a: Work, b: Work) => number = dateCompareFunc;

  ngOnInit(): void {
    this.getWorks();
    console.log(this.works);
  }

  getWorks(): void {
    this.workService.getWorks()
      .subscribe(works => this.works = works.sort(this.defaultCompareFunc));
  }

}

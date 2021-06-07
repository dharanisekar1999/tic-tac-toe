import { Component, OnInit,Input} from '@angular/core';


import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faCircle,faHandPointUp} from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  @Input() iconName:any;
  faHandPointUp=faHandPointUp;
  faCircle=faCircle;
  faTimes=faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}

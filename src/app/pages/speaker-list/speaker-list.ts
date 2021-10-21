import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
  speakers: any[] = [];
  isStarted: boolean = false;
  checked: boolean = false;
  progress:number = 35;
  question: number = 1;

  constructor(public confData: ConferenceData) {}

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }

  increaseProgress(){
    this.progress = this.progress + 35;
    this.question = this.question + 1;
  }

  decreaseProgress(){
    if(this.progress > 1)
      this.progress = this.progress - 35;
    else 
    this.progress = 1

    this.question = this.question - 1;
  }
}

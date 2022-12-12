import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {
  // part 4: any to any direction way between components using service.
  messageFromService: string = "";

  constructor(private shareDataService: ShareDataService) { }
  
  ngOnInit(): void {
    this.shareDataService.currentMessage
      .subscribe((message) => {
        this.messageFromService = message;
      });
  }

  // part 4
  newMessageFromService(){
    this.shareDataService.changeMessage("Hello World from Sibling using service.");
  }

}

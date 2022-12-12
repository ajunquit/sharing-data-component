import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // part 1 "parent to child via input."
  @Input() messageFromParent: string = "";
  
  // part 2 "child to parent via output + event emitter."
  @Output() messageEventEmitterFromChild = new EventEmitter<string>();
  messageFromChild: string = "Hola mundo desde Componente hijo!."

  // part 3 "child to parent via ViewChild"
  messageFromChildViaViewChild: string = "Olá mundo via view child.";

  // part 4: "any to any => message using service"
  messageReceivedFromService: string = "";
  constructor(private shareDataService: ShareDataService) { }

  ngOnInit(): void {
    this.shareDataService.currentMessage
      .subscribe(message => this.messageReceivedFromService = message);
  }

  sendMessageFromChildToParentComponent(): void{
    this.messageEventEmitterFromChild.emit(this.messageFromChild);
  }

}

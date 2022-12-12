import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements AfterViewInit, OnInit {

  // part 1: "parent to child via input"
  messageFromParent: string = "Hello world from parent component!.";

  // part 2: "child to parent via output + event emitter."
  messageReceivedFromChild: string = "";

  // part 3: "child to parent via ViewChild"
  @ViewChild(ChildComponent) child!: any;
  messageReceivedFromChildViaViewChild : string = "";

  // part 4: "any to any => message using service"
  messageReceivedFromService: string = "";

  constructor(private shareDataService:ShareDataService) { }

  ngOnInit(): void {
    this.shareDataService.currentMessage
      .subscribe(message => this.messageReceivedFromService = message);
  }

  ngAfterViewInit(): void {
    // // first way: bad practice to avoid ChangeDetectError.
    // setTimeout(() => {
    //   this.messageReceivedFromChildViaViewChild = this.child.messageFromChildViaViewChild;
    // }, 0);

    // // second way: bad practice to avoid ChangeDetectError.
    Promise.resolve().then(() => {
      this.messageReceivedFromChildViaViewChild = this.child.messageFromChildViaViewChild;
    });
    
    // this.messageReceivedFromChildViaViewChild = this.child.messageFromChildViaViewChild;
  }

  receiveMessage($event: any){
    this.messageReceivedFromChild = $event;
  }

}

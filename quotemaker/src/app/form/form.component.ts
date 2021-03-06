import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes('Panuel', "panuel@gmail.com", "Love is not blind", 0, 0),
    new Quotes('Charity', "charity@gmail.com", "love live learn", 0, 0),
    new Quotes('Marion', "marion@gmail.com", "Patience pays", 0, 0),
  ]
  upvote: number = 0
  downvote: number = 0
  static QuoteDisplayComponent: any[] | Type<any>;

  constructor() { }

  @Output() userData = new EventEmitter<{name: string, email : string, quote: string}>()
  @ViewChild('form') signupForm: ElementRef | undefined
  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signupForm)
  }
  onSendUserData(){
    this.userData.emit()
  }
  addUpvote(index: number){
    // console.log(index)
    console.log(this.quotes[index].upvote += 1)
  }
  removeUpvote(index: number){
    // console.log(index)
    console.log(this.quotes[index].downvote += 1)
  }
  onAddData(name: any, email: any, quote: any) {
    console.log(name.value, email.value, quote.value)
    this.quotes.push({
      name: name.value,
      email: email.value,
      quote: quote.value,
      upvote: this.upvote,
      downvote: this.downvote
    })
    
  }
  onDeleteQuote(index: number){
    let confirmDelete = confirm(`Are you sure you want to delete this quote===>${this.quotes[index].quote}`)
    if(confirmDelete){
      this.quotes.splice(index, 1)
    }
  }
}


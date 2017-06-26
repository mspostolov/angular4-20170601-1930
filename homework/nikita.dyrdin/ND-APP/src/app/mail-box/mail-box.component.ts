import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {
  private letters: Array<MailBox.Letter>

  constructor() { }

    consumeNewLetters(){
      setTimeout(function(){        
        var newLetterId = this.letters[0].id + 1;
        this.letters.unshift({id: newLetterId, subject: 'test letter ' + newLetterId, consumeDate: new Date()});
        this.consumeNewLetters();
      }.bind(this), 3000);
    }
      
    ngOnInit() {
      this.letters = [
        {id: 1, subject: 'test letter 1', consumeDate: new Date(2017, 5, 26)},
        {id: 2, subject: 'test letter 2', consumeDate: new Date(2017, 5, 19)}
      ];
      this.consumeNewLetters();
    }

    onUserDeleted(letter: MailBox.Letter) {
      for(var i = 0; i < this.letters.length; i++){
        if(this.letters[i].id == letter.id){
          this.letters.splice(i, 1);
          i = this.letters.length + 1;
        }
      }
    }
}

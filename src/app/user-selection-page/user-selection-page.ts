import { Component } from '@angular/core';
import { User } from '../misc-classes/user';
import { UserPicNameButton } from './user-pic-name-button/user-pic-name-button';

@Component({
  imports: [UserPicNameButton],
  selector: 'user-selection-page',
  styleUrl: './user-selection-page.scss',
  templateUrl: './user-selection-page.html',
})
export class UserSelectionPage {
  userSampleList = [
    { name: 'John Cena', pic: 'John Cena.jpg' },
    { name: 'Eminem', pic: 'Eminem.jpg' },
    { name: 'Ryan Reynolds', pic: 'Detective Pikachu.jpg' }
  ];

  // TODO: 9 should be the max length for a name
  // Also it'd be fun to make some easter egg greetings for certain names, like "Scotty" would give you "Beam me up, Scotty!", or John Cena would give you "I can't see you, John Cena!"
  // Actually, let's come up with a few others:
  // "John Cena" = "One member of the greatest duo ever: John Cena!"
  // "Eminem" = "The other member of the greatest duo ever: Eminem!"
  // Also, what to use for a name? "Ministrym", "CaughtWind", or something else are my top contenders.


  users: User[] = [];
  accountid: string = '';

  constructor() {
    for (const user of this.userSampleList){
      let userInstance = new User(user.name, user.pic);
      this.users.push(userInstance);
    }

    console.log(this.users);
  }

}

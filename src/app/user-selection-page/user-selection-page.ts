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

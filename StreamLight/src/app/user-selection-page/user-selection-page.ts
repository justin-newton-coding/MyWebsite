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
    { name: 'User 1', pic: 'user1.png' },
    { name: 'User 2', pic: 'user2.png' },
    { name: 'User 3', pic: 'user3.png' }
  ];

  users: User[] = [];

  constructor() {
    for (const user of this.userSampleList){
      let userInstance = new User(user.name, user.pic);
      this.users.push(userInstance);
    }

    console.log(this.users);
  }

}

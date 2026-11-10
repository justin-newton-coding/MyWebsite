import { Component, Input } from '@angular/core';
import { User } from '../../misc-classes/user';

@Component({
  imports: [],
  selector: 'user-pic-name-button',
  styleUrl: './user-pic-name-button.scss',
  templateUrl: './user-pic-name-button.html',
})
export class UserPicNameButton {
  @Input() user: User = new User('','');

  onPress() {
    console.log(this.user.getName() + ' pressed');
  }
}

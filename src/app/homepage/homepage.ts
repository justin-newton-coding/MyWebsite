import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-homepage',
  styleUrl: './homepage.scss',
  templateUrl: './homepage.html',
})
export class HomePage {
  aboutMeText: string = 'My name is Justin Newton. I graduated from SUU with a degree in Computer Science, and am out to change the world, one software product at a time.';
  workHistoryText: string = 'Before I\'d even graduated from college, 3M Health Information Systems accepted me on for an internship. My duties there involved working alongside a fellow intern to convert tests to the Selenium framework (written in Python).';

  //TODO: Call database to get updated text maybe
}

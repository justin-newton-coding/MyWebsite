import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserPicNameButton } from './user-pic-name-button';

describe('UserPicNameButton', () => {
  let component: UserPicNameButton;
  let fixture: ComponentFixture<UserPicNameButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPicNameButton],
    }).compileComponents();

    fixture = TestBed.createComponent(UserPicNameButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

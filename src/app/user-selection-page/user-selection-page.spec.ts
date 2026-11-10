import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserSelectionPage } from './user-selection-page';

describe('UserSelectionPage', () => {
  let component: UserSelectionPage;
  let fixture: ComponentFixture<UserSelectionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSelectionPage],
    }).compileComponents();

    fixture = TestBed.createComponent(UserSelectionPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

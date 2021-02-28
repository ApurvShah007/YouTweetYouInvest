import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditDataComponent } from './reddit-data.component';

describe('RedditDataComponent', () => {
  let component: RedditDataComponent;
  let fixture: ComponentFixture<RedditDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

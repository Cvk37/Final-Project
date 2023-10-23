import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsViewComponent } from './songs-view.component';

describe('SongsViewComponent', () => {
  let component: SongsViewComponent;
  let fixture: ComponentFixture<SongsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongsViewComponent]
    });
    fixture = TestBed.createComponent(SongsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

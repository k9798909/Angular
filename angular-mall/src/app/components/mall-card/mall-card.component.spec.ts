import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MallCardComponent } from './mall-card.component';

describe('MallCardComponent', () => {
  let component: MallCardComponent;
  let fixture: ComponentFixture<MallCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MallCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

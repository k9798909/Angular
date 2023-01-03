import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MallComponent } from './mall.component';

describe('MallComponent', () => {
  let component: MallComponent;
  let fixture: ComponentFixture<MallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

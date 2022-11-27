import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarlistComponent } from './navbarlist.component';

describe('NavbarlistComponent', () => {
  let component: NavbarlistComponent;
  let fixture: ComponentFixture<NavbarlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

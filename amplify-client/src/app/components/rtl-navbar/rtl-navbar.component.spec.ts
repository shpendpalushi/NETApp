import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { RtlNavbarComponent } from "./rtl-navbar.component";

describe("RtlNavbarComponent", () => {
  let component: RtlNavbarComponent;
  let fixture: ComponentFixture<RtlNavbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RtlNavbarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtlNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

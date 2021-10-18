import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TenaciousComponent } from "./tenacious.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("TenaciousComponent", () => {

  let fixture: ComponentFixture<TenaciousComponent>;
  let component: TenaciousComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [TenaciousComponent]
    });

    fixture = TestBed.createComponent(TenaciousComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

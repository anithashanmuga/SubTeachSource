import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SchooldistrictsComponent } from "./schooldistricts.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SchooldistrictsComponent", () => {

  let fixture: ComponentFixture<SchooldistrictsComponent>;
  let component: SchooldistrictsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SchooldistrictsComponent]
    });

    fixture = TestBed.createComponent(SchooldistrictsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

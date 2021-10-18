import { NO_ERRORS_SCHEMA } from "@angular/core";
import { StellarComponent } from "./stellar.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("StellarComponent", () => {

  let fixture: ComponentFixture<StellarComponent>;
  let component: StellarComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [StellarComponent]
    });

    fixture = TestBed.createComponent(StellarComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

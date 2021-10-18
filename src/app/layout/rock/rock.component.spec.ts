import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RockComponent } from "./rock.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("RockComponent", () => {

  let fixture: ComponentFixture<RockComponent>;
  let component: RockComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [RockComponent]
    });

    fixture = TestBed.createComponent(RockComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

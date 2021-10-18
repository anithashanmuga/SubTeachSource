import { NO_ERRORS_SCHEMA } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("LayoutComponent", () => {

  let fixture: ComponentFixture<LayoutComponent>;
  let component: LayoutComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [LayoutComponent]
    });

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

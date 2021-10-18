import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DetailComponent } from "./detail.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DetailComponent", () => {

  let fixture: ComponentFixture<DetailComponent>;
  let component: DetailComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DetailComponent]
    });

    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CustomerComponent } from "./customer.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("CustomerComponent", () => {

  let fixture: ComponentFixture<CustomerComponent>;
  let component: CustomerComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [CustomerComponent]
    });

    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

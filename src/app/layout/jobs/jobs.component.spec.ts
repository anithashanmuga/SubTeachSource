import { NO_ERRORS_SCHEMA } from "@angular/core";
import { JobsComponent } from "./jobs.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("JobsComponent", () => {

  let fixture: ComponentFixture<JobsComponent>;
  let component: JobsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [JobsComponent]
    });

    fixture = TestBed.createComponent(JobsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

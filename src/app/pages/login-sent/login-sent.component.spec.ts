import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSentComponent } from './login-sent.component';

describe('LoginSentComponent', () => {
  let component: LoginSentComponent;
  let fixture: ComponentFixture<LoginSentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

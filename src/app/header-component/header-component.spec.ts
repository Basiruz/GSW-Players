import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header-component';
import { AppMessageRegistrator} from '../postboy/app-message-registrator.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let registrator: AppMessageRegistrator;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    registrator = TestBed.inject(AppMessageRegistrator);
    registrator.up();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  afterEach(() => {
    fixture.destroy();
    registrator.down();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

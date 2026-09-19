import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerListComponent } from './player-list';
import { AppMessageRegistrator } from '../postboy/app-message-registrator.service';

describe('PlayerList', () => {
  let component: PlayerListComponent;
  let fixture: ComponentFixture<PlayerListComponent>;
  let registrator: AppMessageRegistrator;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerListComponent],
    }).compileComponents();

    registrator = TestBed.inject(AppMessageRegistrator);
    registrator.up();

    fixture = TestBed.createComponent(PlayerListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => {
    registrator.down();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

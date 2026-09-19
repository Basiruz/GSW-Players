import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerCardComponent } from './player-card';
import { PLAYERS } from '../models/player-data';

describe('PlayerCard', () => {
  let component: PlayerCardComponent;
  let fixture: ComponentFixture<PlayerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerCardComponent);
    component = fixture.componentInstance;

    const player = PLAYERS[0];

    component.firstName = player.firstName;
    component.lastName = player.lastName;
    component.age = player.age;
    component.jerseyNumber = player.jerseyNumber;
    component.photo = player.photo;
    component.stats = player.stats;


    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

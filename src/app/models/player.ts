export interface PlayerStats {
  GP: number; // Games Played
  MIN: number; // Minutes per game
  PTS: number; // Points per game
  AST: number; // Assists
  REB: number; // Rebounds
  STL: number; // Steals
  BLK: number; // Blocks
  TO: number; // Turnovers
  PF: number; // Personal Fouls
}

export interface Player {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  jerseyNumber: number;
  photo: string;
  stats: PlayerStats;
}

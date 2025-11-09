
export interface Race {
  name: string;
  imageUrl: string;
}

export interface Magic {
  name: string;
  imageUrl: string;
  summary: string;
  advantages: string[];
  powers: string;
  disadvantages: string[];
  damage: string;
  mpCost: string;
  castingTurns: number;
  range: string;
  purchasePoints: number;
  raceBonuses: {
    race: string;
    modifier: string;
  }[];
}

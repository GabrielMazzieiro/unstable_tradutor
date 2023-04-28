import { ICardData } from "../components/ShowCards.types";

export interface IGamePage {
  game: keyof IGameInfo;
}

export interface IGameData {
  cards: ICardData[];
}

export interface IGameInfo {
  hld: IGameData;
  uu: IGameData;
  hts: IGameData;
}

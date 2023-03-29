export interface ICardData {
    card_id: number;
    game: string;
    card_name: string;
    card_type: string;
    card_expansion: boolean;
    card_edition: string;
    card_flavor?: string;
    card_effect?: string;
}
export interface ICardData {
    card_id: number;
    game: string;
    card_name: string;
    card_name_br: string;
    card_type: string;
    card_type_br: string;
    card_expansion: boolean;
    card_edition: string;
    card_edition_br: string;
    card_flavor?: string;
    card_flavor_br?: string;
    card_effect?: string;
    card_effect_br?: string;
    card_extra?: string;
    card_extra_br?:string;
    card_class?:string;
    card_class_br?:string;
    slay_conditions_lose?:string;
    slay_conditions_lose_br?:string;
    slay_conditions_win?:string;
    slay_conditions_win_br?:string;
}
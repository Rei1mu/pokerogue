import { SimpleTranslationEntries } from "#app/plugins/i18n";

/**
 * The menu namespace holds most miscellaneous text that isn't directly part of the game's
 * contents or directly related to Pokemon data. This includes menu navigation, settings,
 * account interactions, descriptive text, etc.\
 * i18next.t(`partyUiHandler:too_many_item`, { pokemon_name: pokemon.name });
 */
export const partyUiHandler: SimpleTranslationEntries = {
    "Do_what_with": "Do what with this Pokémon?",
    "Select_a_move": "Select a move.",
    "Select_a_held_item_to_transfer": "Select a held item to transfer.",
    "Select_another_Pokémon_to_splice": "Select another Pokémon to splice.",
    "no_energy": ":{{pokemon_name}} has no energy\nleft to battle!",
    "too_many_item": "{{pokemon.name}} has too many\nof this item!",
    "no_effect": "It won\'t have any effect.",
    "CANCEL": "CANCEL",
    "SEND_OUT": "SEND_OUT",
    "PASS_BATON": "PASS_BATON",
    "APPLY": "APPLY",
    "TEACH": "TEACH",
    "TRANSFER": "TRANSFER",
    "SUMMARY": "SUMMARY",
    "UNPAUSE_EVOLUTION": "UNPAUSE_EVOLUTION",
    "SPLICE": "SPLICE",
    "UNSPLICE": "UNSPLICE",
    "RELEASE": "RELEASE",
    "SCROLL_UP": "SCROLL_UP",
    "SCROLL_DOWN": "SCROLL_DOWN",
    "FORM_CHANGE_ITEM": "FORM_CHANGE_ITEM",
    "MOVE_1": "MOVE_1",
    "MOVE_2": "MOVE_2",
    "MOVE_3": "MOVE_3",
    "MOVE_4": "MOVE_4",
    "Send_Out": "Send_Out",
    "Summary": "Summary",
    "Release": "Release",
    "Apply": "Apply：",
    "Teach": "Teach",
    "Transfer": "Transfer",
    "Cancel": "Cancel",
    "Do_you_really_want_to_release":"Do you really want to release {{pokemon_name}}?",
    "You_cant_release_a_Pokémon_thats_in_battle":"You can\'t release a Pokémon that\'s in battle!",
    "Choose_a_Pokémon": "Choose a Pokémon."
}

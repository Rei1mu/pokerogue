import { SimpleTranslationEntries } from "#app/plugins/i18n";

/**
 * The menu namespace holds most miscellaneous text that isn't directly part of the game's
 * contents or directly related to Pokemon data. This includes menu navigation, settings,
 * account interactions, descriptive text, etc.\
 * i18next.t(`partyUiHandler:too_many_item`, { pokemon_name: pokemon.name });
 */
export const partyUiHandler: SimpleTranslationEntries = {
    "Do_what_with": "选择这个宝可梦吗？",
    "Select_a_move": "选择一个招式",
    "Select_a_held_item_to_transfer": "选择将一个持有的道具转移",
    "Select_another_Pokémon_to_splice": "选择别的宝可梦去拼接(splice)",
    "no_energy": ":{{pokemon_name}} 没有体力了\n离开了战场",
    "too_many_item": "{{pokemon.name}} 持有了太多这个道具！",
    "no_effect": "没有任何效果",
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
    "Send_Out": "上场",
    "Summary": "详细",
    "Release": "放生",
    "Apply": "应用",
    "Teach": "教",
    "Transfer": "转移",
    "Cancel": "取消",
    "Do_you_really_want_to_release":"你真的想放生 {{pokemon_name}} 吗？",
    "You_cant_release_a_Pokémon_thats_in_battle":"你无法在战斗中释放这只宝可梦！",
    "Choose_a_Pokémon": "选择一个宝可梦"
}

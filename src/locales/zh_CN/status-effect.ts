import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const statusEffect: SimpleTranslationEntries = {
    "is_hurt_by_poison": " 中毒了！",
    "is_paralyzed_It_cant_move": " 麻痹了！\n无法行动！",
    "is_fast_asleep": " 睡着了",
    "is_frozen_solid": " 被冻结了！",
    "is_hurt_by_its_burn": " 烧伤了！",
    "is_already_poisoned": " 已中毒！",
    "is_already_paralyzed": " 已麻痹！",
    "is_already_asleep": " 已睡着！",
    "is_already_frozen": " 已冻结！",
    "is_already_burned": " 已烧伤",
    "was_cured_of_its_poison": " 的毒伤康复了！",
    "was_healed_of_paralysis": " 的麻痹康复了！",
    "woke_up": " 醒来！",
    "was_defrosted": " 已解冻！",
    "was_healed_of_its_burn": " 的烧伤康复了！",
    "poisoning": "中毒",
    "paralysis": "麻痹",
    "sleep": "催眠",
    "freezing": "冻结",
    "burn": "烧伤",
    "was_poisoned": "\n被中毒 {{sourceClause}}！",
    "was_badly_poisoned": "\n被严重中毒 {{sourceClause}}！",
    "was_paralyzed": " 被麻痹 {{sourceClause}}！\n无法行动！",
    "fell_asleep": "\n被催眠 {{sourceClause}}！",
    "was_frozen_solid": "\n被冻结 {{sourceClause}}！",
    "was_burned": "\n被燃烧{{sourceClause}}！"
} as const;
import { ability } from "./ability";
import { battle } from "./battle";
import { commandUiHandler } from "./command-ui-handler";
import { fightUiHandler } from "./fight-ui-handler";
import { growth } from "./growth";
import { menu } from "./menu";
import { menuUiHandler } from "./menu-ui-handler";
import { modifierType } from "./modifier-type";
import { move } from "./move";
import { nature } from "./nature";
import { pokeball } from "./pokeball";
import { pokemon } from "./pokemon";
import { pokemonStat } from "./pokemon-stat";
import { starterSelectUiHandler } from "./starter-select-ui-handler";
import { tutorial } from "./tutorial";
import { weather } from "./weather";
import { berry } from "./berry";
import{modifierSelectUiHandler} from "./modifier-select-ui-handler"

export const ptBrConfig = {
    ability: ability,
    battle: battle,
    commandUiHandler: commandUiHandler,
    fightUiHandler: fightUiHandler,
    menuUiHandler: menuUiHandler,
    menu: menu,
    move: move,
    pokeball: pokeball,
    pokemonStat: pokemonStat,
    pokemon: pokemon,
    starterSelectUiHandler: starterSelectUiHandler,
    tutorial: tutorial,
    nature: nature,
    growth: growth,
    weather: weather,
    modifierType: modifierType,
    berry: berry,
    modifierSelectUiHandler:modifierSelectUiHandler,
}
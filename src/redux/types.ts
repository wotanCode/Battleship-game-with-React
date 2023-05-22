export type AppPhases = 'dashboard_menu_app' | 'setting_game' | 'placing_ships' | 'playingVsPc' | 'end_game';

export type ShipStatusT = 'hidden' | 'selected' | 'shipPlayer1' | 'shipPlayer2' | 'destroyed';

type PlayersT = 'player-1' | 'player-2';

export type GameStateT = {
  appPhase: AppPhases;
  winner?: PlayersT
  turn?: PlayersT,
  // Dimensiones del tablero con el que se va a crear
  boardDimension: number,
  // Status del tablero de los jugadores
  playerOneBoard?: { boardStatus: ShipStatusT[][] };
  playerTwoBoard?: { boardStatus: ShipStatusT[][] };
  // Esto solo se usa al momento de colocar las naves
  playerOneplacingShips: number;
  playerTwoplacingShips: number;
  // Esto se utiliza para saber cuantas naves quedan vivas
  playerOneShipLeft: number;
  playerTwoShipLeft: number;
}

// fase dashboard de la app
export type StartAppT = {
  type: 'START_APP';
}

// Vamos a la fase de configuracion
export type SettingGameT = {
  type: 'SET_SETTING_GAME';
}

// transformar esto para que solo sean numerros
export type SettingUpdateNumShipsT = {
  type: "SETTING_UPDATE_NUM_SHIPS",
  payload: number,
}

// Actualiza las dimensiones de las variables que maneja el tablero
export type SettingUpdateBoardDimenssionT = {
  type: "SETTING_UPDATE_BOARD_DIMENSION",
  payload: number,
}

// Creamos el tablero
export type SettingCreateBoardT = {
  type: "SETTING_CREATE_BOARD",
  payload: {
    boardStatus: ShipStatusT[][],
  },
};

// Colocar piezas en el tablero
export type PhasePlaceShipActionT = {
  type: 'PHASE_PLACE_SHIP';
}

// Colocar piezas en el tablero
export type PlaceShipActionT = {
  type: 'PLACE_SHIP';
  payload: {
    position: string;
  }
}

export type PhasePlayingVsPcTurnT = {
  type: 'PHASE_START_GAMING_VS_PC';
}



export type InitialGamepActionT = {
  type: 'INITIAL_STATE';
}

export type StartGameActionT = {
  type: 'START_GAME';
}

export type EndGameActionT = {
  type: 'END_GAME';
  payload: {
    winner: 'Jugador' | 'Computador';
  }
}

export type GameActionsT =
  StartAppT |
  SettingGameT |
  SettingUpdateNumShipsT |
  SettingUpdateBoardDimenssionT |
  SettingCreateBoardT |
  PhasePlaceShipActionT |
  PlaceShipActionT |
  PhasePlayingVsPcTurnT |


  InitialGamepActionT |
  StartGameActionT |

  EndGameActionT
export const translation = {
  'en': {
    'chooseGiveUpAssassinated': 'choose an influence to give up (assassinated)',
    'waitingGiveUpAssassinated': (name) => `waiting for ${name} to give up an influence (assassinated)`,
    'chooseNewHand': (numToChoose) => `choose your new hand (${numToChoose}).\n the top two cards from the deck are:`,
    'waitingExchange': (name) => `waiting for ${name} to complete the exchange`,
    'getChallenged': (name, character) => `${name} challenges!\n Reveal ${character} or give up a card`,
    'challengeHappend': (name, challenged, isChallenger) => `${name} challenge${isChallenger ? "" : "s"}!\n Waiting for ${challenged}'s response`,
    'you': 'you',
    'chooseGiveUpChallengeLost': 'choose an influence to give up (challenge lost)',
    'yourNewCard': (name) => `your new card is ${name}`,
  },
  'pt': {
    'chooseGiveUpAssassinated': 'escolha uma influência para descartar (assassinato)',
    'waitingGiveUpAssassinated': (name) => `esperando ${name} descartar influência (assassinato)`,
    'chooseNewHand': (numToChoose) => `escolha sua nova mão (${numToChoose}).\n As cartas do deck são:`,
    'waitingExchange': (name) => `esperando ${name} completar a troca`,
    'getChallenged': (name, character) => `${name} te desafiou!\n Revele ${character} ou descarte uma carta`,  // TODO: VER GENERO
    'challengeHappend': (name, challenged, isChallenger) => `${name} desafiou!\n Esperando a resposta de ${challenged}`,
    'you': 'você',
    'chooseGiveUpChallengeLost': 'escolha uma influência para descartar (desafio perdido)',
    'yourNewCard': (name) => `your new card is ${name}`,
  },
};

export const lang = 'pt';
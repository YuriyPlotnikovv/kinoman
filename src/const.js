const FILM_COUNT = 37;
const FILM_COUNT_PER_STEP = 5;
const EMOTIONS = ['smile', 'sleeping', 'puke', 'angry'];
const FILTER_TYPE_ALL_NAME = 'All movies';
const FilterType = {
  ALL: 'all',
  WATCHLIST: 'whatchlist',
  HISTORY: 'history',
  FAVORITES: 'favorites',
};
const UserStatusValue = {
  NOVICE: 0,
  FAN: 10,
  MOVIE_BUFF: 20,
};
const UserStatusTitle = {
  NOVICE: 'Novice',
  FAN: 'Fan',
  MOVIE_BUFF: 'Movie Buff',
};

export {
  FILM_COUNT,
  FILM_COUNT_PER_STEP,
  EMOTIONS,
  FILTER_TYPE_ALL_NAME,
  FilterType,
  UserStatusValue,
  UserStatusTitle,
};

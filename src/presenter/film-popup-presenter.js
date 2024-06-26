import { render, replace, remove } from "../framework/render";
import DetailPopupView from "../view/detail-popup";

export default class FilmPopupPresenter {
  #container = null;
  #film = null;
  #comments = null;
  #filmPopupComponent = null;
  #closePopupClickHandler = null;
  #filmChangeHandler = null;
  #viewData = {
    emotion: null,
    comment: null,
    scrollPosition: 0,
  };

  constructor(container, closePopupClickHandler, filmChangeHandler) {
    this.#container = container;
    this.#closePopupClickHandler = closePopupClickHandler;
    this.#filmChangeHandler = filmChangeHandler;
  }

  init = (film, comments) => {
    this.#film = film;
    this.#comments = comments;
    const prevFilmPopupComponent = this.#filmPopupComponent;
    this.#filmPopupComponent = new DetailPopupView(
      this.#film,
      this.#comments,
      this.#viewData,
      this.#updateViewData
    );

    this.#filmPopupComponent.setCloseClickHandler(this.#closePopupClickHandler);
    this.#filmPopupComponent.setWatchListClickHandler(
      this.#watchListButtonClickHandler
    );
    this.#filmPopupComponent.setAlreadyWatchedClickHandler(
      this.#alreadyWatchedButtonClickHandler
    );
    this.#filmPopupComponent.setFavoriteClickHandler(
      this.#favoriteButtonClickHandler
    );

    if (prevFilmPopupComponent === null) {
      render(this.#filmPopupComponent, this.#container.parentElement);
      return;
    }

    replace(this.#filmPopupComponent, prevFilmPopupComponent);

    this.#filmPopupComponent.setScrollPosition();

    remove(prevFilmPopupComponent);
  };

  #watchListButtonClickHandler = () => {
    this.#filmChangeHandler({
      ...this.#film,
      userDetails: {
        ...this.#film.userDetails,
        watchList: !this.#film.userDetails.watchList,
      },
    });
  };

  #alreadyWatchedButtonClickHandler = () => {
    this.#filmChangeHandler({
      ...this.#film,
      userDetails: {
        ...this.#film.userDetails,
        alreadyWatched: !this.#film.userDetails.alreadyWatched,
      },
    });
  };

  #favoriteButtonClickHandler = () => {
    this.#filmChangeHandler({
      ...this.#film,
      userDetails: {
        ...this.#film.userDetails,
        favorite: !this.#film.userDetails.favorite,
      },
    });
  };

  #updateViewData = (viewData) => {
    this.#viewData = { ...viewData };
  };

  destroy = () => {
    this.#filmPopupComponent.element.remove();
  };
}

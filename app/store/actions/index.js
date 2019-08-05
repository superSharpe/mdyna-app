import ACTION_TYPES from './actionTypes';

export const addCard = card => ({
  type: ACTION_TYPES.CARD.ADD_CARD,
  card,
});
export const saveCard = card => ({
  type: ACTION_TYPES.CARD.SAVE_CARD,
  card,
});
export const completeCard = card => ({
  type: ACTION_TYPES.CARD.COMPLETE_CARD,
  card,
});
export const failCard = card => ({
  type: ACTION_TYPES.CARD.FAIL_CARD,
  card,
});
export const editCard = card => ({
  type: ACTION_TYPES.CARD_EDITOR.EDIT_CARD,
  card,
});
export const snoozeCard = card => ({
  type: ACTION_TYPES.CARD.SNOOZE_CARD,
  card,
});
export const changeTitle = (card, title) => ({
  type: ACTION_TYPES.CARD.CHANGE_TITLE,
  card,
  payload: title,
});
export const removeCard = card => ({
  type: ACTION_TYPES.CARD.REMOVE_CARD,
  card,
});
export const toggleCard = card => ({
  type: ACTION_TYPES.CARD.TOGGLE_CARD,
  card,
});
export const generateCardLink = (keys, index) => ({
  type: ACTION_TYPES.CARD.GENERATE_LINK,
  keys,
  index,
});

export const toggleEditor = () => ({
  type: ACTION_TYPES.CARD_EDITOR.TOGGLE_EDITOR,
});

export const toggleSettings = () => ({
  type: ACTION_TYPES.TOGGLE_SETTINGS,
});

export const changeCardsPerPage = value => ({
  type: ACTION_TYPES.CHANGE_CPP,
  payload: value,
});

export const setVisibilityFilter = filter => ({
  type: ACTION_TYPES.SET_VISIBILITY_FILTER,
  filter,
});

export const changeCardSetting = (prop, value) => ({
  type: ACTION_TYPES.CARD_EDITOR.ON_CHANGE,
  prop,
  value,
});

export const editNote = card => ({
  type: ACTION_TYPES.CARD_EDITOR.EDIT_CARD,
  card,
});

export const toggleWhiteMode = () => ({
  type: ACTION_TYPES.TOGGLE_WHITE_MODE,
});

export const toggleSidebar = () => ({
  type: ACTION_TYPES.TOGGLE_SIDEBAR,
});

export const addLabel = label => ({
  type: ACTION_TYPES.LABEL.ADD_LABEL,
  label,
});

export const removeLabel = label => ({
  type: ACTION_TYPES.LABEL.REMOVE_LABEL,
  label,
});

export const searchCards = value => ({
  type: ACTION_TYPES.FILTERS.SEARCH_CARDS,
  value,
  meta: {
    debounce: {
      time: 500,
    },
  },
});

export const focusCard = card => ({
  type: ACTION_TYPES.FILTERS.FOCUS_CARD,
  card,
});
export const changeSorting = (sorting, order) => ({
  type: ACTION_TYPES.FILTERS.CHANGE_SORTING_STATE,
  sorting,
  order,
});
export const addLabelFilter = value => ({
  type: ACTION_TYPES.FILTERS.ADD_LABEL_FILTER,
  value,
});
export const removeLabelFilter = value => ({
  type: ACTION_TYPES.FILTERS.REMOVE_LABEL_FILTER,
  value,
});
export const toggleCompletedFilter = value => ({
  type: ACTION_TYPES.FILTERS.TOGGLE_COMPLETED_FILTER,
  value,
});
export const changeCwd = cwd => ({
  type: ACTION_TYPES.CHANGE_CWD,
  cwd,
});

import { LOG_LAST_CITY } from '../actions/index';
import uuid from 'uuid';
import moment from 'moment';

const INITIAL_STATE = {
  empty: true,
  historyList: []
};

export default function(state = INITIAL_STATE, action) {
  const now = moment();
  const getDate = now.format('L');
  const getTime = now.format('LTS');

  switch (action.type) {
    case LOG_LAST_CITY: {
      if (state.historyList.length > 8) {
        return {
          empty: false,
          historyList: [
            ...state.historyList.splice(
              state.historyList.length - 8,
              state.historyList.length
            ),
            {
              key: uuid(),
              city: action.city,
              date: getDate,
              timeVisited: getTime
            }
          ]
        };
      } else {
        return {
          empty: false,
          historyList: [
            ...state.historyList,
            {
              key: uuid(),
              city: action.city,
              timeVisited: getTime,
              date: getDate
            }
          ]
        };
      }
    }
    default: {
      return state;
    }
  }
}

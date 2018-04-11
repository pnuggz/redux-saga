import { call, put} from 'redux-saga/effects';
import { loadContestAPI } from './apiCalls';

export function* loadContest() {
  try {
    //Get Contest information
    const contest = yield call(loadContestAPI);

    //Tell the store we are ready to be displayed
    yield put({type: 'FETCH_CONTEST_SUCCESS', payload: contest});

  } catch(error) {
    yield put({type: 'FETCH_FAILED', error: error.message});
  }
}

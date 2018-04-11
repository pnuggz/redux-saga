import { takeLatest } from 'redux-saga';
import { fork, take } from 'redux-saga/effects';
import {loadUser} from './loadUser';
import {loadDashboardSequenced} from './loadDashboardSequenced';
import {loadDashboardNonSequenced} from './loadDashboardNonSequenced';
import {loadDashboardNonSequencedNonBlocking, isolatedForecast, isolatedFlight } from './loadDashboardNonSequencedNonBlocking';
import {loadContest} from './loadContest';

function* rootSaga() {
  /*The saga is waiting for a action called LOAD_DASHBOARD to be activated */
  yield [
    fork(loadUser),
    takeLatest('LOAD_DASHBOARD', loadDashboardSequenced),
    takeLatest('LOAD_DASHBOARD_NON_SEQUENCED', loadDashboardNonSequenced),
    takeLatest('LOAD_DASHBOARD_NON_SEQUENCED_NON_BLOCKING', loadDashboardNonSequencedNonBlocking),
    takeLatest('LOAD_CONTEST', loadContest),
    fork(isolatedForecast),
    fork(isolatedFlight)
  ];
}

export default rootSaga;

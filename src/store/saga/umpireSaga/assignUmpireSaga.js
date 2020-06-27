import { put, call } from '../../../../node_modules/redux-saga/effects'
import ApiConstants from "../../../themes/apiConstants";
import LiveScoreAxiosApi from "../../http/liveScoreHttp/liveScoreAxiosApi";
import { message } from "antd";

function* failSaga(result) {
    yield put({ type: ApiConstants.API_ASSIGN_UMPIRE_FAIL });
    setTimeout(() => {
        message.error(result.message)
    }, 800);
}

function* errorSaga(error) {
    yield put({
        type: ApiConstants.API_ASSIGN_UMPIRE_ERROR,
        error: error,
        status: error.status
    });
    message.error("Something went wrong.")
}

/////get the umpire assign list
export function* getAssignUmpireListSaga(action) {
    try {
        const result = yield call(LiveScoreAxiosApi.getAssignUmpiresList, action.competitionId, action.body)
        if (result.status === 1) {
            yield put({
                type: ApiConstants.API_GET_ASSIGN_UMPIRE_LIST_SUCCESS,
                result: result.result.data,
                status: result.status
            })
        } else {
            yield call(failSaga, result)
        }
    } catch (error) {
        yield call(errorSaga, error);
    }
}


//////////assign umpire to a match
export function* assignUmpireSaga(action) {
    try {
        const result = yield call(LiveScoreAxiosApi.assignUmpire, action.payload)
        if (result.status === 1) {
            yield put({
                type: ApiConstants.API_ASSIGN_UMPIRE_FROM_LIST_SUCCESS,
                result: result.result.data,
                status: result.status,
                index: action.index,
                umpireKey: action.umpireKey,
            })
        } else {
            yield call(failSaga, result)
        }
    } catch (error) {
        yield call(errorSaga, error);
    }
}

/////unassign umpire from the match(delete)
export function* unassignUmpireSaga(action) {
    try {
        const result = yield call(LiveScoreAxiosApi.unassignUmpire, action.rosterId)
        if (result.status === 1) {
            yield put({
                type: ApiConstants.API_UNASSIGN_UMPIRE_FROM_LIST_SUCCESS,
                result: result.result.data,
                status: result.status,
                index: action.index,
                umpireKey: action.umpireKey,
            })
        } else {
            yield call(failSaga, result)
        }
    } catch (error) {
        yield call(errorSaga, error);
    }
}
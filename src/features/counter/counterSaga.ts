import { delay, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { incrementSaga, incrementSagaSuccess } from "./counterSlice";
// export function log(action: PayloadAction){
//     console.log('Log', action);
// }
function* handleIncrementSaga(action: PayloadAction<number>){
    console.log('Waiting 2s');
    //Wait 2s
    yield delay(2000);
    console.log('Waiting action dispatch');
    yield put(incrementSagaSuccess(action.payload));
}
export default function* counterSaga(){
    console.log('Counter Saga');
    yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
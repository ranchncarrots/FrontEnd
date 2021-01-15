import { MENU_HIDE, MENU_BEFORE_HIDE, CO_CHANGE_VIDEO, SMTAB_GENERAL } from '../Utils/constants.util';
export default {
    *menu_open({ payload: { type, option = 'a', tab } }, { call, put, select, take }) {
        // searchControl.closeSearch(); NOT IMPLEMENTED
        const { watch } = yield select();
        if (option === 'b' && watch.menu === type) {
            yield put.resolve({ type: 'menu_close' })
        }
        yield put({ type: 'setMenu', payload: type })
        // Set tab, NOT IMPLEMENTED
    },
    *menu_close({ payload: { timeout = 200 } = {} }, { call, put, select, take }) {
        const { watch } = yield select();
        if(watch.menu == MENU_HIDE || !watch.menu) {
            return;
        }
        yield put.resolve({ type: 'setMenu', payload: MENU_BEFORE_HIDE});
        setTimeout(() => {
            put.resolve({ type: 'setMenu', payload: MENU_HIDE })
        }, timeout);
    },
}
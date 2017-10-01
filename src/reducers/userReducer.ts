import * as Immutable from "immutable";
import { AnyAction } from "redux";
import UserActionTypes from "../constants/UserActionTypes";

export default function reducer(
    state = Immutable.Map({
        allIds: Immutable.List(),
        byId: Immutable.Map(),
    }),
    action: AnyAction,
) {
    switch (action.type) {
        case UserActionTypes.ADD_USER: {
            return state
                .update("allIds", (allIds: Immutable.List<string>) => allIds.push(action.user.get("id")))
                .setIn(["byId", action.user.get("id")], action.user);
        }

        default: {
            return state;
        }
    }
}

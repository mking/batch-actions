import * as Immutable from "immutable";
import { Dispatch } from "redux";
import { batchActions } from "redux-batched-actions";
import UserActionTypes from "../constants/UserActionTypes";

export function addUser({
    user,
}: {
    user: Immutable.Map<string, any>,
}) {
    return {
        type: UserActionTypes.ADD_USER,
        user,
    };
}

export function populateUsers() {
    return (dispatch: Dispatch<any>) => {
        dispatch(
            batchActions(
                Immutable.Range(0, 10)
                    .map((i) => {
                        return addUser({
                            user: Immutable.Map({
                                id: `User ${i}`,
                                name: `User ${i}`,
                                email: `user+${i}@example.com`,
                            }),
                        });
                    })
                    .toArray(),
            ),
        );
    };
}

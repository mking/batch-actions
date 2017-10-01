import * as Immutable from "immutable";
import { createSelector } from "reselect";

export const userStateSelector = (state: any) => state.user;

export const usersSelector = createSelector(
    userStateSelector,
    (userState) => userState.get("allIds")
        .map((id: string) => userState.getIn(["byId", id])),
);

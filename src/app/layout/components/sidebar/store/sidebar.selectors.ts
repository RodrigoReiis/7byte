import { AppState } from "../../../../../utils/state/app/app.reducers";
import { createSelector } from "@ngrx/store";
import { SidebarState } from "./sidebar.reducers";

export const sidebarSelector = (state: AppState) => state.sidebar;

export const listSidebarSelector = createSelector(
    sidebarSelector,
    (state: SidebarState) => state.listSidebar,
);
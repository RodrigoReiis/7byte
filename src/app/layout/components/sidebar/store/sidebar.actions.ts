import { Action } from '@ngrx/store';
import { SidebarLink } from './../../../../../utils/models/SidebarLink.model'

export enum SidebarActionsEnum {
    LIST_SIDEBAR = '[Sidebar] ListSidebar',
    FETCH_SIDEBAR = '[Sidebar] FetchSidebar',
}

export class ListSidebar implements Action {
    readonly type = SidebarActionsEnum.LIST_SIDEBAR
}

export class FetchSidebar implements Action {
    readonly type = SidebarActionsEnum.FETCH_SIDEBAR
    constructor(public payload: SidebarLink[]) {}
}

export type SidebarActions = ListSidebar | FetchSidebar;
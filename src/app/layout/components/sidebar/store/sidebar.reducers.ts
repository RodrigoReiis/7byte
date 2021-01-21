import { SidebarLink } from './../../../../../utils/models/SidebarLink.model';
import { SidebarActions, SidebarActionsEnum } from './sidebar.actions';


export interface SidebarState {
    listSidebar: SidebarLink[];
}

export const initialSidebarState: SidebarState = {
    listSidebar: [],
}

export function sidebarReducer(state = initialSidebarState, action: SidebarActions): SidebarState {
    switch(action.type) {
        case (SidebarActionsEnum.FETCH_SIDEBAR): {    
            return {
                listSidebar: action.payload,
            }
        }
        
        default:
            return state;
    }
}
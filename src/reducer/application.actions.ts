import { ReduxAction } from 'types/redux';
import { buildActions } from 'utils/redux';

enum _ACTIONS {
	TOGGLE_SIDEBAR,
}

export const ACTIONS = buildActions(_ACTIONS, 'HOME');

export function TOGGLE_SIDEBAR(payload?: boolean): ReduxAction<_ACTIONS> {
	return { type: ACTIONS.TOGGLE_SIDEBAR, payload };
}

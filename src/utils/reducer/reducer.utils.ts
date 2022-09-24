import { AnyAction } from 'redux'

// Type guard
type Matchable<AC extends () => AnyAction> = AC & {
	type: ReturnType<AC>['type']
	match(action: AnyAction): action is ReturnType<AC>
}

export function withMatcher<AC extends () => AnyAction & { type: string }>(
	actionCreation: AC,
): Matchable<AC>

export function withMatcher<
	AC extends (...any: any[]) => AnyAction & { type: string },
>(actionCreation: AC): Matchable<AC>

export function withMatcher(actionCreator: Function) {
	const type = actionCreator().type
	return Object.assign(actionCreator, {
		type,
		match(action: AnyAction) {
			return action.type === type
		},
	})
}

// Action type
export type ActionWithPayload<T, P> = {
	type: T
	payload: P
}

export type Action<T> = {
	type: T
}

export function createAction<T extends string, P>(
	type: T,
	payload: P,
): ActionWithPayload<T, P>

export function createAction<T extends string>(
	type: T,
	payload: void,
): Action<T>

export function createAction<T extends string, P>(type: T, payload: P) {
	return { type, payload }
}

export const CANVAS_ITEM = 'CANVAS_ITEM';

export function fetchCanvas(item) {
	return {
		type: CANVAS_ITEM,
		payload: item
	};
}

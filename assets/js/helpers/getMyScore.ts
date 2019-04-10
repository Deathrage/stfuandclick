import { sendClick } from './sendClick';

/**
 * Sends empty click to recieve my score
 * @returns void
 */
export const GetMyScore = () => {
	return sendClick(true);
};

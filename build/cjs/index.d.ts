/**
 * @type interface
 */
export interface ISwipeOptions {
    callback?: () => void;
    landscapeOnly?: boolean;
    targetElement?: HTMLElement;
}
/**
 * @param HTMLElement targetElement
 * @param boolean landscapeOnly
 * @return Promise<void>
 */
export declare function waitForSwipe(options: ISwipeOptions): Promise<void>;
/**
 * @param ISwipeOptions options
 * @return void
 */
export declare function waitForSwipeOnLandscape(options: ISwipeOptions): void;

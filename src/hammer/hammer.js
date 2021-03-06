import ifUndefined from './utils/if-undefined';
import { TOUCH_ACTION_COMPUTE } from './touchactionjs/touchaction-Consts';
import { DIRECTION_HORIZONTAL } from './inputjs/input-consts';
import RotateRecognizer from './recognizers/rotate';
import PinchRecognizer from './recognizers/pinch';
import SwipeRecognizer from './recognizers/swipe';
import PanRecognizer from './recognizers/pan';
import TapRecognizer from './recognizers/tap';
import PressRecognizer from './recognizers/press';
import  Manager  from './manager';

/**
 * Simple way to create a manager with a default set of recognizers.
 * @private
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
export default class Hammer {
  constructor(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
  }
}

/**
 * @private
 * @const {string}
 */
Hammer.VERSION = '{{PKG_VERSION}}';

/**
 * default settings
 * @private
 * @namespace
 */
Hammer.defaults = {
  /**
   * set if DOM events are being triggered.
   * But this is slower and unused by simple implementations, so disabled by default.
   * @private
   * @type {Boolean}
   * @default false
   */
  domEvents: false,

  /**
   * The value for the touchAction property/fallback.
   * When set to `compute` it will magically set the correct value based on the added recognizers.
   * @private
   * @type {String}
   * @default compute
   */
  touchAction: TOUCH_ACTION_COMPUTE,

  /**
   * @private
   * @type {Boolean}
   * @default true
   */
  enable: true,

  /**
   * EXPERIMENTAL FEATURE -- can be removed/changed
   * Change the parent input target element.
   * If Null, then it is being set the to main element.
   * @private
   * @type {Null|EventTarget}
   * @default null
   */
  inputTarget: null,

  /**
   * force an input class
   * @type {Null|Function}
   * @private
   * @default null
   */
  inputClass: null,

  /**
   * Default recognizer setup when calling `Hammer()`
   * When creating a new Manager these will be skipped.
   * @private
   * @type {Array}
   */
  preset: [
      // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
      [RotateRecognizer, { enable: false }],
      [PinchRecognizer, { enable: false }, ['rotate']],
      [SwipeRecognizer, { direction: DIRECTION_HORIZONTAL }],
      [PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ['swipe']],
      [TapRecognizer],
      [TapRecognizer, { event: 'doubletap', taps: 2 }, ['tap']],
      [PressRecognizer]
  ],

  /**
   * Some CSS properties can be used to improve the working of Hammer.
   * Add them to this method and they will be set when creating a new Manager.
   * @private
   * @namespace
   */
  cssProps: {
    /**
     * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
     * @private
     * @type {String}
     * @default 'none'
     */
    userSelect: 'none',

    /**
     * Disable the Windows Phone grippers when pressing an element.
     * @private
     * @type {String}
     * @default 'none'
     */
    touchSelect: 'none',

    /**
     * Disables the default callout shown when you touch and hold a touch target.
     * On iOS, when you touch and hold a touch target such as a link, Safari displays
     * a callout containing information about the link. This property allows you to disable that callout.
     * @private
     * @type {String}
     * @default 'none'
     */
    touchCallout: 'none',

    /**
     * Specifies whether zooming is enabled. Used by IE10>
     * @private
     * @type {String}
     * @default 'none'
     */
    contentZooming: 'none',

    /**
     * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
     * @private
     * @type {String}
     * @default 'none'
     */
    userDrag: 'none',

    /**
     * Overrides the highlight color shown when the user taps a link or a JavaScript
     * clickable element in iOS. This property obeys the alpha value, if specified.
     * @private
     * @type {String}
     * @default 'rgba(0,0,0,0)'
     */
    tapHighlightColor: 'rgba(0,0,0,0)'
  }
};

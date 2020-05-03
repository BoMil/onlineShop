
import { style, animate, animation } from '@angular/animations';

/**
 * Reusable fade-in animation
 * @param time Animation duration
 */
export const fadeIn = animation([
        style({ opacity: 0 }), // start state
        animate('{{time}}', style({ opacity: 1 }))
    ]);

/**
 * Reusable fade-out animation
 * @param time Animation duration
 */
export const fadeOut = animation([
        animate('{{time}}', style({ opacity: 0 }))
    ]);


/**
 * Reusable scale-in animation
 * @param time Animation duration
 */
export const scaleIn = animation([
    style({ opacity: 0, transform: 'scale(0.5)' }), // start state
    animate(
      '{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)',
      style({ opacity: 1, transform: 'scale(1)' })
    )
  ]);

/**
 * Reusable scale-out animation
 * @param time Animation duration
 */
export const scaleOut = animation([
    animate(
      '{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)',
      style({ opacity: 0, transform: 'scale(0.5)' })
    )
  ]);

import { shapePaths } from "../../styles/generated/shapes.js";

/**
 * One of Material 3 Expressive's shapes (Compose MaterialShapes), drawn from path data computed at
 * build time (scripts/gen-shapes.mjs). Decorative: hidden from assistive technology; size and
 * colour (currentColor) come from CSS.
 */
export function Shape({ name, className }) {
  return (
    <svg className={className} viewBox="0 0 1 1" aria-hidden="true" focusable="false">
      <path d={shapePaths[name]} fill="currentColor" />
    </svg>
  );
}

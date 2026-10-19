import { Icon, IconToggleButton } from "@kyralabs/m3e-react";
import { useEffect, useId, useRef, useState } from "react";
import { THEME } from "../../constants/theme";
import { useTheme } from "../../hooks/useTheme";

/**
 * Loads the tooltip element on the anchor's first hover, focus or touch (see lazy/tooltip.js);
 * true once it is defined. If the pointer or focus is still on the anchor then, the tooltip
 * shows straight away.
 */
function useLazyTooltip(anchorRef, tooltipRef) {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const anchor = anchorRef.current;
    if (!anchor) return undefined;
    const events = ["pointerenter", "focusin", "touchstart"];
    const load = () => {
      events.forEach((type) => anchor.removeEventListener(type, load));
      import("../../lazy/tooltip.js")
        .then(() => setIsReady(true))
        .catch(() => undefined); // No tooltip if the chunk can't load; the button still works.
    };
    events.forEach((type) => anchor.addEventListener(type, load, { passive: true }));
    return () => events.forEach((type) => anchor.removeEventListener(type, load));
  }, [anchorRef]);
  useEffect(() => {
    const anchor = anchorRef.current;
    if (isReady && anchor?.matches(":hover, :focus-visible")) tooltipRef.current?.show?.();
  }, [isReady, anchorRef, tooltipRef]);
  return isReady;
}

/**
 * M3 icon toggle button: pressed while the dark theme is on. Its hint is an M3 plain tooltip
 * (hover, keyboard focus or a long press; <m3e-tooltip>, loaded on first use) instead of the
 * browser's `title` tooltip.
 */
export function ThemeToggle() {
  const [theme, toggleTheme] = useTheme();
  const isDark = theme === THEME.DARK;
  const buttonId = useId();
  const buttonRef = useRef(null);
  const tooltipRef = useRef(null);
  const hasTooltip = useLazyTooltip(buttonRef, tooltipRef);
  const hint = `Switch to ${isDark ? "Light Theme" : "Dark Theme"}`;

  return (
    <>
      <IconToggleButton
        ref={buttonRef}
        id={buttonId}
        aria-label="Dark theme"
        isSelected={isDark}
        onChange={() => toggleTheme()}
      >
        <Icon name={isDark ? "dark_mode" : "light_mode"} />
      </IconToggleButton>
      {/* The element moves its text into its popover, so a new hint mounts a new element. */}
      {hasTooltip ? (
        <m3e-tooltip ref={tooltipRef} key={hint} anchor={buttonId}>
          {hint}
        </m3e-tooltip>
      ) : null}
    </>
  );
}

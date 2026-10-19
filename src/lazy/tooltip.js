// The M3 plain tooltip (<m3e-tooltip> and its CSS), fetched the first time someone hovers, focuses
// or touches the theme switch, so no route pays for it at load: m3e-react ships as one module, so
// its <TooltipTrigger> would add ~6 KB gzip (and its CSS ~2 KB) to what every route waits for.
import "@kyralabs/m3e-elements/tooltip.js";
import "@kyralabs/m3e-css/tooltip.css";

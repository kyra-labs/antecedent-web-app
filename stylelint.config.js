// Tokens only: no hard-coded colours, sizes, durations or radii in the app's CSS. Same rules as
// kyra-labs/m3exp-web's component CSS; generated theme/icon CSS is exempt.
const LENGTH_AND_TIME_UNITS = [
  'px', 'rem', 'em', 'ex', 'ch', 'cap', 'ic', 'lh', 'rlh', 'pt', 'pc', 'cm', 'mm', 'q', 'in', 's', 'ms',
];
// Media queries can't read custom properties, so window size class breakpoints stay literal.
const MEDIA_SIZE_FEATURES = ['width', 'min-width', 'max-width', 'height', 'min-height', 'max-height'];

/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  plugins: ['./tools/lint/stylelint-plugin-m3e.js'],
  ignoreFiles: [
    '**/node_modules/**',
    'dist/**',
    'src/styles/generated/**',
    // Legacy components no route renders (article/entity pages are not routed yet). They still use
    // the pre-M3 tokens and are converted when they're wired up again.
    'src/components/archive/**',
    'src/components/article/**',
    'src/components/entity/**',
    'src/components/digest/{CategoryFilter,DigestFeed,SourceLink,StoryCard}.module.css',
    'src/components/common/LoadingSpinner.module.css',
  ],
  rules: {
    'import-notation': 'string',
    // Unrelated selectors (e.g. .fact-list span vs .maker-mark > span) trip it; layers order the cascade.
    'no-descending-specificity': null,
    // CSS Modules: camelCase classes. .m3e-* belongs to the library: style components through
    // the app's own classes.
    'selector-class-pattern': [
      '^(?!m3e-)[a-z][a-zA-Z0-9]*$',
      { message: 'Use camelCase CSS Module classes; .m3e-* belongs to the library.' },
    ],
    'custom-property-pattern': [
      '^(m3e-(ref|sys|comp)-[a-z0-9-]+|_[a-z0-9-]+)$',
      { message: 'Site custom properties are private --_… (or a --m3e-comp-… override).' },
    ],
    'keyframes-name-pattern': '^[a-z][a-z0-9-]*$',
    // View Transitions (theme switch wipe); valid CSS, not yet in stylelint's list.
    'selector-pseudo-element-no-unknown': [
      true,
      { ignorePseudoElements: ['view-transition-image-group', 'view-transition-new'] },
    ],
    'color-no-hex': true,
    'color-named': 'never',
    'function-disallowed-list': [
      ['rgb', 'rgba', 'hsl', 'hsla', 'hwb', 'lab', 'lch', 'oklab', 'oklch', 'color', 'cubic-bezier', 'steps', 'linear'],
      { message: 'Colours and easings come from m3e tokens.' },
    ],
    'unit-disallowed-list': [
      LENGTH_AND_TIME_UNITS,
      {
        ignoreMediaFeatureNames: Object.fromEntries(
          LENGTH_AND_TIME_UNITS.map((unit) => [unit, MEDIA_SIZE_FEATURES]),
        ),
        message: 'Sizes and durations come from m3e tokens.',
      },
    ],
    'm3e/no-literal-values': true,
  },
};

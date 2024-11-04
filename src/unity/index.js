// Tree-shaking works, but doesn't convenient.
// import { formatWithCurrency } from '@dicetechnology/dice-unity/lib/services/i18n/currency';
// Tree-shaking doesn't work, but can be resolved by update unity/tsconfig.json, change "module" from "commonjs" to "esnext"
import { formatWithCurrency } from '@dicetechnology/dice-unity';

console.log(formatWithCurrency('30.00', 'USD'));
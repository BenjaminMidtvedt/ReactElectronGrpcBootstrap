// Original file: protos/routes.proto

import type { Dimensions as _router_Dimensions, Dimensions__Output as _router_Dimensions__Output } from '../router/Dimensions';

export interface PredictionField {
  'X'?: (number | string)[];
  'Y'?: (number | string)[];
  'dimensions'?: (_router_Dimensions | null);
}

export interface PredictionField__Output {
  'X': (number)[];
  'Y': (number)[];
  'dimensions': (_router_Dimensions__Output | null);
}

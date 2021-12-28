// Original file: protos/routes.proto

import type { Dimensions as _router_Dimensions, Dimensions__Output as _router_Dimensions__Output } from '../router/Dimensions';

export interface HeatMap {
  'Z'?: (number | string)[];
  'dimensions'?: (_router_Dimensions | null);
}

export interface HeatMap__Output {
  'Z': (number)[];
  'dimensions': (_router_Dimensions__Output | null);
}

// Original file: protos/routes.proto

import type { Dimensions as _router_Dimensions, Dimensions__Output as _router_Dimensions__Output } from '../router/Dimensions';

export interface Frame {
  'data'?: (Buffer | Uint8Array | string);
  'dimensions'?: (_router_Dimensions | null);
}

export interface Frame__Output {
  'data': (Buffer);
  'dimensions': (_router_Dimensions__Output | null);
}

// Original file: protos/routes.proto

import type { FrameID as _router_FrameID, FrameID__Output as _router_FrameID__Output } from '../router/FrameID';

// Original file: protos/routes.proto

export enum _router_EvaluationRequest_CutoffMode {
  QUANTILE = 0,
  CONSTTANT = 1,
  RATIO = 2,
}

export interface EvaluationRequest {
  'frameID'?: (_router_FrameID | null);
  'alpha'?: (number | string);
  'beta'?: (number | string);
  'cutoff'?: (number | string);
  'cutoffMode'?: (_router_EvaluationRequest_CutoffMode | keyof typeof _router_EvaluationRequest_CutoffMode);
  'includeHeatmap'?: (boolean);
  'includePredictionField'?: (boolean);
}

export interface EvaluationRequest__Output {
  'frameID': (_router_FrameID__Output | null);
  'alpha': (number);
  'beta': (number);
  'cutoff': (number);
  'cutoffMode': (keyof typeof _router_EvaluationRequest_CutoffMode);
  'includeHeatmap': (boolean);
  'includePredictionField': (boolean);
}

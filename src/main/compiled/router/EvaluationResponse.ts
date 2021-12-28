// Original file: protos/routes.proto

import type { Detection as _router_Detection, Detection__Output as _router_Detection__Output } from '../router/Detection';
import type { HeatMap as _router_HeatMap, HeatMap__Output as _router_HeatMap__Output } from '../router/HeatMap';
import type { PredictionField as _router_PredictionField, PredictionField__Output as _router_PredictionField__Output } from '../router/PredictionField';

export interface EvaluationResponse {
  'detections'?: (_router_Detection)[];
  'heatmap'?: (_router_HeatMap | null);
  'predictionField'?: (_router_PredictionField | null);
  '_heatmap'?: "heatmap";
  '_predictionField'?: "predictionField";
}

export interface EvaluationResponse__Output {
  'detections': (_router_Detection__Output)[];
  'heatmap'?: (_router_HeatMap__Output | null);
  'predictionField'?: (_router_PredictionField__Output | null);
  '_heatmap': "heatmap";
  '_predictionField': "predictionField";
}

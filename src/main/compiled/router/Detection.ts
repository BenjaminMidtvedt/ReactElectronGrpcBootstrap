// Original file: protos/routes.proto


export interface Detection {
  'time'?: (number);
  'x'?: (number | string);
  'y'?: (number | string);
  'score'?: (number | string);
}

export interface Detection__Output {
  'time': (number);
  'x': (number);
  'y': (number);
  'score': (number);
}

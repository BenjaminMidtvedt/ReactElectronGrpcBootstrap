// Original file: protos/routes.proto


export interface Options {
  'name'?: (string);
  'source'?: (string);
  'addLow'?: (number | string);
  'addHigh'?: (number | string);
  'mulLow'?: (number | string);
  'mulHigh'?: (number | string);
  'noiseMin'?: (number | string);
  'noiseMax'?: (number | string);
  'scaleMin'?: (number | string);
  'scaleMax'?: (number | string);
  'downsample'?: (number);
}

export interface Options__Output {
  'name': (string);
  'source': (string);
  'addLow': (number);
  'addHigh': (number);
  'mulLow': (number);
  'mulHigh': (number);
  'noiseMin': (number);
  'noiseMax': (number);
  'scaleMin': (number);
  'scaleMax': (number);
  'downsample': (number);
}

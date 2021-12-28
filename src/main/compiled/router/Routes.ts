// Original file: protos/routes.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Greeting as _router_Greeting, Greeting__Output as _router_Greeting__Output } from '../router/Greeting';
import type { Language as _router_Language, Language__Output as _router_Language__Output } from '../router/Language';

export interface RoutesClient extends grpc.Client {
  GetGreeting(argument: _router_Language, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_router_Greeting__Output>): grpc.ClientUnaryCall;
  GetGreeting(argument: _router_Language, metadata: grpc.Metadata, callback: grpc.requestCallback<_router_Greeting__Output>): grpc.ClientUnaryCall;
  GetGreeting(argument: _router_Language, options: grpc.CallOptions, callback: grpc.requestCallback<_router_Greeting__Output>): grpc.ClientUnaryCall;
  GetGreeting(argument: _router_Language, callback: grpc.requestCallback<_router_Greeting__Output>): grpc.ClientUnaryCall;
  getGreeting(argument: _router_Language, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_router_Greeting__Output>): grpc.ClientUnaryCall;
  getGreeting(argument: _router_Language, metadata: grpc.Metadata, callback: grpc.requestCallback<_router_Greeting__Output>): grpc.ClientUnaryCall;
  getGreeting(argument: _router_Language, options: grpc.CallOptions, callback: grpc.requestCallback<_router_Greeting__Output>): grpc.ClientUnaryCall;
  getGreeting(argument: _router_Language, callback: grpc.requestCallback<_router_Greeting__Output>): grpc.ClientUnaryCall;
  
}

export interface RoutesHandlers extends grpc.UntypedServiceImplementation {
  GetGreeting: grpc.handleUnaryCall<_router_Language__Output, _router_Greeting>;
  
}

export interface RoutesDefinition extends grpc.ServiceDefinition {
  GetGreeting: MethodDefinition<_router_Language, _router_Greeting, _router_Language__Output, _router_Greeting__Output>
}

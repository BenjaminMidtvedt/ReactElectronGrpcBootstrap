import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { RoutesClient as _router_RoutesClient, RoutesDefinition as _router_RoutesDefinition } from './router/Routes';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  router: {
    Greeting: MessageTypeDefinition
    Language: MessageTypeDefinition
    Routes: SubtypeConstructor<typeof grpc.Client, _router_RoutesClient> & { service: _router_RoutesDefinition }
  }
}


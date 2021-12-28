# Copyright 2015 gRPC authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""The Python implementation of the gRPC route guide server."""

from concurrent import futures
import logging
import grpc
import routes_pb2
import routes_pb2_grpc
import runtime


logging.basicConfig(filename="engine.log", level=logging.DEBUG)
logging.debug("This message should go to the log file")


def get_dimensions(arr):
    return dict(width=arr.shape[1], height=arr.shape[0])


class RoutesServicer(routes_pb2_grpc.RoutesServicer):
    """
    Wrapper of runtime defined in package.

    Should define all methods defined in .proto file
    """

    def __init__(self):
        self.runtime = runtime.Runtime()

    def GetGreeting(self, request: routes_pb2.Language, context) -> routes_pb2.Greeting:
        random_greeting = self.runtime.get_greeting(request.language)
        return routes_pb2.Greeting(greeting=random_greeting)


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    routes_pb2_grpc.add_RoutesServicer_to_server(RoutesServicer(), server)
    server.add_insecure_port("[::]:50051")
    server.start()
    server.wait_for_termination()


if __name__ == "__main__":
    serve()

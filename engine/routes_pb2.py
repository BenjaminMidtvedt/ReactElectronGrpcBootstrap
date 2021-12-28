# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: routes.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='routes.proto',
  package='router',
  syntax='proto3',
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x0croutes.proto\x12\x06router\"\x1c\n\x08Language\x12\x10\n\x08language\x18\x01 \x01(\t\"\x1c\n\x08Greeting\x12\x10\n\x08greeting\x18\x01 \x01(\t2;\n\x06Routes\x12\x31\n\x0bGetGreeting\x12\x10.router.Language\x1a\x10.router.Greetingb\x06proto3'
)




_LANGUAGE = _descriptor.Descriptor(
  name='Language',
  full_name='router.Language',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='language', full_name='router.Language.language', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=24,
  serialized_end=52,
)


_GREETING = _descriptor.Descriptor(
  name='Greeting',
  full_name='router.Greeting',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='greeting', full_name='router.Greeting.greeting', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=54,
  serialized_end=82,
)

DESCRIPTOR.message_types_by_name['Language'] = _LANGUAGE
DESCRIPTOR.message_types_by_name['Greeting'] = _GREETING
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Language = _reflection.GeneratedProtocolMessageType('Language', (_message.Message,), {
  'DESCRIPTOR' : _LANGUAGE,
  '__module__' : 'routes_pb2'
  # @@protoc_insertion_point(class_scope:router.Language)
  })
_sym_db.RegisterMessage(Language)

Greeting = _reflection.GeneratedProtocolMessageType('Greeting', (_message.Message,), {
  'DESCRIPTOR' : _GREETING,
  '__module__' : 'routes_pb2'
  # @@protoc_insertion_point(class_scope:router.Greeting)
  })
_sym_db.RegisterMessage(Greeting)



_ROUTES = _descriptor.ServiceDescriptor(
  name='Routes',
  full_name='router.Routes',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=84,
  serialized_end=143,
  methods=[
  _descriptor.MethodDescriptor(
    name='GetGreeting',
    full_name='router.Routes.GetGreeting',
    index=0,
    containing_service=None,
    input_type=_LANGUAGE,
    output_type=_GREETING,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_ROUTES)

DESCRIPTOR.services_by_name['Routes'] = _ROUTES

# @@protoc_insertion_point(module_scope)
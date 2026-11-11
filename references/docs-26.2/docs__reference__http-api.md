
# HELIO HTTP API

### Early Access
This feature is in early access. If you have a concrete use case or would like to explore it,
reach out to our team
to share it.
The HELIO HTTP API allows you to interact with your HELIO
runtime programmatically. Any technology capable of issuing HTTP requests can
be used to automate HELIO — and with the built-in OpenAPI specification, it
gets even easier. Instead of configuring everything manually in the UI, you
can access and manage data, projects, and users directly via HTTP requests.
This makes it easy to:
- integrate HELIO into existing systems
- automate workflows
- or build custom tooling around your HMI projects

## Base Path
All API routes are served under the base path: `/api/v1`

## OpenAPI Specification

### Breaking Changes Expected
The HELIO HTTP API is still being developed as an early access feature, so expect changes
as we work to improve it based on how it is used in the real world. Our goal
is to build this right: shaped closely by the needs of our customers, to lay a
solid foundation for the years to come.
The interactive documentation for the OpenAPI definition of the HELIO API can
be found at:
`http://localhost:8512/api/v1/docs`
The OpenAPI definition itself can be requested at:
`http://localhost:8512/api/v1/docs/openapi.json`
Use the OpenAPI definition to generate client code and to integrate with tools
like Postman or any OpenAPI-compatible client.

## Authentication
See IDE Authentication for
more details about this topic.

## Related

#### Authentication
IDE Authentication

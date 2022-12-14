/**
 * NOTE: This class is auto generated by the swagger code generator program (3.0.33).
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */
package io.swagger.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.datahubproject.schema_registry.openapi.generated.RegisterSchemaRequest;
import io.datahubproject.schema_registry.openapi.generated.RegisterSchemaResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-12-13T18:00:00.821813Z[Europe/Lisbon]")
@Validated
public interface SubjectsApi {

  Logger log = LoggerFactory.getLogger(SubjectsApi.class);

  default Optional<ObjectMapper> getObjectMapper() {
    return Optional.empty();
  }

  default Optional<HttpServletRequest> getRequest() {
    return Optional.empty();
  }

  default Optional<String> getAcceptHeader() {
    return getRequest().map(r -> r.getHeader("Accept"));
  }

  @Operation(summary = "Deletes a specific version of the schema registered under this subject. This only deletes the version and the schema ID remains intact making it still possible to decode data using the schema ID. This API is recommended to be used only in development environments or under extreme circumstances where-in, its required to delete a previously registered schema for compatibility purposes or re-register previously registered schema.", description = "", tags = {})
  @ApiResponses(value = {
      @ApiResponse(responseCode = "200", description = "", content = @Content(mediaType = "application/vnd.schemaregistry.v1+json", schema = @Schema(implementation = Integer.class))),

      @ApiResponse(responseCode = "404", description = "Error code 40401 -- Subject not found Error code 40402 -- Version not found"),

      @ApiResponse(responseCode = "422", description = "Error code 42202 -- Invalid version"),

      @ApiResponse(responseCode = "500", description = "Error code 50001 -- Error in the backend data store")})
  @RequestMapping(value = "/subjects/{subject}/versions/{version}", produces = {
      "application/vnd.schemaregistry.v1+json", "application/vnd.schemaregistry+json; qs=0.9",
      "application/json; qs=0.5"}, method = RequestMethod.DELETE)
  default ResponseEntity<Integer> deleteSchemaVersion(
      @Parameter(in = ParameterIn.PATH, description = "Name of the subject", required = true, schema = @Schema()) @PathVariable("subject") String subject,
      @Parameter(in = ParameterIn.PATH, description = "Version of the schema to be returned. Valid values for versionId are between [1,2^31-1] or the string \"latest\". \"latest\" returns the last registered schema under the specified subject. Note that there may be a new latest schema that gets registered right after this request is served.", required = true, schema = @Schema()) @PathVariable("version") String version,
      @Parameter(in = ParameterIn.QUERY, description = "Whether to perform a permanent delete", schema = @Schema()) @Valid @RequestParam(value = "permanent", required = false) Boolean permanent) {
    if (getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
      if (getAcceptHeader().get().contains("application/json")) {
        try {
          return new ResponseEntity<>(getObjectMapper().get().readValue("0", Integer.class),
              HttpStatus.NOT_IMPLEMENTED);
        } catch (IOException e) {
          log.error("Couldn't serialize response for content type application/json", e);
          return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
    } else {
      log.warn(
          "ObjectMapper or HttpServletRequest not configured in default SubjectsApi interface so no example is generated");
    }
    return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
  }

  @Operation(summary = "Deletes the specified subject and its associated compatibility level if registered. It is recommended to use this API only when a topic needs to be recycled or in development environment.", description = "", tags = {})
  @ApiResponses(value = {
      @ApiResponse(responseCode = "200", description = "", content = @Content(mediaType = "application/vnd.schemaregistry.v1+json", array = @ArraySchema(schema = @Schema(implementation = Integer.class)))),

      @ApiResponse(responseCode = "404", description = "Error code 40401 -- Subject not found"),

      @ApiResponse(responseCode = "500", description = "Error code 50001 -- Error in the backend datastore")})
  @RequestMapping(value = "/subjects/{subject}", produces = {"application/vnd.schemaregistry.v1+json",
      "application/vnd.schemaregistry+json; qs=0.9", "application/json; qs=0.5"}, method = RequestMethod.DELETE)
  default ResponseEntity<List<Integer>> deleteSubject(
      @Parameter(in = ParameterIn.PATH, description = "Name of the subject", required = true, schema = @Schema()) @PathVariable("subject") String subject,
      @Parameter(in = ParameterIn.QUERY, description = "Whether to perform a permanent delete", schema = @Schema()) @Valid @RequestParam(value = "permanent", required = false) Boolean permanent) {
    if (getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
      if (getAcceptHeader().get().contains("application/json")) {
        try {
          return new ResponseEntity<>(getObjectMapper().get().readValue("[ 0, 0 ]", List.class),
              HttpStatus.NOT_IMPLEMENTED);
        } catch (IOException e) {
          log.error("Couldn't serialize response for content type application/json", e);
          return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
    } else {
      log.warn(
          "ObjectMapper or HttpServletRequest not configured in default SubjectsApi interface so no example is generated");
    }
    return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
  }

  @Operation(summary = "Get the schemas that reference the specified schema.", description = "", tags = {})
  @ApiResponses(value = {
      @ApiResponse(responseCode = "404", description = "Error code 40401 -- Subject not found Error code 40402 -- Version not found"),

      @ApiResponse(responseCode = "422", description = "Error code 42202 -- Invalid version"),

      @ApiResponse(responseCode = "500", description = "Error code 50001 -- Error in the backend data store")})
  @RequestMapping(value = "/subjects/{subject}/versions/{version}/referencedby", method = RequestMethod.GET)
  default ResponseEntity<Void> getReferencedBy(
      @Parameter(in = ParameterIn.PATH, description = "Name of the subject", required = true, schema = @Schema()) @PathVariable("subject") String subject,
      @Parameter(in = ParameterIn.PATH, description = "Version of the schema to be returned. Valid values for versionId are between [1,2^31-1] or the string \"latest\". \"latest\" returns the last registered schema under the specified subject. Note that there may be a new latest schema that gets registered right after this request is served.", required = true, schema = @Schema()) @PathVariable("version") String version) {
    if (getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
    } else {
      log.warn(
          "ObjectMapper or HttpServletRequest not configured in default SubjectsApi interface so no example is generated");
    }
    return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
  }

  @Operation(summary = "Get a specific version of the schema registered under this subject.", description = "", tags = {})
  @ApiResponses(value = {
      @ApiResponse(responseCode = "404", description = "Error code 40401 -- Subject not found Error code 40402 -- Version not found"),

      @ApiResponse(responseCode = "422", description = "Error code 42202 -- Invalid version"),

      @ApiResponse(responseCode = "500", description = "Error code 50001 -- Error in the backend data store")})
  @RequestMapping(value = "/subjects/{subject}/versions/{version}", method = RequestMethod.GET)
  default ResponseEntity<Void> getSchemaByVersion(
      @Parameter(in = ParameterIn.PATH, description = "Name of the subject", required = true, schema = @Schema()) @PathVariable("subject") String subject,
      @Parameter(in = ParameterIn.PATH, description = "Version of the schema to be returned. Valid values for versionId are between [1,2^31-1] or the string \"latest\". \"latest\" returns the last registered schema under the specified subject. Note that there may be a new latest schema that gets registered right after this request is served.", required = true, schema = @Schema()) @PathVariable("version") String version,
      @Parameter(in = ParameterIn.QUERY, description = "Whether to include deleted schema", schema = @Schema()) @Valid @RequestParam(value = "deleted", required = false) Boolean deleted) {
    if (getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
    } else {
      log.warn(
          "ObjectMapper or HttpServletRequest not configured in default SubjectsApi interface so no example is generated");
    }
    return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
  }

  @Operation(summary = "Get the schema for the specified version of this subject. The unescaped schema only is returned.", description = "", tags = {})
  @ApiResponses(value = {
      @ApiResponse(responseCode = "404", description = "Error code 40401 -- Subject not found Error code 40402 -- Version not found"),

      @ApiResponse(responseCode = "422", description = "Error code 42202 -- Invalid version"),

      @ApiResponse(responseCode = "500", description = "Error code 50001 -- Error in the backend data store")})
  @RequestMapping(value = "/subjects/{subject}/versions/{version}/schema", method = RequestMethod.GET)
  default ResponseEntity<Void> getSchemaOnly(
      @Parameter(in = ParameterIn.PATH, description = "Name of the subject", required = true, schema = @Schema()) @PathVariable("subject") String subject,
      @Parameter(in = ParameterIn.PATH, description = "Version of the schema to be returned. Valid values for versionId are between [1,2^31-1] or the string \"latest\". \"latest\" returns the last registered schema under the specified subject. Note that there may be a new latest schema that gets registered right after this request is served.", required = true, schema = @Schema()) @PathVariable("version") String version,
      @Parameter(in = ParameterIn.QUERY, description = "Whether to include deleted schema", schema = @Schema()) @Valid @RequestParam(value = "deleted", required = false) Boolean deleted) {
    if (getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
    } else {
      log.warn(
          "ObjectMapper or HttpServletRequest not configured in default SubjectsApi interface so no example is generated");
    }
    return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
  }

  @Operation(summary = "Get a list of registered subjects.", description = "", tags = {})
  @ApiResponses(value = {
      @ApiResponse(responseCode = "500", description = "Error code 50001 -- Error in the backend datastore")})
  @RequestMapping(value = "/subjects", method = RequestMethod.GET)
  default ResponseEntity<Void> list(
      @Parameter(in = ParameterIn.QUERY, description = "", schema = @Schema(defaultValue = ":*:")) @Valid @RequestParam(value = "subjectPrefix", required = false, defaultValue = ":*:") String subjectPrefix,
      @Parameter(in = ParameterIn.QUERY, description = "", schema = @Schema()) @Valid @RequestParam(value = "deleted", required = false) Boolean deleted) {
    if (getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
    } else {
      log.warn(
          "ObjectMapper or HttpServletRequest not configured in default SubjectsApi interface so no example is generated");
    }
    return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
  }

  @Operation(summary = "Get a list of versions registered under the specified subject.", description = "", tags = {})
  @ApiResponses(value = {@ApiResponse(responseCode = "404", description = "Error code 40401 -- Subject not found"),

      @ApiResponse(responseCode = "500", description = "Error code 50001 -- Error in the backend data store")})
  @RequestMapping(value = "/subjects/{subject}/versions", method = RequestMethod.GET)
  default ResponseEntity<Void> listVersions(
      @Parameter(in = ParameterIn.PATH, description = "Name of the subject", required = true, schema = @Schema()) @PathVariable("subject") String subject,
      @Parameter(in = ParameterIn.QUERY, description = "Whether to include deleted schemas", schema = @Schema()) @Valid @RequestParam(value = "deleted", required = false) Boolean deleted) {
    if (getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
    } else {
      log.warn(
          "ObjectMapper or HttpServletRequest not configured in default SubjectsApi interface so no example is generated");
    }
    return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
  }

  @Operation(summary = "Check if a schema has already been registered under the specified subject. If so, this returns the schema string along with its globally unique identifier, its version under this subject and the subject name.", description = "", tags = {})
  @ApiResponses(value = {
      @ApiResponse(responseCode = "200", description = "", content = @Content(mediaType = "application/vnd.schemaregistry.v1+json", schema = @Schema(implementation = Schema.class))),

      @ApiResponse(responseCode = "404", description = "Error code 40401 -- Subject not found Error code 40403 -- Schema not found"),

      @ApiResponse(responseCode = "500", description = "Internal server error")})
  @RequestMapping(value = "/subjects/{subject}", produces = {"application/vnd.schemaregistry.v1+json",
      "application/vnd.schemaregistry+json; qs=0.9", "application/json; qs=0.5"}, consumes = {
      "application/vnd.schemaregistry.v1+json", "application/vnd.schemaregistry+json", "application/json",
      "application/octet-stream"}, method = RequestMethod.POST)
  default ResponseEntity<Schema> lookUpSchemaUnderSubject(
      @Parameter(in = ParameterIn.PATH, description = "Subject under which the schema will be registered", required = true, schema = @Schema()) @PathVariable("subject") String subject,
      @Parameter(in = ParameterIn.DEFAULT, description = "Schema", required = true, schema = @Schema()) @Valid @RequestBody RegisterSchemaRequest body,
      @Parameter(in = ParameterIn.QUERY, description = "Whether to lookup the normalized schema", schema = @Schema()) @Valid @RequestParam(value = "normalize", required = false) Boolean normalize,
      @Parameter(in = ParameterIn.QUERY, description = "Whether to lookup deleted schemas", schema = @Schema()) @Valid @RequestParam(value = "deleted", required = false) Boolean deleted) {
    if (getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
      if (getAcceptHeader().get().contains("application/json")) {
        try {
          return new ResponseEntity<>(getObjectMapper().get()
              .readValue(
                  "{\n  \"schema\" : \"schema\",\n  \"references\" : [ {\n    \"subject\" : \"subject\",\n    \"name\" : \"name\",\n    \"version\" : 1\n  }, {\n    \"subject\" : \"subject\",\n    \"name\" : \"name\",\n    \"version\" : 1\n  } ],\n  \"subject\" : \"subject\",\n  \"schemaType\" : \"schemaType\",\n  \"id\" : 6,\n  \"version\" : 0\n}",
                  Schema.class), HttpStatus.NOT_IMPLEMENTED);
        } catch (IOException e) {
          log.error("Couldn't serialize response for content type application/json", e);
          return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
    } else {
      log.warn(
          "ObjectMapper or HttpServletRequest not configured in default SubjectsApi interface so no example is generated");
    }
    return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
  }

  @Operation(summary = "Register a new schema under the specified subject. If successfully registered, this returns the unique identifier of this schema in the registry. The returned identifier should be used to retrieve this schema from the schemas resource and is different from the schema's version which is associated with the subject. If the same schema is registered under a different subject, the same identifier will be returned. However, the version of the schema may be different under different subjects. A schema should be compatible with the previously registered schema or schemas (if there are any) as per the configured compatibility level. The configured compatibility level can be obtained by issuing a GET http:get:: /config/(string: subject). If that returns null, then GET http:get:: /config When there are multiple instances of Schema Registry running in the same cluster, the schema registration request will be forwarded to one of the instances designated as the primary. If the primary is not available, the client will get an error code indicating that the forwarding has failed.", description = "", tags = {})
  @ApiResponses(value = {
      @ApiResponse(responseCode = "200", description = "", content = @Content(mediaType = "application/vnd.schemaregistry.v1+json", schema = @Schema(implementation = RegisterSchemaResponse.class))),

      @ApiResponse(responseCode = "409", description = "Incompatible schema"),

      @ApiResponse(responseCode = "422", description = "Error code 42201 -- Invalid schema or schema type"),

      @ApiResponse(responseCode = "500", description = "Error code 50001 -- Error in the backend data store Error code 50002 -- Operation timed out Error code 50003 -- Error while forwarding the request to the primary")})
  @RequestMapping(value = "/subjects/{subject}/versions", produces = {"application/vnd.schemaregistry.v1+json",
      "application/vnd.schemaregistry+json; qs=0.9", "application/json; qs=0.5"}, consumes = {
      "application/vnd.schemaregistry.v1+json", "application/vnd.schemaregistry+json", "application/json",
      "application/octet-stream"}, method = RequestMethod.POST)
  default ResponseEntity<RegisterSchemaResponse> register(
      @Parameter(in = ParameterIn.PATH, description = "Name of the subject", required = true, schema = @Schema()) @PathVariable("subject") String subject,
      @Parameter(in = ParameterIn.DEFAULT, description = "Schema", required = true, schema = @Schema()) @Valid @RequestBody RegisterSchemaRequest body,
      @Parameter(in = ParameterIn.QUERY, description = "Whether to register the normalized schema", schema = @Schema()) @Valid @RequestParam(value = "normalize", required = false) Boolean normalize) {
    if (getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
      if (getAcceptHeader().get().contains("application/json")) {
        try {
          return new ResponseEntity<>(
              getObjectMapper().get().readValue("{\n  \"id\" : 0\n}", RegisterSchemaResponse.class),
              HttpStatus.NOT_IMPLEMENTED);
        } catch (IOException e) {
          log.error("Couldn't serialize response for content type application/json", e);
          return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
    } else {
      log.warn(
          "ObjectMapper or HttpServletRequest not configured in default SubjectsApi interface so no example is generated");
    }
    return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
  }
}


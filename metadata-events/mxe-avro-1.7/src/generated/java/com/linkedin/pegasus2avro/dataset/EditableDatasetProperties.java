/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.dataset;  
@SuppressWarnings("all")
/** EditableDatasetProperties stores editable changes made to dataset properties. This separates changes made from
ingestion pipelines and edits in the UI to avoid accidental overwrites of user-provided data by ingestion pipelines */
@org.apache.avro.specific.AvroGenerated
public class EditableDatasetProperties extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"EditableDatasetProperties\",\"namespace\":\"com.linkedin.pegasus2avro.dataset\",\"doc\":\"EditableDatasetProperties stores editable changes made to dataset properties. This separates changes made from\\ningestion pipelines and edits in the UI to avoid accidental overwrites of user-provided data by ingestion pipelines\",\"fields\":[{\"name\":\"created\",\"type\":{\"type\":\"record\",\"name\":\"AuditStamp\",\"namespace\":\"com.linkedin.pegasus2avro.common\",\"doc\":\"Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage.\",\"fields\":[{\"name\":\"time\",\"type\":\"long\",\"doc\":\"When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent.\"},{\"name\":\"actor\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change.\",\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"impersonator\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor.\",\"default\":null,\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"message\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually.\",\"default\":null}]},\"doc\":\"An AuditStamp corresponding to the creation of this resource/association/sub-resource. A value of 0 for time indicates missing data.\",\"default\":{\"actor\":\"urn:li:corpuser:unknown\",\"impersonator\":null,\"time\":0,\"message\":null}},{\"name\":\"lastModified\",\"type\":\"com.linkedin.pegasus2avro.common.AuditStamp\",\"doc\":\"An AuditStamp corresponding to the last modification of this resource/association/sub-resource. If no modification has happened since creation, lastModified should be the same as created. A value of 0 for time indicates missing data.\",\"default\":{\"actor\":\"urn:li:corpuser:unknown\",\"impersonator\":null,\"time\":0,\"message\":null}},{\"name\":\"deleted\",\"type\":[\"null\",\"com.linkedin.pegasus2avro.common.AuditStamp\"],\"doc\":\"An AuditStamp corresponding to the deletion of this resource/association/sub-resource. Logically, deleted MUST have a later timestamp than creation. It may or may not have the same time as lastModified depending upon the resource/association/sub-resource semantics.\",\"default\":null},{\"name\":\"description\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Documentation of the dataset\",\"default\":null,\"Searchable\":{\"fieldName\":\"editedDescription\",\"fieldType\":\"TEXT\"}}],\"Aspect\":{\"name\":\"editableDatasetProperties\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** An AuditStamp corresponding to the creation of this resource/association/sub-resource. A value of 0 for time indicates missing data. */
  @Deprecated public com.linkedin.pegasus2avro.common.AuditStamp created;
  /** An AuditStamp corresponding to the last modification of this resource/association/sub-resource. If no modification has happened since creation, lastModified should be the same as created. A value of 0 for time indicates missing data. */
  @Deprecated public com.linkedin.pegasus2avro.common.AuditStamp lastModified;
  /** An AuditStamp corresponding to the deletion of this resource/association/sub-resource. Logically, deleted MUST have a later timestamp than creation. It may or may not have the same time as lastModified depending upon the resource/association/sub-resource semantics. */
  @Deprecated public com.linkedin.pegasus2avro.common.AuditStamp deleted;
  /** Documentation of the dataset */
  @Deprecated public java.lang.String description;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public EditableDatasetProperties() {}

  /**
   * All-args constructor.
   */
  public EditableDatasetProperties(com.linkedin.pegasus2avro.common.AuditStamp created, com.linkedin.pegasus2avro.common.AuditStamp lastModified, com.linkedin.pegasus2avro.common.AuditStamp deleted, java.lang.String description) {
    this.created = created;
    this.lastModified = lastModified;
    this.deleted = deleted;
    this.description = description;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return created;
    case 1: return lastModified;
    case 2: return deleted;
    case 3: return description;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: created = (com.linkedin.pegasus2avro.common.AuditStamp)value$; break;
    case 1: lastModified = (com.linkedin.pegasus2avro.common.AuditStamp)value$; break;
    case 2: deleted = (com.linkedin.pegasus2avro.common.AuditStamp)value$; break;
    case 3: description = (java.lang.String)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'created' field.
   * An AuditStamp corresponding to the creation of this resource/association/sub-resource. A value of 0 for time indicates missing data.   */
  public com.linkedin.pegasus2avro.common.AuditStamp getCreated() {
    return created;
  }

  /**
   * Sets the value of the 'created' field.
   * An AuditStamp corresponding to the creation of this resource/association/sub-resource. A value of 0 for time indicates missing data.   * @param value the value to set.
   */
  public void setCreated(com.linkedin.pegasus2avro.common.AuditStamp value) {
    this.created = value;
  }

  /**
   * Gets the value of the 'lastModified' field.
   * An AuditStamp corresponding to the last modification of this resource/association/sub-resource. If no modification has happened since creation, lastModified should be the same as created. A value of 0 for time indicates missing data.   */
  public com.linkedin.pegasus2avro.common.AuditStamp getLastModified() {
    return lastModified;
  }

  /**
   * Sets the value of the 'lastModified' field.
   * An AuditStamp corresponding to the last modification of this resource/association/sub-resource. If no modification has happened since creation, lastModified should be the same as created. A value of 0 for time indicates missing data.   * @param value the value to set.
   */
  public void setLastModified(com.linkedin.pegasus2avro.common.AuditStamp value) {
    this.lastModified = value;
  }

  /**
   * Gets the value of the 'deleted' field.
   * An AuditStamp corresponding to the deletion of this resource/association/sub-resource. Logically, deleted MUST have a later timestamp than creation. It may or may not have the same time as lastModified depending upon the resource/association/sub-resource semantics.   */
  public com.linkedin.pegasus2avro.common.AuditStamp getDeleted() {
    return deleted;
  }

  /**
   * Sets the value of the 'deleted' field.
   * An AuditStamp corresponding to the deletion of this resource/association/sub-resource. Logically, deleted MUST have a later timestamp than creation. It may or may not have the same time as lastModified depending upon the resource/association/sub-resource semantics.   * @param value the value to set.
   */
  public void setDeleted(com.linkedin.pegasus2avro.common.AuditStamp value) {
    this.deleted = value;
  }

  /**
   * Gets the value of the 'description' field.
   * Documentation of the dataset   */
  public java.lang.String getDescription() {
    return description;
  }

  /**
   * Sets the value of the 'description' field.
   * Documentation of the dataset   * @param value the value to set.
   */
  public void setDescription(java.lang.String value) {
    this.description = value;
  }

  /** Creates a new EditableDatasetProperties RecordBuilder */
  public static com.linkedin.pegasus2avro.dataset.EditableDatasetProperties.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.dataset.EditableDatasetProperties.Builder();
  }
  
  /** Creates a new EditableDatasetProperties RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.dataset.EditableDatasetProperties.Builder newBuilder(com.linkedin.pegasus2avro.dataset.EditableDatasetProperties.Builder other) {
    return new com.linkedin.pegasus2avro.dataset.EditableDatasetProperties.Builder(other);
  }
  
  /** Creates a new EditableDatasetProperties RecordBuilder by copying an existing EditableDatasetProperties instance */
  public static com.linkedin.pegasus2avro.dataset.EditableDatasetProperties.Builder newBuilder(com.linkedin.pegasus2avro.dataset.EditableDatasetProperties other) {
    return new com.linkedin.pegasus2avro.dataset.EditableDatasetProperties.Builder(other);
  }
  
  /**
   * RecordBuilder for EditableDatasetProperties instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<EditableDatasetProperties>
    implements org.apache.avro.data.RecordBuilder<EditableDatasetProperties> {

    private com.linkedin.pegasus2avro.common.AuditStamp created;
    private com.linkedin.pegasus2avro.common.AuditStamp lastModified;
    private com.linkedin.pegasus2avro.common.AuditStamp deleted;
    private java.lang.String description;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.dataset.EditableDatasetProperties.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.dataset.EditableDatasetProperties.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.created)) {
        this.created = data().deepCopy(fields()[0].schema(), other.created);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.lastModified)) {
        this.lastModified = data().deepCopy(fields()[1].schema(), other.lastModified);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.deleted)) {
        this.deleted = data().deepCopy(fields()[2].schema(), other.deleted);
        fieldSetFlags()[2] = true;
      }
      if (isValidValue(fields()[3], other.description)) {
        this.description = data().deepCopy(fields()[3].schema(), other.description);
        fieldSetFlags()[3] = true;
      }
    }
    
    /** Creates a Builder by copying an existing EditableDatasetProperties instance */
    private Builder(com.linkedin.pegasus2avro.dataset.EditableDatasetProperties other) {
            super(com.linkedin.pegasus2avro.dataset.EditableDatasetProperties.SCHEMA$);
      if (isValidValue(fields()[0], other.created)) {
        this.created = data().deepCopy(fields()[0].schema(), other.created);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.lastModified)) {
        this.lastModified = data().deepCopy(fields()[1].schema(), other.lastModified);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.deleted)) {
        this.deleted = data().deepCopy(fields()[2].schema(), other.deleted);
        fieldSetFlags()[2] = true;
      }
      if (isValidValue(fields()[3], other.description)) {
        this.description = data().deepCopy(fields()[3].schema(), other.description);
        fieldSetFlags()[3] = true;
      }
    }

    /** Gets the value of the 'created' field */
    public com.linkedin.pegasus2avro.common.AuditStamp getCreated() {
      return created;
    }
    
    /** Sets the value of the 'created' field */
    public com.linkedin.pegasus2avro.dataset.EditableDatasetProperties.Builder setCreated(com.linkedin.pegasus2avro.common.AuditStamp value) {
      validate(fields()[0], value);
      this.created = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'created' field has been set */
    public boolean hasCreated() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'created' field */
    public com.linkedin.pegasus2avro.dataset.EditableDatasetProperties.Builder clearCreated() {
      created = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'lastModified' field */
    public com.linkedin.pegasus2avro.common.AuditStamp getLastModified() {
      return lastModified;
    }
    
    /** Sets the value of the 'lastModified' field */
    public com.linkedin.pegasus2avro.dataset.EditableDatasetProperties.Builder setLastModified(com.linkedin.pegasus2avro.common.AuditStamp value) {
      validate(fields()[1], value);
      this.lastModified = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'lastModified' field has been set */
    public boolean hasLastModified() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'lastModified' field */
    public com.linkedin.pegasus2avro.dataset.EditableDatasetProperties.Builder clearLastModified() {
      lastModified = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    /** Gets the value of the 'deleted' field */
    public com.linkedin.pegasus2avro.common.AuditStamp getDeleted() {
      return deleted;
    }
    
    /** Sets the value of the 'deleted' field */
    public com.linkedin.pegasus2avro.dataset.EditableDatasetProperties.Builder setDeleted(com.linkedin.pegasus2avro.common.AuditStamp value) {
      validate(fields()[2], value);
      this.deleted = value;
      fieldSetFlags()[2] = true;
      return this; 
    }
    
    /** Checks whether the 'deleted' field has been set */
    public boolean hasDeleted() {
      return fieldSetFlags()[2];
    }
    
    /** Clears the value of the 'deleted' field */
    public com.linkedin.pegasus2avro.dataset.EditableDatasetProperties.Builder clearDeleted() {
      deleted = null;
      fieldSetFlags()[2] = false;
      return this;
    }

    /** Gets the value of the 'description' field */
    public java.lang.String getDescription() {
      return description;
    }
    
    /** Sets the value of the 'description' field */
    public com.linkedin.pegasus2avro.dataset.EditableDatasetProperties.Builder setDescription(java.lang.String value) {
      validate(fields()[3], value);
      this.description = value;
      fieldSetFlags()[3] = true;
      return this; 
    }
    
    /** Checks whether the 'description' field has been set */
    public boolean hasDescription() {
      return fieldSetFlags()[3];
    }
    
    /** Clears the value of the 'description' field */
    public com.linkedin.pegasus2avro.dataset.EditableDatasetProperties.Builder clearDescription() {
      description = null;
      fieldSetFlags()[3] = false;
      return this;
    }

    @Override
    public EditableDatasetProperties build() {
      try {
        EditableDatasetProperties record = new EditableDatasetProperties();
        record.created = fieldSetFlags()[0] ? this.created : (com.linkedin.pegasus2avro.common.AuditStamp) defaultValue(fields()[0]);
        record.lastModified = fieldSetFlags()[1] ? this.lastModified : (com.linkedin.pegasus2avro.common.AuditStamp) defaultValue(fields()[1]);
        record.deleted = fieldSetFlags()[2] ? this.deleted : (com.linkedin.pegasus2avro.common.AuditStamp) defaultValue(fields()[2]);
        record.description = fieldSetFlags()[3] ? this.description : (java.lang.String) defaultValue(fields()[3]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}

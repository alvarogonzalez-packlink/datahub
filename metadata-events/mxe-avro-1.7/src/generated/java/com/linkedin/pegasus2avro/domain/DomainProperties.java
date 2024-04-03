/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.domain;  
@SuppressWarnings("all")
/** Information about a Domain */
@org.apache.avro.specific.AvroGenerated
public class DomainProperties extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"DomainProperties\",\"namespace\":\"com.linkedin.pegasus2avro.domain\",\"doc\":\"Information about a Domain\",\"fields\":[{\"name\":\"name\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Display name of the Domain\",\"Searchable\":{\"boostScore\":10.0,\"enableAutocomplete\":true,\"fieldType\":\"TEXT_PARTIAL\"}},{\"name\":\"description\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Description of the Domain\",\"default\":null},{\"name\":\"created\",\"type\":[\"null\",{\"type\":\"record\",\"name\":\"AuditStamp\",\"namespace\":\"com.linkedin.pegasus2avro.common\",\"doc\":\"Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage.\",\"fields\":[{\"name\":\"time\",\"type\":\"long\",\"doc\":\"When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent.\"},{\"name\":\"actor\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change.\",\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"impersonator\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor.\",\"default\":null,\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"message\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually.\",\"default\":null}]}],\"doc\":\"Created Audit stamp\",\"default\":null,\"Searchable\":{\"/time\":{\"fieldName\":\"createdTime\",\"fieldType\":\"DATETIME\"}}}],\"Aspect\":{\"name\":\"domainProperties\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** Display name of the Domain */
  @Deprecated public java.lang.String name;
  /** Description of the Domain */
  @Deprecated public java.lang.String description;
  /** Created Audit stamp */
  @Deprecated public com.linkedin.pegasus2avro.common.AuditStamp created;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public DomainProperties() {}

  /**
   * All-args constructor.
   */
  public DomainProperties(java.lang.String name, java.lang.String description, com.linkedin.pegasus2avro.common.AuditStamp created) {
    this.name = name;
    this.description = description;
    this.created = created;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return name;
    case 1: return description;
    case 2: return created;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: name = (java.lang.String)value$; break;
    case 1: description = (java.lang.String)value$; break;
    case 2: created = (com.linkedin.pegasus2avro.common.AuditStamp)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'name' field.
   * Display name of the Domain   */
  public java.lang.String getName() {
    return name;
  }

  /**
   * Sets the value of the 'name' field.
   * Display name of the Domain   * @param value the value to set.
   */
  public void setName(java.lang.String value) {
    this.name = value;
  }

  /**
   * Gets the value of the 'description' field.
   * Description of the Domain   */
  public java.lang.String getDescription() {
    return description;
  }

  /**
   * Sets the value of the 'description' field.
   * Description of the Domain   * @param value the value to set.
   */
  public void setDescription(java.lang.String value) {
    this.description = value;
  }

  /**
   * Gets the value of the 'created' field.
   * Created Audit stamp   */
  public com.linkedin.pegasus2avro.common.AuditStamp getCreated() {
    return created;
  }

  /**
   * Sets the value of the 'created' field.
   * Created Audit stamp   * @param value the value to set.
   */
  public void setCreated(com.linkedin.pegasus2avro.common.AuditStamp value) {
    this.created = value;
  }

  /** Creates a new DomainProperties RecordBuilder */
  public static com.linkedin.pegasus2avro.domain.DomainProperties.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.domain.DomainProperties.Builder();
  }
  
  /** Creates a new DomainProperties RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.domain.DomainProperties.Builder newBuilder(com.linkedin.pegasus2avro.domain.DomainProperties.Builder other) {
    return new com.linkedin.pegasus2avro.domain.DomainProperties.Builder(other);
  }
  
  /** Creates a new DomainProperties RecordBuilder by copying an existing DomainProperties instance */
  public static com.linkedin.pegasus2avro.domain.DomainProperties.Builder newBuilder(com.linkedin.pegasus2avro.domain.DomainProperties other) {
    return new com.linkedin.pegasus2avro.domain.DomainProperties.Builder(other);
  }
  
  /**
   * RecordBuilder for DomainProperties instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<DomainProperties>
    implements org.apache.avro.data.RecordBuilder<DomainProperties> {

    private java.lang.String name;
    private java.lang.String description;
    private com.linkedin.pegasus2avro.common.AuditStamp created;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.domain.DomainProperties.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.domain.DomainProperties.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.name)) {
        this.name = data().deepCopy(fields()[0].schema(), other.name);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.description)) {
        this.description = data().deepCopy(fields()[1].schema(), other.description);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.created)) {
        this.created = data().deepCopy(fields()[2].schema(), other.created);
        fieldSetFlags()[2] = true;
      }
    }
    
    /** Creates a Builder by copying an existing DomainProperties instance */
    private Builder(com.linkedin.pegasus2avro.domain.DomainProperties other) {
            super(com.linkedin.pegasus2avro.domain.DomainProperties.SCHEMA$);
      if (isValidValue(fields()[0], other.name)) {
        this.name = data().deepCopy(fields()[0].schema(), other.name);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.description)) {
        this.description = data().deepCopy(fields()[1].schema(), other.description);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.created)) {
        this.created = data().deepCopy(fields()[2].schema(), other.created);
        fieldSetFlags()[2] = true;
      }
    }

    /** Gets the value of the 'name' field */
    public java.lang.String getName() {
      return name;
    }
    
    /** Sets the value of the 'name' field */
    public com.linkedin.pegasus2avro.domain.DomainProperties.Builder setName(java.lang.String value) {
      validate(fields()[0], value);
      this.name = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'name' field has been set */
    public boolean hasName() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'name' field */
    public com.linkedin.pegasus2avro.domain.DomainProperties.Builder clearName() {
      name = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'description' field */
    public java.lang.String getDescription() {
      return description;
    }
    
    /** Sets the value of the 'description' field */
    public com.linkedin.pegasus2avro.domain.DomainProperties.Builder setDescription(java.lang.String value) {
      validate(fields()[1], value);
      this.description = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'description' field has been set */
    public boolean hasDescription() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'description' field */
    public com.linkedin.pegasus2avro.domain.DomainProperties.Builder clearDescription() {
      description = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    /** Gets the value of the 'created' field */
    public com.linkedin.pegasus2avro.common.AuditStamp getCreated() {
      return created;
    }
    
    /** Sets the value of the 'created' field */
    public com.linkedin.pegasus2avro.domain.DomainProperties.Builder setCreated(com.linkedin.pegasus2avro.common.AuditStamp value) {
      validate(fields()[2], value);
      this.created = value;
      fieldSetFlags()[2] = true;
      return this; 
    }
    
    /** Checks whether the 'created' field has been set */
    public boolean hasCreated() {
      return fieldSetFlags()[2];
    }
    
    /** Clears the value of the 'created' field */
    public com.linkedin.pegasus2avro.domain.DomainProperties.Builder clearCreated() {
      created = null;
      fieldSetFlags()[2] = false;
      return this;
    }

    @Override
    public DomainProperties build() {
      try {
        DomainProperties record = new DomainProperties();
        record.name = fieldSetFlags()[0] ? this.name : (java.lang.String) defaultValue(fields()[0]);
        record.description = fieldSetFlags()[1] ? this.description : (java.lang.String) defaultValue(fields()[1]);
        record.created = fieldSetFlags()[2] ? this.created : (com.linkedin.pegasus2avro.common.AuditStamp) defaultValue(fields()[2]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}

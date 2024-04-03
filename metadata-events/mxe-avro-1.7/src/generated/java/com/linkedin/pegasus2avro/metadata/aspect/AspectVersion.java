/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.metadata.aspect;  
@SuppressWarnings("all")
/** A tuple of a specific metadata aspect and its version. */
@org.apache.avro.specific.AvroGenerated
public class AspectVersion extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"AspectVersion\",\"namespace\":\"com.linkedin.pegasus2avro.metadata.aspect\",\"doc\":\"A tuple of a specific metadata aspect and its version.\",\"fields\":[{\"name\":\"aspect\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The FQCN of the metadata aspect, e.g. com.linkedin.pegasus2avro.common.Ownership\"},{\"name\":\"version\",\"type\":\"long\",\"doc\":\"The version of the metadata aspect\"}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** The FQCN of the metadata aspect, e.g. com.linkedin.pegasus2avro.common.Ownership */
  @Deprecated public java.lang.String aspect;
  /** The version of the metadata aspect */
  @Deprecated public long version;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public AspectVersion() {}

  /**
   * All-args constructor.
   */
  public AspectVersion(java.lang.String aspect, java.lang.Long version) {
    this.aspect = aspect;
    this.version = version;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return aspect;
    case 1: return version;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: aspect = (java.lang.String)value$; break;
    case 1: version = (java.lang.Long)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'aspect' field.
   * The FQCN of the metadata aspect, e.g. com.linkedin.pegasus2avro.common.Ownership   */
  public java.lang.String getAspect() {
    return aspect;
  }

  /**
   * Sets the value of the 'aspect' field.
   * The FQCN of the metadata aspect, e.g. com.linkedin.pegasus2avro.common.Ownership   * @param value the value to set.
   */
  public void setAspect(java.lang.String value) {
    this.aspect = value;
  }

  /**
   * Gets the value of the 'version' field.
   * The version of the metadata aspect   */
  public java.lang.Long getVersion() {
    return version;
  }

  /**
   * Sets the value of the 'version' field.
   * The version of the metadata aspect   * @param value the value to set.
   */
  public void setVersion(java.lang.Long value) {
    this.version = value;
  }

  /** Creates a new AspectVersion RecordBuilder */
  public static com.linkedin.pegasus2avro.metadata.aspect.AspectVersion.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.metadata.aspect.AspectVersion.Builder();
  }
  
  /** Creates a new AspectVersion RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.metadata.aspect.AspectVersion.Builder newBuilder(com.linkedin.pegasus2avro.metadata.aspect.AspectVersion.Builder other) {
    return new com.linkedin.pegasus2avro.metadata.aspect.AspectVersion.Builder(other);
  }
  
  /** Creates a new AspectVersion RecordBuilder by copying an existing AspectVersion instance */
  public static com.linkedin.pegasus2avro.metadata.aspect.AspectVersion.Builder newBuilder(com.linkedin.pegasus2avro.metadata.aspect.AspectVersion other) {
    return new com.linkedin.pegasus2avro.metadata.aspect.AspectVersion.Builder(other);
  }
  
  /**
   * RecordBuilder for AspectVersion instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<AspectVersion>
    implements org.apache.avro.data.RecordBuilder<AspectVersion> {

    private java.lang.String aspect;
    private long version;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.metadata.aspect.AspectVersion.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.metadata.aspect.AspectVersion.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.aspect)) {
        this.aspect = data().deepCopy(fields()[0].schema(), other.aspect);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.version)) {
        this.version = data().deepCopy(fields()[1].schema(), other.version);
        fieldSetFlags()[1] = true;
      }
    }
    
    /** Creates a Builder by copying an existing AspectVersion instance */
    private Builder(com.linkedin.pegasus2avro.metadata.aspect.AspectVersion other) {
            super(com.linkedin.pegasus2avro.metadata.aspect.AspectVersion.SCHEMA$);
      if (isValidValue(fields()[0], other.aspect)) {
        this.aspect = data().deepCopy(fields()[0].schema(), other.aspect);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.version)) {
        this.version = data().deepCopy(fields()[1].schema(), other.version);
        fieldSetFlags()[1] = true;
      }
    }

    /** Gets the value of the 'aspect' field */
    public java.lang.String getAspect() {
      return aspect;
    }
    
    /** Sets the value of the 'aspect' field */
    public com.linkedin.pegasus2avro.metadata.aspect.AspectVersion.Builder setAspect(java.lang.String value) {
      validate(fields()[0], value);
      this.aspect = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'aspect' field has been set */
    public boolean hasAspect() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'aspect' field */
    public com.linkedin.pegasus2avro.metadata.aspect.AspectVersion.Builder clearAspect() {
      aspect = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'version' field */
    public java.lang.Long getVersion() {
      return version;
    }
    
    /** Sets the value of the 'version' field */
    public com.linkedin.pegasus2avro.metadata.aspect.AspectVersion.Builder setVersion(long value) {
      validate(fields()[1], value);
      this.version = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'version' field has been set */
    public boolean hasVersion() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'version' field */
    public com.linkedin.pegasus2avro.metadata.aspect.AspectVersion.Builder clearVersion() {
      fieldSetFlags()[1] = false;
      return this;
    }

    @Override
    public AspectVersion build() {
      try {
        AspectVersion record = new AspectVersion();
        record.aspect = fieldSetFlags()[0] ? this.aspect : (java.lang.String) defaultValue(fields()[0]);
        record.version = fieldSetFlags()[1] ? this.version : (java.lang.Long) defaultValue(fields()[1]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}

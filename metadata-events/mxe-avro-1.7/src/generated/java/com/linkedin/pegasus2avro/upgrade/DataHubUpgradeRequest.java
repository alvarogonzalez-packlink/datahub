/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.upgrade;  
@SuppressWarnings("all")
/** Information collected when kicking off a DataHubUpgrade */
@org.apache.avro.specific.AvroGenerated
public class DataHubUpgradeRequest extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"DataHubUpgradeRequest\",\"namespace\":\"com.linkedin.pegasus2avro.upgrade\",\"doc\":\"Information collected when kicking off a DataHubUpgrade\",\"fields\":[{\"name\":\"timestampMs\",\"type\":\"long\",\"doc\":\"Timestamp when we started this DataHubUpgrade\"},{\"name\":\"version\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Version of this upgrade\"}],\"Aspect\":{\"name\":\"dataHubUpgradeRequest\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** Timestamp when we started this DataHubUpgrade */
  @Deprecated public long timestampMs;
  /** Version of this upgrade */
  @Deprecated public java.lang.String version;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public DataHubUpgradeRequest() {}

  /**
   * All-args constructor.
   */
  public DataHubUpgradeRequest(java.lang.Long timestampMs, java.lang.String version) {
    this.timestampMs = timestampMs;
    this.version = version;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return timestampMs;
    case 1: return version;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: timestampMs = (java.lang.Long)value$; break;
    case 1: version = (java.lang.String)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'timestampMs' field.
   * Timestamp when we started this DataHubUpgrade   */
  public java.lang.Long getTimestampMs() {
    return timestampMs;
  }

  /**
   * Sets the value of the 'timestampMs' field.
   * Timestamp when we started this DataHubUpgrade   * @param value the value to set.
   */
  public void setTimestampMs(java.lang.Long value) {
    this.timestampMs = value;
  }

  /**
   * Gets the value of the 'version' field.
   * Version of this upgrade   */
  public java.lang.String getVersion() {
    return version;
  }

  /**
   * Sets the value of the 'version' field.
   * Version of this upgrade   * @param value the value to set.
   */
  public void setVersion(java.lang.String value) {
    this.version = value;
  }

  /** Creates a new DataHubUpgradeRequest RecordBuilder */
  public static com.linkedin.pegasus2avro.upgrade.DataHubUpgradeRequest.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.upgrade.DataHubUpgradeRequest.Builder();
  }
  
  /** Creates a new DataHubUpgradeRequest RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.upgrade.DataHubUpgradeRequest.Builder newBuilder(com.linkedin.pegasus2avro.upgrade.DataHubUpgradeRequest.Builder other) {
    return new com.linkedin.pegasus2avro.upgrade.DataHubUpgradeRequest.Builder(other);
  }
  
  /** Creates a new DataHubUpgradeRequest RecordBuilder by copying an existing DataHubUpgradeRequest instance */
  public static com.linkedin.pegasus2avro.upgrade.DataHubUpgradeRequest.Builder newBuilder(com.linkedin.pegasus2avro.upgrade.DataHubUpgradeRequest other) {
    return new com.linkedin.pegasus2avro.upgrade.DataHubUpgradeRequest.Builder(other);
  }
  
  /**
   * RecordBuilder for DataHubUpgradeRequest instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<DataHubUpgradeRequest>
    implements org.apache.avro.data.RecordBuilder<DataHubUpgradeRequest> {

    private long timestampMs;
    private java.lang.String version;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.upgrade.DataHubUpgradeRequest.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.upgrade.DataHubUpgradeRequest.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.timestampMs)) {
        this.timestampMs = data().deepCopy(fields()[0].schema(), other.timestampMs);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.version)) {
        this.version = data().deepCopy(fields()[1].schema(), other.version);
        fieldSetFlags()[1] = true;
      }
    }
    
    /** Creates a Builder by copying an existing DataHubUpgradeRequest instance */
    private Builder(com.linkedin.pegasus2avro.upgrade.DataHubUpgradeRequest other) {
            super(com.linkedin.pegasus2avro.upgrade.DataHubUpgradeRequest.SCHEMA$);
      if (isValidValue(fields()[0], other.timestampMs)) {
        this.timestampMs = data().deepCopy(fields()[0].schema(), other.timestampMs);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.version)) {
        this.version = data().deepCopy(fields()[1].schema(), other.version);
        fieldSetFlags()[1] = true;
      }
    }

    /** Gets the value of the 'timestampMs' field */
    public java.lang.Long getTimestampMs() {
      return timestampMs;
    }
    
    /** Sets the value of the 'timestampMs' field */
    public com.linkedin.pegasus2avro.upgrade.DataHubUpgradeRequest.Builder setTimestampMs(long value) {
      validate(fields()[0], value);
      this.timestampMs = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'timestampMs' field has been set */
    public boolean hasTimestampMs() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'timestampMs' field */
    public com.linkedin.pegasus2avro.upgrade.DataHubUpgradeRequest.Builder clearTimestampMs() {
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'version' field */
    public java.lang.String getVersion() {
      return version;
    }
    
    /** Sets the value of the 'version' field */
    public com.linkedin.pegasus2avro.upgrade.DataHubUpgradeRequest.Builder setVersion(java.lang.String value) {
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
    public com.linkedin.pegasus2avro.upgrade.DataHubUpgradeRequest.Builder clearVersion() {
      version = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    @Override
    public DataHubUpgradeRequest build() {
      try {
        DataHubUpgradeRequest record = new DataHubUpgradeRequest();
        record.timestampMs = fieldSetFlags()[0] ? this.timestampMs : (java.lang.Long) defaultValue(fields()[0]);
        record.version = fieldSetFlags()[1] ? this.version : (java.lang.String) defaultValue(fields()[1]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}

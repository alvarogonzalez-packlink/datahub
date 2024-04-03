/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.metadata.browse;  
@SuppressWarnings("all")
@org.apache.avro.specific.AvroGenerated
public class BrowseResultGroup extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"BrowseResultGroup\",\"namespace\":\"com.linkedin.pegasus2avro.metadata.browse\",\"fields\":[{\"name\":\"name\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Name of the group\"},{\"name\":\"count\",\"type\":\"long\",\"doc\":\"Number of entities that can be reached from this path\"}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** Name of the group */
  @Deprecated public java.lang.String name;
  /** Number of entities that can be reached from this path */
  @Deprecated public long count;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public BrowseResultGroup() {}

  /**
   * All-args constructor.
   */
  public BrowseResultGroup(java.lang.String name, java.lang.Long count) {
    this.name = name;
    this.count = count;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return name;
    case 1: return count;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: name = (java.lang.String)value$; break;
    case 1: count = (java.lang.Long)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'name' field.
   * Name of the group   */
  public java.lang.String getName() {
    return name;
  }

  /**
   * Sets the value of the 'name' field.
   * Name of the group   * @param value the value to set.
   */
  public void setName(java.lang.String value) {
    this.name = value;
  }

  /**
   * Gets the value of the 'count' field.
   * Number of entities that can be reached from this path   */
  public java.lang.Long getCount() {
    return count;
  }

  /**
   * Sets the value of the 'count' field.
   * Number of entities that can be reached from this path   * @param value the value to set.
   */
  public void setCount(java.lang.Long value) {
    this.count = value;
  }

  /** Creates a new BrowseResultGroup RecordBuilder */
  public static com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup.Builder();
  }
  
  /** Creates a new BrowseResultGroup RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup.Builder newBuilder(com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup.Builder other) {
    return new com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup.Builder(other);
  }
  
  /** Creates a new BrowseResultGroup RecordBuilder by copying an existing BrowseResultGroup instance */
  public static com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup.Builder newBuilder(com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup other) {
    return new com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup.Builder(other);
  }
  
  /**
   * RecordBuilder for BrowseResultGroup instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<BrowseResultGroup>
    implements org.apache.avro.data.RecordBuilder<BrowseResultGroup> {

    private java.lang.String name;
    private long count;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.name)) {
        this.name = data().deepCopy(fields()[0].schema(), other.name);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.count)) {
        this.count = data().deepCopy(fields()[1].schema(), other.count);
        fieldSetFlags()[1] = true;
      }
    }
    
    /** Creates a Builder by copying an existing BrowseResultGroup instance */
    private Builder(com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup other) {
            super(com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup.SCHEMA$);
      if (isValidValue(fields()[0], other.name)) {
        this.name = data().deepCopy(fields()[0].schema(), other.name);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.count)) {
        this.count = data().deepCopy(fields()[1].schema(), other.count);
        fieldSetFlags()[1] = true;
      }
    }

    /** Gets the value of the 'name' field */
    public java.lang.String getName() {
      return name;
    }
    
    /** Sets the value of the 'name' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup.Builder setName(java.lang.String value) {
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
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup.Builder clearName() {
      name = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'count' field */
    public java.lang.Long getCount() {
      return count;
    }
    
    /** Sets the value of the 'count' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup.Builder setCount(long value) {
      validate(fields()[1], value);
      this.count = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'count' field has been set */
    public boolean hasCount() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'count' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup.Builder clearCount() {
      fieldSetFlags()[1] = false;
      return this;
    }

    @Override
    public BrowseResultGroup build() {
      try {
        BrowseResultGroup record = new BrowseResultGroup();
        record.name = fieldSetFlags()[0] ? this.name : (java.lang.String) defaultValue(fields()[0]);
        record.count = fieldSetFlags()[1] ? this.count : (java.lang.Long) defaultValue(fields()[1]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}

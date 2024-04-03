/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.entity;  
@SuppressWarnings("all")
/** Placeholder PDL record to store the aspect in the response. By using this place-holder, metadata-service can return
any type of aspect without having to define a single union class */
@org.apache.avro.specific.AvroGenerated
public class Aspect extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"Aspect\",\"namespace\":\"com.linkedin.pegasus2avro.entity\",\"doc\":\"Placeholder PDL record to store the aspect in the response. By using this place-holder, metadata-service can return\\nany type of aspect without having to define a single union class\",\"fields\":[]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /** Creates a new Aspect RecordBuilder */
  public static com.linkedin.pegasus2avro.entity.Aspect.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.entity.Aspect.Builder();
  }
  
  /** Creates a new Aspect RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.entity.Aspect.Builder newBuilder(com.linkedin.pegasus2avro.entity.Aspect.Builder other) {
    return new com.linkedin.pegasus2avro.entity.Aspect.Builder(other);
  }
  
  /** Creates a new Aspect RecordBuilder by copying an existing Aspect instance */
  public static com.linkedin.pegasus2avro.entity.Aspect.Builder newBuilder(com.linkedin.pegasus2avro.entity.Aspect other) {
    return new com.linkedin.pegasus2avro.entity.Aspect.Builder(other);
  }
  
  /**
   * RecordBuilder for Aspect instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<Aspect>
    implements org.apache.avro.data.RecordBuilder<Aspect> {


    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.entity.Aspect.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.entity.Aspect.Builder other) {
      super(other);
    }
    
    /** Creates a Builder by copying an existing Aspect instance */
    private Builder(com.linkedin.pegasus2avro.entity.Aspect other) {
            super(com.linkedin.pegasus2avro.entity.Aspect.SCHEMA$);
    }

    @Override
    public Aspect build() {
      try {
        Aspect record = new Aspect();
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}

/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.dataprocess;  
@SuppressWarnings("all")
/** The inputs and outputs of this data process */
@org.apache.avro.specific.AvroGenerated
public class DataProcessInfo extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"DataProcessInfo\",\"namespace\":\"com.linkedin.pegasus2avro.dataprocess\",\"doc\":\"The inputs and outputs of this data process\",\"fields\":[{\"name\":\"inputs\",\"type\":[\"null\",{\"type\":\"array\",\"items\":{\"type\":\"string\",\"avro.java.string\":\"String\"}}],\"doc\":\"the inputs of the data process\",\"default\":null,\"Relationship\":{\"/*\":{\"entityTypes\":[\"dataset\"],\"isLineage\":true,\"name\":\"Consumes\"}},\"Searchable\":{\"/*\":{\"fieldName\":\"inputs\",\"fieldType\":\"URN\",\"numValuesFieldName\":\"numInputDatasets\",\"queryByDefault\":false}}},{\"name\":\"outputs\",\"type\":[\"null\",{\"type\":\"array\",\"items\":{\"type\":\"string\",\"avro.java.string\":\"String\"}}],\"doc\":\"the outputs of the data process\",\"default\":null,\"Relationship\":{\"/*\":{\"entityTypes\":[\"dataset\"],\"isLineage\":true,\"name\":\"Consumes\"}},\"Searchable\":{\"/*\":{\"fieldName\":\"outputs\",\"fieldType\":\"URN\",\"numValuesFieldName\":\"numOutputDatasets\",\"queryByDefault\":false}}}],\"Aspect\":{\"name\":\"dataProcessInfo\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** the inputs of the data process */
  @Deprecated public java.util.List<java.lang.String> inputs;
  /** the outputs of the data process */
  @Deprecated public java.util.List<java.lang.String> outputs;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public DataProcessInfo() {}

  /**
   * All-args constructor.
   */
  public DataProcessInfo(java.util.List<java.lang.String> inputs, java.util.List<java.lang.String> outputs) {
    this.inputs = inputs;
    this.outputs = outputs;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return inputs;
    case 1: return outputs;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: inputs = (java.util.List<java.lang.String>)value$; break;
    case 1: outputs = (java.util.List<java.lang.String>)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'inputs' field.
   * the inputs of the data process   */
  public java.util.List<java.lang.String> getInputs() {
    return inputs;
  }

  /**
   * Sets the value of the 'inputs' field.
   * the inputs of the data process   * @param value the value to set.
   */
  public void setInputs(java.util.List<java.lang.String> value) {
    this.inputs = value;
  }

  /**
   * Gets the value of the 'outputs' field.
   * the outputs of the data process   */
  public java.util.List<java.lang.String> getOutputs() {
    return outputs;
  }

  /**
   * Sets the value of the 'outputs' field.
   * the outputs of the data process   * @param value the value to set.
   */
  public void setOutputs(java.util.List<java.lang.String> value) {
    this.outputs = value;
  }

  /** Creates a new DataProcessInfo RecordBuilder */
  public static com.linkedin.pegasus2avro.dataprocess.DataProcessInfo.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.dataprocess.DataProcessInfo.Builder();
  }
  
  /** Creates a new DataProcessInfo RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.dataprocess.DataProcessInfo.Builder newBuilder(com.linkedin.pegasus2avro.dataprocess.DataProcessInfo.Builder other) {
    return new com.linkedin.pegasus2avro.dataprocess.DataProcessInfo.Builder(other);
  }
  
  /** Creates a new DataProcessInfo RecordBuilder by copying an existing DataProcessInfo instance */
  public static com.linkedin.pegasus2avro.dataprocess.DataProcessInfo.Builder newBuilder(com.linkedin.pegasus2avro.dataprocess.DataProcessInfo other) {
    return new com.linkedin.pegasus2avro.dataprocess.DataProcessInfo.Builder(other);
  }
  
  /**
   * RecordBuilder for DataProcessInfo instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<DataProcessInfo>
    implements org.apache.avro.data.RecordBuilder<DataProcessInfo> {

    private java.util.List<java.lang.String> inputs;
    private java.util.List<java.lang.String> outputs;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.dataprocess.DataProcessInfo.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.dataprocess.DataProcessInfo.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.inputs)) {
        this.inputs = data().deepCopy(fields()[0].schema(), other.inputs);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.outputs)) {
        this.outputs = data().deepCopy(fields()[1].schema(), other.outputs);
        fieldSetFlags()[1] = true;
      }
    }
    
    /** Creates a Builder by copying an existing DataProcessInfo instance */
    private Builder(com.linkedin.pegasus2avro.dataprocess.DataProcessInfo other) {
            super(com.linkedin.pegasus2avro.dataprocess.DataProcessInfo.SCHEMA$);
      if (isValidValue(fields()[0], other.inputs)) {
        this.inputs = data().deepCopy(fields()[0].schema(), other.inputs);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.outputs)) {
        this.outputs = data().deepCopy(fields()[1].schema(), other.outputs);
        fieldSetFlags()[1] = true;
      }
    }

    /** Gets the value of the 'inputs' field */
    public java.util.List<java.lang.String> getInputs() {
      return inputs;
    }
    
    /** Sets the value of the 'inputs' field */
    public com.linkedin.pegasus2avro.dataprocess.DataProcessInfo.Builder setInputs(java.util.List<java.lang.String> value) {
      validate(fields()[0], value);
      this.inputs = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'inputs' field has been set */
    public boolean hasInputs() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'inputs' field */
    public com.linkedin.pegasus2avro.dataprocess.DataProcessInfo.Builder clearInputs() {
      inputs = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'outputs' field */
    public java.util.List<java.lang.String> getOutputs() {
      return outputs;
    }
    
    /** Sets the value of the 'outputs' field */
    public com.linkedin.pegasus2avro.dataprocess.DataProcessInfo.Builder setOutputs(java.util.List<java.lang.String> value) {
      validate(fields()[1], value);
      this.outputs = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'outputs' field has been set */
    public boolean hasOutputs() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'outputs' field */
    public com.linkedin.pegasus2avro.dataprocess.DataProcessInfo.Builder clearOutputs() {
      outputs = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    @Override
    public DataProcessInfo build() {
      try {
        DataProcessInfo record = new DataProcessInfo();
        record.inputs = fieldSetFlags()[0] ? this.inputs : (java.util.List<java.lang.String>) defaultValue(fields()[0]);
        record.outputs = fieldSetFlags()[1] ? this.outputs : (java.util.List<java.lang.String>) defaultValue(fields()[1]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}

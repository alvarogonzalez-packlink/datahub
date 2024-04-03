/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.query;  
@SuppressWarnings("all")
/** Information about the subjects of a particular Query, i.e. the assets
being queried. */
@org.apache.avro.specific.AvroGenerated
public class QuerySubjects extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"QuerySubjects\",\"namespace\":\"com.linkedin.pegasus2avro.query\",\"doc\":\"Information about the subjects of a particular Query, i.e. the assets\\nbeing queried.\",\"fields\":[{\"name\":\"subjects\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"record\",\"name\":\"QuerySubject\",\"doc\":\"A single subject of a particular query.\\nIn the future, we may evolve this model to include richer details\\nabout the Query Subject in relation to the query.\",\"fields\":[{\"name\":\"entity\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"An entity which is the subject of a query.\",\"Relationship\":{\"entityTypes\":[\"dataset\",\"schemaField\"],\"name\":\"IsAssociatedWith\"},\"Searchable\":{\"fieldName\":\"entities\",\"fieldType\":\"URN\"},\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}}]}},\"doc\":\"One or more subjects of the query.\\n\\nIn single-asset queries (e.g. table select), this will contain the Table reference\\nand optionally schema field references.\\n\\nIn multi-asset queries (e.g. table joins), this may contain multiple Table references\\nand optionally schema field references.\"}],\"Aspect\":{\"name\":\"querySubjects\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** One or more subjects of the query.

In single-asset queries (e.g. table select), this will contain the Table reference
and optionally schema field references.

In multi-asset queries (e.g. table joins), this may contain multiple Table references
and optionally schema field references. */
  @Deprecated public java.util.List<com.linkedin.pegasus2avro.query.QuerySubject> subjects;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public QuerySubjects() {}

  /**
   * All-args constructor.
   */
  public QuerySubjects(java.util.List<com.linkedin.pegasus2avro.query.QuerySubject> subjects) {
    this.subjects = subjects;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return subjects;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: subjects = (java.util.List<com.linkedin.pegasus2avro.query.QuerySubject>)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'subjects' field.
   * One or more subjects of the query.

In single-asset queries (e.g. table select), this will contain the Table reference
and optionally schema field references.

In multi-asset queries (e.g. table joins), this may contain multiple Table references
and optionally schema field references.   */
  public java.util.List<com.linkedin.pegasus2avro.query.QuerySubject> getSubjects() {
    return subjects;
  }

  /**
   * Sets the value of the 'subjects' field.
   * One or more subjects of the query.

In single-asset queries (e.g. table select), this will contain the Table reference
and optionally schema field references.

In multi-asset queries (e.g. table joins), this may contain multiple Table references
and optionally schema field references.   * @param value the value to set.
   */
  public void setSubjects(java.util.List<com.linkedin.pegasus2avro.query.QuerySubject> value) {
    this.subjects = value;
  }

  /** Creates a new QuerySubjects RecordBuilder */
  public static com.linkedin.pegasus2avro.query.QuerySubjects.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.query.QuerySubjects.Builder();
  }
  
  /** Creates a new QuerySubjects RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.query.QuerySubjects.Builder newBuilder(com.linkedin.pegasus2avro.query.QuerySubjects.Builder other) {
    return new com.linkedin.pegasus2avro.query.QuerySubjects.Builder(other);
  }
  
  /** Creates a new QuerySubjects RecordBuilder by copying an existing QuerySubjects instance */
  public static com.linkedin.pegasus2avro.query.QuerySubjects.Builder newBuilder(com.linkedin.pegasus2avro.query.QuerySubjects other) {
    return new com.linkedin.pegasus2avro.query.QuerySubjects.Builder(other);
  }
  
  /**
   * RecordBuilder for QuerySubjects instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<QuerySubjects>
    implements org.apache.avro.data.RecordBuilder<QuerySubjects> {

    private java.util.List<com.linkedin.pegasus2avro.query.QuerySubject> subjects;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.query.QuerySubjects.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.query.QuerySubjects.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.subjects)) {
        this.subjects = data().deepCopy(fields()[0].schema(), other.subjects);
        fieldSetFlags()[0] = true;
      }
    }
    
    /** Creates a Builder by copying an existing QuerySubjects instance */
    private Builder(com.linkedin.pegasus2avro.query.QuerySubjects other) {
            super(com.linkedin.pegasus2avro.query.QuerySubjects.SCHEMA$);
      if (isValidValue(fields()[0], other.subjects)) {
        this.subjects = data().deepCopy(fields()[0].schema(), other.subjects);
        fieldSetFlags()[0] = true;
      }
    }

    /** Gets the value of the 'subjects' field */
    public java.util.List<com.linkedin.pegasus2avro.query.QuerySubject> getSubjects() {
      return subjects;
    }
    
    /** Sets the value of the 'subjects' field */
    public com.linkedin.pegasus2avro.query.QuerySubjects.Builder setSubjects(java.util.List<com.linkedin.pegasus2avro.query.QuerySubject> value) {
      validate(fields()[0], value);
      this.subjects = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'subjects' field has been set */
    public boolean hasSubjects() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'subjects' field */
    public com.linkedin.pegasus2avro.query.QuerySubjects.Builder clearSubjects() {
      subjects = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    @Override
    public QuerySubjects build() {
      try {
        QuerySubjects record = new QuerySubjects();
        record.subjects = fieldSetFlags()[0] ? this.subjects : (java.util.List<com.linkedin.pegasus2avro.query.QuerySubject>) defaultValue(fields()[0]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}

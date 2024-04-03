/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.metadata.search;  
@SuppressWarnings("all")
/** The model for the result of a lineage search query */
@org.apache.avro.specific.AvroGenerated
public class LineageScrollResult extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"LineageScrollResult\",\"namespace\":\"com.linkedin.pegasus2avro.metadata.search\",\"doc\":\"The model for the result of a lineage search query\",\"fields\":[{\"name\":\"entities\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"record\",\"name\":\"LineageSearchEntity\",\"doc\":\"The model for each entity returned by the lineage search query\",\"fields\":[{\"name\":\"entity\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Urn of the entity being returned\",\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"matchedFields\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"record\",\"name\":\"MatchedField\",\"fields\":[{\"name\":\"name\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Matched field name\"},{\"name\":\"value\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Matched field value\"}]}},\"doc\":\"Matched field name and values\",\"default\":[]},{\"name\":\"features\",\"type\":[\"null\",{\"type\":\"map\",\"values\":\"double\",\"avro.java.string\":\"String\"}],\"default\":null},{\"name\":\"score\",\"type\":[\"null\",\"double\"],\"default\":null},{\"name\":\"paths\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"array\",\"items\":{\"type\":\"string\",\"avro.java.string\":\"String\"}}},\"doc\":\"Optional list of entities between the source and destination node.\\nThere can be multiple paths from the source to the destination.\",\"default\":[]},{\"name\":\"path\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"string\",\"avro.java.string\":\"String\"}},\"doc\":\"Optional list of entities between the source and destination node\",\"default\":[],\"deprecated\":true},{\"name\":\"degree\",\"type\":\"int\",\"doc\":\"Degree of relationship (number of hops to get to entity)\",\"default\":1}]}},\"doc\":\"A list of entities returned from the search results\"},{\"name\":\"metadata\",\"type\":{\"type\":\"record\",\"name\":\"SearchResultMetadata\",\"doc\":\"The model for the search result\",\"fields\":[{\"name\":\"aggregations\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"record\",\"name\":\"AggregationMetadata\",\"fields\":[{\"name\":\"name\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The name of the aggregation, e.g, platform, origin\"},{\"name\":\"displayName\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Name of the filter to be displayed in the UI\",\"default\":null},{\"name\":\"aggregations\",\"type\":{\"type\":\"map\",\"values\":\"long\",\"avro.java.string\":\"String\"},\"doc\":\"List of aggregations showing the number of documents falling into each bucket. e.g, for platform aggregation, the bucket can be hive, kafka, etc\"},{\"name\":\"filterValues\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"record\",\"name\":\"FilterValue\",\"fields\":[{\"name\":\"value\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"}},{\"name\":\"entity\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"default\":null,\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"facetCount\",\"type\":\"long\"},{\"name\":\"filtered\",\"type\":[\"null\",\"boolean\"],\"default\":null}]}}}]}},\"doc\":\"A list of search result metadata such as aggregations\",\"default\":[]}]},\"doc\":\"Metadata specific to the browse result of the queried path\"},{\"name\":\"scrollId\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Scroll Identifier for subsequent requests, if not present then no further results to fetch\",\"default\":null},{\"name\":\"pageSize\",\"type\":\"int\",\"doc\":\"Size of each page in the result\"},{\"name\":\"numEntities\",\"type\":\"int\",\"doc\":\"The total number of entities directly under searched path\"}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** A list of entities returned from the search results */
  @Deprecated public java.util.List<com.linkedin.pegasus2avro.metadata.search.LineageSearchEntity> entities;
  /** Metadata specific to the browse result of the queried path */
  @Deprecated public com.linkedin.pegasus2avro.metadata.search.SearchResultMetadata metadata;
  /** Scroll Identifier for subsequent requests, if not present then no further results to fetch */
  @Deprecated public java.lang.String scrollId;
  /** Size of each page in the result */
  @Deprecated public int pageSize;
  /** The total number of entities directly under searched path */
  @Deprecated public int numEntities;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public LineageScrollResult() {}

  /**
   * All-args constructor.
   */
  public LineageScrollResult(java.util.List<com.linkedin.pegasus2avro.metadata.search.LineageSearchEntity> entities, com.linkedin.pegasus2avro.metadata.search.SearchResultMetadata metadata, java.lang.String scrollId, java.lang.Integer pageSize, java.lang.Integer numEntities) {
    this.entities = entities;
    this.metadata = metadata;
    this.scrollId = scrollId;
    this.pageSize = pageSize;
    this.numEntities = numEntities;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return entities;
    case 1: return metadata;
    case 2: return scrollId;
    case 3: return pageSize;
    case 4: return numEntities;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: entities = (java.util.List<com.linkedin.pegasus2avro.metadata.search.LineageSearchEntity>)value$; break;
    case 1: metadata = (com.linkedin.pegasus2avro.metadata.search.SearchResultMetadata)value$; break;
    case 2: scrollId = (java.lang.String)value$; break;
    case 3: pageSize = (java.lang.Integer)value$; break;
    case 4: numEntities = (java.lang.Integer)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'entities' field.
   * A list of entities returned from the search results   */
  public java.util.List<com.linkedin.pegasus2avro.metadata.search.LineageSearchEntity> getEntities() {
    return entities;
  }

  /**
   * Sets the value of the 'entities' field.
   * A list of entities returned from the search results   * @param value the value to set.
   */
  public void setEntities(java.util.List<com.linkedin.pegasus2avro.metadata.search.LineageSearchEntity> value) {
    this.entities = value;
  }

  /**
   * Gets the value of the 'metadata' field.
   * Metadata specific to the browse result of the queried path   */
  public com.linkedin.pegasus2avro.metadata.search.SearchResultMetadata getMetadata() {
    return metadata;
  }

  /**
   * Sets the value of the 'metadata' field.
   * Metadata specific to the browse result of the queried path   * @param value the value to set.
   */
  public void setMetadata(com.linkedin.pegasus2avro.metadata.search.SearchResultMetadata value) {
    this.metadata = value;
  }

  /**
   * Gets the value of the 'scrollId' field.
   * Scroll Identifier for subsequent requests, if not present then no further results to fetch   */
  public java.lang.String getScrollId() {
    return scrollId;
  }

  /**
   * Sets the value of the 'scrollId' field.
   * Scroll Identifier for subsequent requests, if not present then no further results to fetch   * @param value the value to set.
   */
  public void setScrollId(java.lang.String value) {
    this.scrollId = value;
  }

  /**
   * Gets the value of the 'pageSize' field.
   * Size of each page in the result   */
  public java.lang.Integer getPageSize() {
    return pageSize;
  }

  /**
   * Sets the value of the 'pageSize' field.
   * Size of each page in the result   * @param value the value to set.
   */
  public void setPageSize(java.lang.Integer value) {
    this.pageSize = value;
  }

  /**
   * Gets the value of the 'numEntities' field.
   * The total number of entities directly under searched path   */
  public java.lang.Integer getNumEntities() {
    return numEntities;
  }

  /**
   * Sets the value of the 'numEntities' field.
   * The total number of entities directly under searched path   * @param value the value to set.
   */
  public void setNumEntities(java.lang.Integer value) {
    this.numEntities = value;
  }

  /** Creates a new LineageScrollResult RecordBuilder */
  public static com.linkedin.pegasus2avro.metadata.search.LineageScrollResult.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.metadata.search.LineageScrollResult.Builder();
  }
  
  /** Creates a new LineageScrollResult RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.metadata.search.LineageScrollResult.Builder newBuilder(com.linkedin.pegasus2avro.metadata.search.LineageScrollResult.Builder other) {
    return new com.linkedin.pegasus2avro.metadata.search.LineageScrollResult.Builder(other);
  }
  
  /** Creates a new LineageScrollResult RecordBuilder by copying an existing LineageScrollResult instance */
  public static com.linkedin.pegasus2avro.metadata.search.LineageScrollResult.Builder newBuilder(com.linkedin.pegasus2avro.metadata.search.LineageScrollResult other) {
    return new com.linkedin.pegasus2avro.metadata.search.LineageScrollResult.Builder(other);
  }
  
  /**
   * RecordBuilder for LineageScrollResult instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<LineageScrollResult>
    implements org.apache.avro.data.RecordBuilder<LineageScrollResult> {

    private java.util.List<com.linkedin.pegasus2avro.metadata.search.LineageSearchEntity> entities;
    private com.linkedin.pegasus2avro.metadata.search.SearchResultMetadata metadata;
    private java.lang.String scrollId;
    private int pageSize;
    private int numEntities;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.metadata.search.LineageScrollResult.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.metadata.search.LineageScrollResult.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.entities)) {
        this.entities = data().deepCopy(fields()[0].schema(), other.entities);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.metadata)) {
        this.metadata = data().deepCopy(fields()[1].schema(), other.metadata);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.scrollId)) {
        this.scrollId = data().deepCopy(fields()[2].schema(), other.scrollId);
        fieldSetFlags()[2] = true;
      }
      if (isValidValue(fields()[3], other.pageSize)) {
        this.pageSize = data().deepCopy(fields()[3].schema(), other.pageSize);
        fieldSetFlags()[3] = true;
      }
      if (isValidValue(fields()[4], other.numEntities)) {
        this.numEntities = data().deepCopy(fields()[4].schema(), other.numEntities);
        fieldSetFlags()[4] = true;
      }
    }
    
    /** Creates a Builder by copying an existing LineageScrollResult instance */
    private Builder(com.linkedin.pegasus2avro.metadata.search.LineageScrollResult other) {
            super(com.linkedin.pegasus2avro.metadata.search.LineageScrollResult.SCHEMA$);
      if (isValidValue(fields()[0], other.entities)) {
        this.entities = data().deepCopy(fields()[0].schema(), other.entities);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.metadata)) {
        this.metadata = data().deepCopy(fields()[1].schema(), other.metadata);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.scrollId)) {
        this.scrollId = data().deepCopy(fields()[2].schema(), other.scrollId);
        fieldSetFlags()[2] = true;
      }
      if (isValidValue(fields()[3], other.pageSize)) {
        this.pageSize = data().deepCopy(fields()[3].schema(), other.pageSize);
        fieldSetFlags()[3] = true;
      }
      if (isValidValue(fields()[4], other.numEntities)) {
        this.numEntities = data().deepCopy(fields()[4].schema(), other.numEntities);
        fieldSetFlags()[4] = true;
      }
    }

    /** Gets the value of the 'entities' field */
    public java.util.List<com.linkedin.pegasus2avro.metadata.search.LineageSearchEntity> getEntities() {
      return entities;
    }
    
    /** Sets the value of the 'entities' field */
    public com.linkedin.pegasus2avro.metadata.search.LineageScrollResult.Builder setEntities(java.util.List<com.linkedin.pegasus2avro.metadata.search.LineageSearchEntity> value) {
      validate(fields()[0], value);
      this.entities = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'entities' field has been set */
    public boolean hasEntities() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'entities' field */
    public com.linkedin.pegasus2avro.metadata.search.LineageScrollResult.Builder clearEntities() {
      entities = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'metadata' field */
    public com.linkedin.pegasus2avro.metadata.search.SearchResultMetadata getMetadata() {
      return metadata;
    }
    
    /** Sets the value of the 'metadata' field */
    public com.linkedin.pegasus2avro.metadata.search.LineageScrollResult.Builder setMetadata(com.linkedin.pegasus2avro.metadata.search.SearchResultMetadata value) {
      validate(fields()[1], value);
      this.metadata = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'metadata' field has been set */
    public boolean hasMetadata() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'metadata' field */
    public com.linkedin.pegasus2avro.metadata.search.LineageScrollResult.Builder clearMetadata() {
      metadata = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    /** Gets the value of the 'scrollId' field */
    public java.lang.String getScrollId() {
      return scrollId;
    }
    
    /** Sets the value of the 'scrollId' field */
    public com.linkedin.pegasus2avro.metadata.search.LineageScrollResult.Builder setScrollId(java.lang.String value) {
      validate(fields()[2], value);
      this.scrollId = value;
      fieldSetFlags()[2] = true;
      return this; 
    }
    
    /** Checks whether the 'scrollId' field has been set */
    public boolean hasScrollId() {
      return fieldSetFlags()[2];
    }
    
    /** Clears the value of the 'scrollId' field */
    public com.linkedin.pegasus2avro.metadata.search.LineageScrollResult.Builder clearScrollId() {
      scrollId = null;
      fieldSetFlags()[2] = false;
      return this;
    }

    /** Gets the value of the 'pageSize' field */
    public java.lang.Integer getPageSize() {
      return pageSize;
    }
    
    /** Sets the value of the 'pageSize' field */
    public com.linkedin.pegasus2avro.metadata.search.LineageScrollResult.Builder setPageSize(int value) {
      validate(fields()[3], value);
      this.pageSize = value;
      fieldSetFlags()[3] = true;
      return this; 
    }
    
    /** Checks whether the 'pageSize' field has been set */
    public boolean hasPageSize() {
      return fieldSetFlags()[3];
    }
    
    /** Clears the value of the 'pageSize' field */
    public com.linkedin.pegasus2avro.metadata.search.LineageScrollResult.Builder clearPageSize() {
      fieldSetFlags()[3] = false;
      return this;
    }

    /** Gets the value of the 'numEntities' field */
    public java.lang.Integer getNumEntities() {
      return numEntities;
    }
    
    /** Sets the value of the 'numEntities' field */
    public com.linkedin.pegasus2avro.metadata.search.LineageScrollResult.Builder setNumEntities(int value) {
      validate(fields()[4], value);
      this.numEntities = value;
      fieldSetFlags()[4] = true;
      return this; 
    }
    
    /** Checks whether the 'numEntities' field has been set */
    public boolean hasNumEntities() {
      return fieldSetFlags()[4];
    }
    
    /** Clears the value of the 'numEntities' field */
    public com.linkedin.pegasus2avro.metadata.search.LineageScrollResult.Builder clearNumEntities() {
      fieldSetFlags()[4] = false;
      return this;
    }

    @Override
    public LineageScrollResult build() {
      try {
        LineageScrollResult record = new LineageScrollResult();
        record.entities = fieldSetFlags()[0] ? this.entities : (java.util.List<com.linkedin.pegasus2avro.metadata.search.LineageSearchEntity>) defaultValue(fields()[0]);
        record.metadata = fieldSetFlags()[1] ? this.metadata : (com.linkedin.pegasus2avro.metadata.search.SearchResultMetadata) defaultValue(fields()[1]);
        record.scrollId = fieldSetFlags()[2] ? this.scrollId : (java.lang.String) defaultValue(fields()[2]);
        record.pageSize = fieldSetFlags()[3] ? this.pageSize : (java.lang.Integer) defaultValue(fields()[3]);
        record.numEntities = fieldSetFlags()[4] ? this.numEntities : (java.lang.Integer) defaultValue(fields()[4]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}

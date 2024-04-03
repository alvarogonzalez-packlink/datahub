/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.events;  
@SuppressWarnings("all")
/** This header records information about the context of an event as it is emitted into kafka and is intended to be used by the kafka audit application.  For more information see go/kafkaauditheader */
@org.apache.avro.specific.AvroGenerated
public class KafkaAuditHeader extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"KafkaAuditHeader\",\"namespace\":\"com.linkedin.events\",\"doc\":\"This header records information about the context of an event as it is emitted into kafka and is intended to be used by the kafka audit application.  For more information see go/kafkaauditheader\",\"fields\":[{\"name\":\"time\",\"type\":\"long\",\"doc\":\"The time at which the event was emitted into kafka.\",\"compliance\":[{\"policy\":\"EVENT_TIME\"}]},{\"name\":\"server\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The fully qualified name of the host from which the event is being emitted.\",\"compliance\":\"NONE\"},{\"name\":\"instance\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The instance on the server from which the event is being emitted. e.g. i001\",\"default\":null,\"compliance\":\"NONE\"},{\"name\":\"appName\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The name of the application from which the event is being emitted. see go/appname\",\"compliance\":\"NONE\"},{\"name\":\"messageId\",\"type\":{\"type\":\"fixed\",\"name\":\"UUID\",\"size\":16},\"doc\":\"A unique identifier for the message\",\"compliance\":\"NONE\"},{\"name\":\"auditVersion\",\"type\":[\"null\",\"int\"],\"doc\":\"The version that is being used for auditing. In version 0, the audit trail buckets events into 10 minute audit windows based on the EventHeader timestamp. In version 1, the audit trail buckets events as follows: if the schema has an outer KafkaAuditHeader, use the outer audit header timestamp for bucketing; else if the EventHeader has an inner KafkaAuditHeader use that inner audit header's timestamp for bucketing\",\"default\":null,\"compliance\":\"NONE\"},{\"name\":\"fabricUrn\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The fabricUrn of the host from which the event is being emitted. Fabric Urn in the format of urn:li:fabric:{fabric_name}. See go/fabric.\",\"default\":null,\"compliance\":\"NONE\"},{\"name\":\"clusterConnectionString\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"This is a String that the client uses to establish some kind of connection with the Kafka cluster. The exact format of it depends on specific versions of clients and brokers. This information could potentially identify the fabric and cluster with which the client is producing to or consuming from.\",\"default\":null,\"compliance\":\"NONE\"}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** The time at which the event was emitted into kafka. */
  @Deprecated public long time;
  /** The fully qualified name of the host from which the event is being emitted. */
  @Deprecated public java.lang.String server;
  /** The instance on the server from which the event is being emitted. e.g. i001 */
  @Deprecated public java.lang.String instance;
  /** The name of the application from which the event is being emitted. see go/appname */
  @Deprecated public java.lang.String appName;
  /** A unique identifier for the message */
  @Deprecated public com.linkedin.events.UUID messageId;
  /** The version that is being used for auditing. In version 0, the audit trail buckets events into 10 minute audit windows based on the EventHeader timestamp. In version 1, the audit trail buckets events as follows: if the schema has an outer KafkaAuditHeader, use the outer audit header timestamp for bucketing; else if the EventHeader has an inner KafkaAuditHeader use that inner audit header's timestamp for bucketing */
  @Deprecated public java.lang.Integer auditVersion;
  /** The fabricUrn of the host from which the event is being emitted. Fabric Urn in the format of urn:li:fabric:{fabric_name}. See go/fabric. */
  @Deprecated public java.lang.String fabricUrn;
  /** This is a String that the client uses to establish some kind of connection with the Kafka cluster. The exact format of it depends on specific versions of clients and brokers. This information could potentially identify the fabric and cluster with which the client is producing to or consuming from. */
  @Deprecated public java.lang.String clusterConnectionString;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public KafkaAuditHeader() {}

  /**
   * All-args constructor.
   */
  public KafkaAuditHeader(java.lang.Long time, java.lang.String server, java.lang.String instance, java.lang.String appName, com.linkedin.events.UUID messageId, java.lang.Integer auditVersion, java.lang.String fabricUrn, java.lang.String clusterConnectionString) {
    this.time = time;
    this.server = server;
    this.instance = instance;
    this.appName = appName;
    this.messageId = messageId;
    this.auditVersion = auditVersion;
    this.fabricUrn = fabricUrn;
    this.clusterConnectionString = clusterConnectionString;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return time;
    case 1: return server;
    case 2: return instance;
    case 3: return appName;
    case 4: return messageId;
    case 5: return auditVersion;
    case 6: return fabricUrn;
    case 7: return clusterConnectionString;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: time = (java.lang.Long)value$; break;
    case 1: server = (java.lang.String)value$; break;
    case 2: instance = (java.lang.String)value$; break;
    case 3: appName = (java.lang.String)value$; break;
    case 4: messageId = (com.linkedin.events.UUID)value$; break;
    case 5: auditVersion = (java.lang.Integer)value$; break;
    case 6: fabricUrn = (java.lang.String)value$; break;
    case 7: clusterConnectionString = (java.lang.String)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'time' field.
   * The time at which the event was emitted into kafka.   */
  public java.lang.Long getTime() {
    return time;
  }

  /**
   * Sets the value of the 'time' field.
   * The time at which the event was emitted into kafka.   * @param value the value to set.
   */
  public void setTime(java.lang.Long value) {
    this.time = value;
  }

  /**
   * Gets the value of the 'server' field.
   * The fully qualified name of the host from which the event is being emitted.   */
  public java.lang.String getServer() {
    return server;
  }

  /**
   * Sets the value of the 'server' field.
   * The fully qualified name of the host from which the event is being emitted.   * @param value the value to set.
   */
  public void setServer(java.lang.String value) {
    this.server = value;
  }

  /**
   * Gets the value of the 'instance' field.
   * The instance on the server from which the event is being emitted. e.g. i001   */
  public java.lang.String getInstance() {
    return instance;
  }

  /**
   * Sets the value of the 'instance' field.
   * The instance on the server from which the event is being emitted. e.g. i001   * @param value the value to set.
   */
  public void setInstance(java.lang.String value) {
    this.instance = value;
  }

  /**
   * Gets the value of the 'appName' field.
   * The name of the application from which the event is being emitted. see go/appname   */
  public java.lang.String getAppName() {
    return appName;
  }

  /**
   * Sets the value of the 'appName' field.
   * The name of the application from which the event is being emitted. see go/appname   * @param value the value to set.
   */
  public void setAppName(java.lang.String value) {
    this.appName = value;
  }

  /**
   * Gets the value of the 'messageId' field.
   * A unique identifier for the message   */
  public com.linkedin.events.UUID getMessageId() {
    return messageId;
  }

  /**
   * Sets the value of the 'messageId' field.
   * A unique identifier for the message   * @param value the value to set.
   */
  public void setMessageId(com.linkedin.events.UUID value) {
    this.messageId = value;
  }

  /**
   * Gets the value of the 'auditVersion' field.
   * The version that is being used for auditing. In version 0, the audit trail buckets events into 10 minute audit windows based on the EventHeader timestamp. In version 1, the audit trail buckets events as follows: if the schema has an outer KafkaAuditHeader, use the outer audit header timestamp for bucketing; else if the EventHeader has an inner KafkaAuditHeader use that inner audit header's timestamp for bucketing   */
  public java.lang.Integer getAuditVersion() {
    return auditVersion;
  }

  /**
   * Sets the value of the 'auditVersion' field.
   * The version that is being used for auditing. In version 0, the audit trail buckets events into 10 minute audit windows based on the EventHeader timestamp. In version 1, the audit trail buckets events as follows: if the schema has an outer KafkaAuditHeader, use the outer audit header timestamp for bucketing; else if the EventHeader has an inner KafkaAuditHeader use that inner audit header's timestamp for bucketing   * @param value the value to set.
   */
  public void setAuditVersion(java.lang.Integer value) {
    this.auditVersion = value;
  }

  /**
   * Gets the value of the 'fabricUrn' field.
   * The fabricUrn of the host from which the event is being emitted. Fabric Urn in the format of urn:li:fabric:{fabric_name}. See go/fabric.   */
  public java.lang.String getFabricUrn() {
    return fabricUrn;
  }

  /**
   * Sets the value of the 'fabricUrn' field.
   * The fabricUrn of the host from which the event is being emitted. Fabric Urn in the format of urn:li:fabric:{fabric_name}. See go/fabric.   * @param value the value to set.
   */
  public void setFabricUrn(java.lang.String value) {
    this.fabricUrn = value;
  }

  /**
   * Gets the value of the 'clusterConnectionString' field.
   * This is a String that the client uses to establish some kind of connection with the Kafka cluster. The exact format of it depends on specific versions of clients and brokers. This information could potentially identify the fabric and cluster with which the client is producing to or consuming from.   */
  public java.lang.String getClusterConnectionString() {
    return clusterConnectionString;
  }

  /**
   * Sets the value of the 'clusterConnectionString' field.
   * This is a String that the client uses to establish some kind of connection with the Kafka cluster. The exact format of it depends on specific versions of clients and brokers. This information could potentially identify the fabric and cluster with which the client is producing to or consuming from.   * @param value the value to set.
   */
  public void setClusterConnectionString(java.lang.String value) {
    this.clusterConnectionString = value;
  }

  /** Creates a new KafkaAuditHeader RecordBuilder */
  public static com.linkedin.events.KafkaAuditHeader.Builder newBuilder() {
    return new com.linkedin.events.KafkaAuditHeader.Builder();
  }
  
  /** Creates a new KafkaAuditHeader RecordBuilder by copying an existing Builder */
  public static com.linkedin.events.KafkaAuditHeader.Builder newBuilder(com.linkedin.events.KafkaAuditHeader.Builder other) {
    return new com.linkedin.events.KafkaAuditHeader.Builder(other);
  }
  
  /** Creates a new KafkaAuditHeader RecordBuilder by copying an existing KafkaAuditHeader instance */
  public static com.linkedin.events.KafkaAuditHeader.Builder newBuilder(com.linkedin.events.KafkaAuditHeader other) {
    return new com.linkedin.events.KafkaAuditHeader.Builder(other);
  }
  
  /**
   * RecordBuilder for KafkaAuditHeader instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<KafkaAuditHeader>
    implements org.apache.avro.data.RecordBuilder<KafkaAuditHeader> {

    private long time;
    private java.lang.String server;
    private java.lang.String instance;
    private java.lang.String appName;
    private com.linkedin.events.UUID messageId;
    private java.lang.Integer auditVersion;
    private java.lang.String fabricUrn;
    private java.lang.String clusterConnectionString;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.events.KafkaAuditHeader.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.events.KafkaAuditHeader.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.time)) {
        this.time = data().deepCopy(fields()[0].schema(), other.time);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.server)) {
        this.server = data().deepCopy(fields()[1].schema(), other.server);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.instance)) {
        this.instance = data().deepCopy(fields()[2].schema(), other.instance);
        fieldSetFlags()[2] = true;
      }
      if (isValidValue(fields()[3], other.appName)) {
        this.appName = data().deepCopy(fields()[3].schema(), other.appName);
        fieldSetFlags()[3] = true;
      }
      if (isValidValue(fields()[4], other.messageId)) {
        this.messageId = data().deepCopy(fields()[4].schema(), other.messageId);
        fieldSetFlags()[4] = true;
      }
      if (isValidValue(fields()[5], other.auditVersion)) {
        this.auditVersion = data().deepCopy(fields()[5].schema(), other.auditVersion);
        fieldSetFlags()[5] = true;
      }
      if (isValidValue(fields()[6], other.fabricUrn)) {
        this.fabricUrn = data().deepCopy(fields()[6].schema(), other.fabricUrn);
        fieldSetFlags()[6] = true;
      }
      if (isValidValue(fields()[7], other.clusterConnectionString)) {
        this.clusterConnectionString = data().deepCopy(fields()[7].schema(), other.clusterConnectionString);
        fieldSetFlags()[7] = true;
      }
    }
    
    /** Creates a Builder by copying an existing KafkaAuditHeader instance */
    private Builder(com.linkedin.events.KafkaAuditHeader other) {
            super(com.linkedin.events.KafkaAuditHeader.SCHEMA$);
      if (isValidValue(fields()[0], other.time)) {
        this.time = data().deepCopy(fields()[0].schema(), other.time);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.server)) {
        this.server = data().deepCopy(fields()[1].schema(), other.server);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.instance)) {
        this.instance = data().deepCopy(fields()[2].schema(), other.instance);
        fieldSetFlags()[2] = true;
      }
      if (isValidValue(fields()[3], other.appName)) {
        this.appName = data().deepCopy(fields()[3].schema(), other.appName);
        fieldSetFlags()[3] = true;
      }
      if (isValidValue(fields()[4], other.messageId)) {
        this.messageId = data().deepCopy(fields()[4].schema(), other.messageId);
        fieldSetFlags()[4] = true;
      }
      if (isValidValue(fields()[5], other.auditVersion)) {
        this.auditVersion = data().deepCopy(fields()[5].schema(), other.auditVersion);
        fieldSetFlags()[5] = true;
      }
      if (isValidValue(fields()[6], other.fabricUrn)) {
        this.fabricUrn = data().deepCopy(fields()[6].schema(), other.fabricUrn);
        fieldSetFlags()[6] = true;
      }
      if (isValidValue(fields()[7], other.clusterConnectionString)) {
        this.clusterConnectionString = data().deepCopy(fields()[7].schema(), other.clusterConnectionString);
        fieldSetFlags()[7] = true;
      }
    }

    /** Gets the value of the 'time' field */
    public java.lang.Long getTime() {
      return time;
    }
    
    /** Sets the value of the 'time' field */
    public com.linkedin.events.KafkaAuditHeader.Builder setTime(long value) {
      validate(fields()[0], value);
      this.time = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'time' field has been set */
    public boolean hasTime() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'time' field */
    public com.linkedin.events.KafkaAuditHeader.Builder clearTime() {
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'server' field */
    public java.lang.String getServer() {
      return server;
    }
    
    /** Sets the value of the 'server' field */
    public com.linkedin.events.KafkaAuditHeader.Builder setServer(java.lang.String value) {
      validate(fields()[1], value);
      this.server = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'server' field has been set */
    public boolean hasServer() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'server' field */
    public com.linkedin.events.KafkaAuditHeader.Builder clearServer() {
      server = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    /** Gets the value of the 'instance' field */
    public java.lang.String getInstance() {
      return instance;
    }
    
    /** Sets the value of the 'instance' field */
    public com.linkedin.events.KafkaAuditHeader.Builder setInstance(java.lang.String value) {
      validate(fields()[2], value);
      this.instance = value;
      fieldSetFlags()[2] = true;
      return this; 
    }
    
    /** Checks whether the 'instance' field has been set */
    public boolean hasInstance() {
      return fieldSetFlags()[2];
    }
    
    /** Clears the value of the 'instance' field */
    public com.linkedin.events.KafkaAuditHeader.Builder clearInstance() {
      instance = null;
      fieldSetFlags()[2] = false;
      return this;
    }

    /** Gets the value of the 'appName' field */
    public java.lang.String getAppName() {
      return appName;
    }
    
    /** Sets the value of the 'appName' field */
    public com.linkedin.events.KafkaAuditHeader.Builder setAppName(java.lang.String value) {
      validate(fields()[3], value);
      this.appName = value;
      fieldSetFlags()[3] = true;
      return this; 
    }
    
    /** Checks whether the 'appName' field has been set */
    public boolean hasAppName() {
      return fieldSetFlags()[3];
    }
    
    /** Clears the value of the 'appName' field */
    public com.linkedin.events.KafkaAuditHeader.Builder clearAppName() {
      appName = null;
      fieldSetFlags()[3] = false;
      return this;
    }

    /** Gets the value of the 'messageId' field */
    public com.linkedin.events.UUID getMessageId() {
      return messageId;
    }
    
    /** Sets the value of the 'messageId' field */
    public com.linkedin.events.KafkaAuditHeader.Builder setMessageId(com.linkedin.events.UUID value) {
      validate(fields()[4], value);
      this.messageId = value;
      fieldSetFlags()[4] = true;
      return this; 
    }
    
    /** Checks whether the 'messageId' field has been set */
    public boolean hasMessageId() {
      return fieldSetFlags()[4];
    }
    
    /** Clears the value of the 'messageId' field */
    public com.linkedin.events.KafkaAuditHeader.Builder clearMessageId() {
      messageId = null;
      fieldSetFlags()[4] = false;
      return this;
    }

    /** Gets the value of the 'auditVersion' field */
    public java.lang.Integer getAuditVersion() {
      return auditVersion;
    }
    
    /** Sets the value of the 'auditVersion' field */
    public com.linkedin.events.KafkaAuditHeader.Builder setAuditVersion(java.lang.Integer value) {
      validate(fields()[5], value);
      this.auditVersion = value;
      fieldSetFlags()[5] = true;
      return this; 
    }
    
    /** Checks whether the 'auditVersion' field has been set */
    public boolean hasAuditVersion() {
      return fieldSetFlags()[5];
    }
    
    /** Clears the value of the 'auditVersion' field */
    public com.linkedin.events.KafkaAuditHeader.Builder clearAuditVersion() {
      auditVersion = null;
      fieldSetFlags()[5] = false;
      return this;
    }

    /** Gets the value of the 'fabricUrn' field */
    public java.lang.String getFabricUrn() {
      return fabricUrn;
    }
    
    /** Sets the value of the 'fabricUrn' field */
    public com.linkedin.events.KafkaAuditHeader.Builder setFabricUrn(java.lang.String value) {
      validate(fields()[6], value);
      this.fabricUrn = value;
      fieldSetFlags()[6] = true;
      return this; 
    }
    
    /** Checks whether the 'fabricUrn' field has been set */
    public boolean hasFabricUrn() {
      return fieldSetFlags()[6];
    }
    
    /** Clears the value of the 'fabricUrn' field */
    public com.linkedin.events.KafkaAuditHeader.Builder clearFabricUrn() {
      fabricUrn = null;
      fieldSetFlags()[6] = false;
      return this;
    }

    /** Gets the value of the 'clusterConnectionString' field */
    public java.lang.String getClusterConnectionString() {
      return clusterConnectionString;
    }
    
    /** Sets the value of the 'clusterConnectionString' field */
    public com.linkedin.events.KafkaAuditHeader.Builder setClusterConnectionString(java.lang.String value) {
      validate(fields()[7], value);
      this.clusterConnectionString = value;
      fieldSetFlags()[7] = true;
      return this; 
    }
    
    /** Checks whether the 'clusterConnectionString' field has been set */
    public boolean hasClusterConnectionString() {
      return fieldSetFlags()[7];
    }
    
    /** Clears the value of the 'clusterConnectionString' field */
    public com.linkedin.events.KafkaAuditHeader.Builder clearClusterConnectionString() {
      clusterConnectionString = null;
      fieldSetFlags()[7] = false;
      return this;
    }

    @Override
    public KafkaAuditHeader build() {
      try {
        KafkaAuditHeader record = new KafkaAuditHeader();
        record.time = fieldSetFlags()[0] ? this.time : (java.lang.Long) defaultValue(fields()[0]);
        record.server = fieldSetFlags()[1] ? this.server : (java.lang.String) defaultValue(fields()[1]);
        record.instance = fieldSetFlags()[2] ? this.instance : (java.lang.String) defaultValue(fields()[2]);
        record.appName = fieldSetFlags()[3] ? this.appName : (java.lang.String) defaultValue(fields()[3]);
        record.messageId = fieldSetFlags()[4] ? this.messageId : (com.linkedin.events.UUID) defaultValue(fields()[4]);
        record.auditVersion = fieldSetFlags()[5] ? this.auditVersion : (java.lang.Integer) defaultValue(fields()[5]);
        record.fabricUrn = fieldSetFlags()[6] ? this.fabricUrn : (java.lang.String) defaultValue(fields()[6]);
        record.clusterConnectionString = fieldSetFlags()[7] ? this.clusterConnectionString : (java.lang.String) defaultValue(fields()[7]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}

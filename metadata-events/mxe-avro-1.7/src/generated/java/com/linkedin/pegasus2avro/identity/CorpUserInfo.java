/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.identity;  
@SuppressWarnings("all")
/** Linkedin corp user information */
@org.apache.avro.specific.AvroGenerated
public class CorpUserInfo extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"CorpUserInfo\",\"namespace\":\"com.linkedin.pegasus2avro.identity\",\"doc\":\"Linkedin corp user information\",\"fields\":[{\"name\":\"customProperties\",\"type\":{\"type\":\"map\",\"values\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"avro.java.string\":\"String\"},\"doc\":\"Custom property bag.\",\"default\":{},\"Searchable\":{\"/*\":{\"queryByDefault\":true}}},{\"name\":\"active\",\"type\":\"boolean\",\"doc\":\"Deprecated! Use CorpUserStatus instead. Whether the corpUser is active, ref: https://iwww.corp.linkedin.com/wiki/cf/display/GTSD/Accessing+Active+Directory+via+LDAP+tools\",\"Searchable\":{\"fieldType\":\"BOOLEAN\",\"weightsPerFieldValue\":{\"true\":2.0}}},{\"name\":\"displayName\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"displayName of this user ,  e.g.  Hang Zhang(DataHQ)\",\"default\":null,\"Searchable\":{\"boostScore\":10.0,\"enableAutocomplete\":true,\"fieldType\":\"TEXT_PARTIAL\",\"queryByDefault\":true}},{\"name\":\"email\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"email address of this user\",\"default\":null,\"Searchable\":{\"fieldType\":\"KEYWORD\",\"queryByDefault\":true}},{\"name\":\"title\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"title of this user\",\"default\":null,\"Searchable\":{\"fieldType\":\"KEYWORD\",\"queryByDefault\":true}},{\"name\":\"managerUrn\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"direct manager of this user\",\"default\":null,\"Relationship\":{\"entityTypes\":[\"corpuser\"],\"name\":\"ReportsTo\"},\"Searchable\":{\"fieldName\":\"managerLdap\",\"fieldType\":\"URN\",\"queryByDefault\":true},\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.CorpuserUrn\"}},{\"name\":\"departmentId\",\"type\":[\"null\",\"long\"],\"doc\":\"department id this user belong to\",\"default\":null},{\"name\":\"departmentName\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"department name this user belong to\",\"default\":null},{\"name\":\"firstName\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"first name of this user\",\"default\":null},{\"name\":\"lastName\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"last name of this user\",\"default\":null},{\"name\":\"fullName\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Common name of this user, format is firstName + lastName (split by a whitespace)\",\"default\":null,\"Searchable\":{\"boostScore\":10.0,\"enableAutocomplete\":true,\"fieldType\":\"TEXT_PARTIAL\",\"queryByDefault\":true}},{\"name\":\"countryCode\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"two uppercase letters country code. e.g.  US\",\"default\":null}],\"Aspect\":{\"EntityUrns\":[\"com.linkedin.pegasus2avro.common.CorpuserUrn\"],\"name\":\"corpUserInfo\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** Custom property bag. */
  @Deprecated public java.util.Map<java.lang.String,java.lang.String> customProperties;
  /** Deprecated! Use CorpUserStatus instead. Whether the corpUser is active, ref: https://iwww.corp.linkedin.com/wiki/cf/display/GTSD/Accessing+Active+Directory+via+LDAP+tools */
  @Deprecated public boolean active;
  /** displayName of this user ,  e.g.  Hang Zhang(DataHQ) */
  @Deprecated public java.lang.String displayName;
  /** email address of this user */
  @Deprecated public java.lang.String email;
  /** title of this user */
  @Deprecated public java.lang.String title;
  /** direct manager of this user */
  @Deprecated public java.lang.String managerUrn;
  /** department id this user belong to */
  @Deprecated public java.lang.Long departmentId;
  /** department name this user belong to */
  @Deprecated public java.lang.String departmentName;
  /** first name of this user */
  @Deprecated public java.lang.String firstName;
  /** last name of this user */
  @Deprecated public java.lang.String lastName;
  /** Common name of this user, format is firstName + lastName (split by a whitespace) */
  @Deprecated public java.lang.String fullName;
  /** two uppercase letters country code. e.g.  US */
  @Deprecated public java.lang.String countryCode;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public CorpUserInfo() {}

  /**
   * All-args constructor.
   */
  public CorpUserInfo(java.util.Map<java.lang.String,java.lang.String> customProperties, java.lang.Boolean active, java.lang.String displayName, java.lang.String email, java.lang.String title, java.lang.String managerUrn, java.lang.Long departmentId, java.lang.String departmentName, java.lang.String firstName, java.lang.String lastName, java.lang.String fullName, java.lang.String countryCode) {
    this.customProperties = customProperties;
    this.active = active;
    this.displayName = displayName;
    this.email = email;
    this.title = title;
    this.managerUrn = managerUrn;
    this.departmentId = departmentId;
    this.departmentName = departmentName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = fullName;
    this.countryCode = countryCode;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return customProperties;
    case 1: return active;
    case 2: return displayName;
    case 3: return email;
    case 4: return title;
    case 5: return managerUrn;
    case 6: return departmentId;
    case 7: return departmentName;
    case 8: return firstName;
    case 9: return lastName;
    case 10: return fullName;
    case 11: return countryCode;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: customProperties = (java.util.Map<java.lang.String,java.lang.String>)value$; break;
    case 1: active = (java.lang.Boolean)value$; break;
    case 2: displayName = (java.lang.String)value$; break;
    case 3: email = (java.lang.String)value$; break;
    case 4: title = (java.lang.String)value$; break;
    case 5: managerUrn = (java.lang.String)value$; break;
    case 6: departmentId = (java.lang.Long)value$; break;
    case 7: departmentName = (java.lang.String)value$; break;
    case 8: firstName = (java.lang.String)value$; break;
    case 9: lastName = (java.lang.String)value$; break;
    case 10: fullName = (java.lang.String)value$; break;
    case 11: countryCode = (java.lang.String)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'customProperties' field.
   * Custom property bag.   */
  public java.util.Map<java.lang.String,java.lang.String> getCustomProperties() {
    return customProperties;
  }

  /**
   * Sets the value of the 'customProperties' field.
   * Custom property bag.   * @param value the value to set.
   */
  public void setCustomProperties(java.util.Map<java.lang.String,java.lang.String> value) {
    this.customProperties = value;
  }

  /**
   * Gets the value of the 'active' field.
   * Deprecated! Use CorpUserStatus instead. Whether the corpUser is active, ref: https://iwww.corp.linkedin.com/wiki/cf/display/GTSD/Accessing+Active+Directory+via+LDAP+tools   */
  public java.lang.Boolean getActive() {
    return active;
  }

  /**
   * Sets the value of the 'active' field.
   * Deprecated! Use CorpUserStatus instead. Whether the corpUser is active, ref: https://iwww.corp.linkedin.com/wiki/cf/display/GTSD/Accessing+Active+Directory+via+LDAP+tools   * @param value the value to set.
   */
  public void setActive(java.lang.Boolean value) {
    this.active = value;
  }

  /**
   * Gets the value of the 'displayName' field.
   * displayName of this user ,  e.g.  Hang Zhang(DataHQ)   */
  public java.lang.String getDisplayName() {
    return displayName;
  }

  /**
   * Sets the value of the 'displayName' field.
   * displayName of this user ,  e.g.  Hang Zhang(DataHQ)   * @param value the value to set.
   */
  public void setDisplayName(java.lang.String value) {
    this.displayName = value;
  }

  /**
   * Gets the value of the 'email' field.
   * email address of this user   */
  public java.lang.String getEmail() {
    return email;
  }

  /**
   * Sets the value of the 'email' field.
   * email address of this user   * @param value the value to set.
   */
  public void setEmail(java.lang.String value) {
    this.email = value;
  }

  /**
   * Gets the value of the 'title' field.
   * title of this user   */
  public java.lang.String getTitle() {
    return title;
  }

  /**
   * Sets the value of the 'title' field.
   * title of this user   * @param value the value to set.
   */
  public void setTitle(java.lang.String value) {
    this.title = value;
  }

  /**
   * Gets the value of the 'managerUrn' field.
   * direct manager of this user   */
  public java.lang.String getManagerUrn() {
    return managerUrn;
  }

  /**
   * Sets the value of the 'managerUrn' field.
   * direct manager of this user   * @param value the value to set.
   */
  public void setManagerUrn(java.lang.String value) {
    this.managerUrn = value;
  }

  /**
   * Gets the value of the 'departmentId' field.
   * department id this user belong to   */
  public java.lang.Long getDepartmentId() {
    return departmentId;
  }

  /**
   * Sets the value of the 'departmentId' field.
   * department id this user belong to   * @param value the value to set.
   */
  public void setDepartmentId(java.lang.Long value) {
    this.departmentId = value;
  }

  /**
   * Gets the value of the 'departmentName' field.
   * department name this user belong to   */
  public java.lang.String getDepartmentName() {
    return departmentName;
  }

  /**
   * Sets the value of the 'departmentName' field.
   * department name this user belong to   * @param value the value to set.
   */
  public void setDepartmentName(java.lang.String value) {
    this.departmentName = value;
  }

  /**
   * Gets the value of the 'firstName' field.
   * first name of this user   */
  public java.lang.String getFirstName() {
    return firstName;
  }

  /**
   * Sets the value of the 'firstName' field.
   * first name of this user   * @param value the value to set.
   */
  public void setFirstName(java.lang.String value) {
    this.firstName = value;
  }

  /**
   * Gets the value of the 'lastName' field.
   * last name of this user   */
  public java.lang.String getLastName() {
    return lastName;
  }

  /**
   * Sets the value of the 'lastName' field.
   * last name of this user   * @param value the value to set.
   */
  public void setLastName(java.lang.String value) {
    this.lastName = value;
  }

  /**
   * Gets the value of the 'fullName' field.
   * Common name of this user, format is firstName + lastName (split by a whitespace)   */
  public java.lang.String getFullName() {
    return fullName;
  }

  /**
   * Sets the value of the 'fullName' field.
   * Common name of this user, format is firstName + lastName (split by a whitespace)   * @param value the value to set.
   */
  public void setFullName(java.lang.String value) {
    this.fullName = value;
  }

  /**
   * Gets the value of the 'countryCode' field.
   * two uppercase letters country code. e.g.  US   */
  public java.lang.String getCountryCode() {
    return countryCode;
  }

  /**
   * Sets the value of the 'countryCode' field.
   * two uppercase letters country code. e.g.  US   * @param value the value to set.
   */
  public void setCountryCode(java.lang.String value) {
    this.countryCode = value;
  }

  /** Creates a new CorpUserInfo RecordBuilder */
  public static com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder();
  }
  
  /** Creates a new CorpUserInfo RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder newBuilder(com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder other) {
    return new com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder(other);
  }
  
  /** Creates a new CorpUserInfo RecordBuilder by copying an existing CorpUserInfo instance */
  public static com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder newBuilder(com.linkedin.pegasus2avro.identity.CorpUserInfo other) {
    return new com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder(other);
  }
  
  /**
   * RecordBuilder for CorpUserInfo instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<CorpUserInfo>
    implements org.apache.avro.data.RecordBuilder<CorpUserInfo> {

    private java.util.Map<java.lang.String,java.lang.String> customProperties;
    private boolean active;
    private java.lang.String displayName;
    private java.lang.String email;
    private java.lang.String title;
    private java.lang.String managerUrn;
    private java.lang.Long departmentId;
    private java.lang.String departmentName;
    private java.lang.String firstName;
    private java.lang.String lastName;
    private java.lang.String fullName;
    private java.lang.String countryCode;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.identity.CorpUserInfo.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.customProperties)) {
        this.customProperties = data().deepCopy(fields()[0].schema(), other.customProperties);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.active)) {
        this.active = data().deepCopy(fields()[1].schema(), other.active);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.displayName)) {
        this.displayName = data().deepCopy(fields()[2].schema(), other.displayName);
        fieldSetFlags()[2] = true;
      }
      if (isValidValue(fields()[3], other.email)) {
        this.email = data().deepCopy(fields()[3].schema(), other.email);
        fieldSetFlags()[3] = true;
      }
      if (isValidValue(fields()[4], other.title)) {
        this.title = data().deepCopy(fields()[4].schema(), other.title);
        fieldSetFlags()[4] = true;
      }
      if (isValidValue(fields()[5], other.managerUrn)) {
        this.managerUrn = data().deepCopy(fields()[5].schema(), other.managerUrn);
        fieldSetFlags()[5] = true;
      }
      if (isValidValue(fields()[6], other.departmentId)) {
        this.departmentId = data().deepCopy(fields()[6].schema(), other.departmentId);
        fieldSetFlags()[6] = true;
      }
      if (isValidValue(fields()[7], other.departmentName)) {
        this.departmentName = data().deepCopy(fields()[7].schema(), other.departmentName);
        fieldSetFlags()[7] = true;
      }
      if (isValidValue(fields()[8], other.firstName)) {
        this.firstName = data().deepCopy(fields()[8].schema(), other.firstName);
        fieldSetFlags()[8] = true;
      }
      if (isValidValue(fields()[9], other.lastName)) {
        this.lastName = data().deepCopy(fields()[9].schema(), other.lastName);
        fieldSetFlags()[9] = true;
      }
      if (isValidValue(fields()[10], other.fullName)) {
        this.fullName = data().deepCopy(fields()[10].schema(), other.fullName);
        fieldSetFlags()[10] = true;
      }
      if (isValidValue(fields()[11], other.countryCode)) {
        this.countryCode = data().deepCopy(fields()[11].schema(), other.countryCode);
        fieldSetFlags()[11] = true;
      }
    }
    
    /** Creates a Builder by copying an existing CorpUserInfo instance */
    private Builder(com.linkedin.pegasus2avro.identity.CorpUserInfo other) {
            super(com.linkedin.pegasus2avro.identity.CorpUserInfo.SCHEMA$);
      if (isValidValue(fields()[0], other.customProperties)) {
        this.customProperties = data().deepCopy(fields()[0].schema(), other.customProperties);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.active)) {
        this.active = data().deepCopy(fields()[1].schema(), other.active);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.displayName)) {
        this.displayName = data().deepCopy(fields()[2].schema(), other.displayName);
        fieldSetFlags()[2] = true;
      }
      if (isValidValue(fields()[3], other.email)) {
        this.email = data().deepCopy(fields()[3].schema(), other.email);
        fieldSetFlags()[3] = true;
      }
      if (isValidValue(fields()[4], other.title)) {
        this.title = data().deepCopy(fields()[4].schema(), other.title);
        fieldSetFlags()[4] = true;
      }
      if (isValidValue(fields()[5], other.managerUrn)) {
        this.managerUrn = data().deepCopy(fields()[5].schema(), other.managerUrn);
        fieldSetFlags()[5] = true;
      }
      if (isValidValue(fields()[6], other.departmentId)) {
        this.departmentId = data().deepCopy(fields()[6].schema(), other.departmentId);
        fieldSetFlags()[6] = true;
      }
      if (isValidValue(fields()[7], other.departmentName)) {
        this.departmentName = data().deepCopy(fields()[7].schema(), other.departmentName);
        fieldSetFlags()[7] = true;
      }
      if (isValidValue(fields()[8], other.firstName)) {
        this.firstName = data().deepCopy(fields()[8].schema(), other.firstName);
        fieldSetFlags()[8] = true;
      }
      if (isValidValue(fields()[9], other.lastName)) {
        this.lastName = data().deepCopy(fields()[9].schema(), other.lastName);
        fieldSetFlags()[9] = true;
      }
      if (isValidValue(fields()[10], other.fullName)) {
        this.fullName = data().deepCopy(fields()[10].schema(), other.fullName);
        fieldSetFlags()[10] = true;
      }
      if (isValidValue(fields()[11], other.countryCode)) {
        this.countryCode = data().deepCopy(fields()[11].schema(), other.countryCode);
        fieldSetFlags()[11] = true;
      }
    }

    /** Gets the value of the 'customProperties' field */
    public java.util.Map<java.lang.String,java.lang.String> getCustomProperties() {
      return customProperties;
    }
    
    /** Sets the value of the 'customProperties' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder setCustomProperties(java.util.Map<java.lang.String,java.lang.String> value) {
      validate(fields()[0], value);
      this.customProperties = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'customProperties' field has been set */
    public boolean hasCustomProperties() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'customProperties' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder clearCustomProperties() {
      customProperties = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'active' field */
    public java.lang.Boolean getActive() {
      return active;
    }
    
    /** Sets the value of the 'active' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder setActive(boolean value) {
      validate(fields()[1], value);
      this.active = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'active' field has been set */
    public boolean hasActive() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'active' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder clearActive() {
      fieldSetFlags()[1] = false;
      return this;
    }

    /** Gets the value of the 'displayName' field */
    public java.lang.String getDisplayName() {
      return displayName;
    }
    
    /** Sets the value of the 'displayName' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder setDisplayName(java.lang.String value) {
      validate(fields()[2], value);
      this.displayName = value;
      fieldSetFlags()[2] = true;
      return this; 
    }
    
    /** Checks whether the 'displayName' field has been set */
    public boolean hasDisplayName() {
      return fieldSetFlags()[2];
    }
    
    /** Clears the value of the 'displayName' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder clearDisplayName() {
      displayName = null;
      fieldSetFlags()[2] = false;
      return this;
    }

    /** Gets the value of the 'email' field */
    public java.lang.String getEmail() {
      return email;
    }
    
    /** Sets the value of the 'email' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder setEmail(java.lang.String value) {
      validate(fields()[3], value);
      this.email = value;
      fieldSetFlags()[3] = true;
      return this; 
    }
    
    /** Checks whether the 'email' field has been set */
    public boolean hasEmail() {
      return fieldSetFlags()[3];
    }
    
    /** Clears the value of the 'email' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder clearEmail() {
      email = null;
      fieldSetFlags()[3] = false;
      return this;
    }

    /** Gets the value of the 'title' field */
    public java.lang.String getTitle() {
      return title;
    }
    
    /** Sets the value of the 'title' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder setTitle(java.lang.String value) {
      validate(fields()[4], value);
      this.title = value;
      fieldSetFlags()[4] = true;
      return this; 
    }
    
    /** Checks whether the 'title' field has been set */
    public boolean hasTitle() {
      return fieldSetFlags()[4];
    }
    
    /** Clears the value of the 'title' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder clearTitle() {
      title = null;
      fieldSetFlags()[4] = false;
      return this;
    }

    /** Gets the value of the 'managerUrn' field */
    public java.lang.String getManagerUrn() {
      return managerUrn;
    }
    
    /** Sets the value of the 'managerUrn' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder setManagerUrn(java.lang.String value) {
      validate(fields()[5], value);
      this.managerUrn = value;
      fieldSetFlags()[5] = true;
      return this; 
    }
    
    /** Checks whether the 'managerUrn' field has been set */
    public boolean hasManagerUrn() {
      return fieldSetFlags()[5];
    }
    
    /** Clears the value of the 'managerUrn' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder clearManagerUrn() {
      managerUrn = null;
      fieldSetFlags()[5] = false;
      return this;
    }

    /** Gets the value of the 'departmentId' field */
    public java.lang.Long getDepartmentId() {
      return departmentId;
    }
    
    /** Sets the value of the 'departmentId' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder setDepartmentId(java.lang.Long value) {
      validate(fields()[6], value);
      this.departmentId = value;
      fieldSetFlags()[6] = true;
      return this; 
    }
    
    /** Checks whether the 'departmentId' field has been set */
    public boolean hasDepartmentId() {
      return fieldSetFlags()[6];
    }
    
    /** Clears the value of the 'departmentId' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder clearDepartmentId() {
      departmentId = null;
      fieldSetFlags()[6] = false;
      return this;
    }

    /** Gets the value of the 'departmentName' field */
    public java.lang.String getDepartmentName() {
      return departmentName;
    }
    
    /** Sets the value of the 'departmentName' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder setDepartmentName(java.lang.String value) {
      validate(fields()[7], value);
      this.departmentName = value;
      fieldSetFlags()[7] = true;
      return this; 
    }
    
    /** Checks whether the 'departmentName' field has been set */
    public boolean hasDepartmentName() {
      return fieldSetFlags()[7];
    }
    
    /** Clears the value of the 'departmentName' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder clearDepartmentName() {
      departmentName = null;
      fieldSetFlags()[7] = false;
      return this;
    }

    /** Gets the value of the 'firstName' field */
    public java.lang.String getFirstName() {
      return firstName;
    }
    
    /** Sets the value of the 'firstName' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder setFirstName(java.lang.String value) {
      validate(fields()[8], value);
      this.firstName = value;
      fieldSetFlags()[8] = true;
      return this; 
    }
    
    /** Checks whether the 'firstName' field has been set */
    public boolean hasFirstName() {
      return fieldSetFlags()[8];
    }
    
    /** Clears the value of the 'firstName' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder clearFirstName() {
      firstName = null;
      fieldSetFlags()[8] = false;
      return this;
    }

    /** Gets the value of the 'lastName' field */
    public java.lang.String getLastName() {
      return lastName;
    }
    
    /** Sets the value of the 'lastName' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder setLastName(java.lang.String value) {
      validate(fields()[9], value);
      this.lastName = value;
      fieldSetFlags()[9] = true;
      return this; 
    }
    
    /** Checks whether the 'lastName' field has been set */
    public boolean hasLastName() {
      return fieldSetFlags()[9];
    }
    
    /** Clears the value of the 'lastName' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder clearLastName() {
      lastName = null;
      fieldSetFlags()[9] = false;
      return this;
    }

    /** Gets the value of the 'fullName' field */
    public java.lang.String getFullName() {
      return fullName;
    }
    
    /** Sets the value of the 'fullName' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder setFullName(java.lang.String value) {
      validate(fields()[10], value);
      this.fullName = value;
      fieldSetFlags()[10] = true;
      return this; 
    }
    
    /** Checks whether the 'fullName' field has been set */
    public boolean hasFullName() {
      return fieldSetFlags()[10];
    }
    
    /** Clears the value of the 'fullName' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder clearFullName() {
      fullName = null;
      fieldSetFlags()[10] = false;
      return this;
    }

    /** Gets the value of the 'countryCode' field */
    public java.lang.String getCountryCode() {
      return countryCode;
    }
    
    /** Sets the value of the 'countryCode' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder setCountryCode(java.lang.String value) {
      validate(fields()[11], value);
      this.countryCode = value;
      fieldSetFlags()[11] = true;
      return this; 
    }
    
    /** Checks whether the 'countryCode' field has been set */
    public boolean hasCountryCode() {
      return fieldSetFlags()[11];
    }
    
    /** Clears the value of the 'countryCode' field */
    public com.linkedin.pegasus2avro.identity.CorpUserInfo.Builder clearCountryCode() {
      countryCode = null;
      fieldSetFlags()[11] = false;
      return this;
    }

    @Override
    public CorpUserInfo build() {
      try {
        CorpUserInfo record = new CorpUserInfo();
        record.customProperties = fieldSetFlags()[0] ? this.customProperties : (java.util.Map<java.lang.String,java.lang.String>) defaultValue(fields()[0]);
        record.active = fieldSetFlags()[1] ? this.active : (java.lang.Boolean) defaultValue(fields()[1]);
        record.displayName = fieldSetFlags()[2] ? this.displayName : (java.lang.String) defaultValue(fields()[2]);
        record.email = fieldSetFlags()[3] ? this.email : (java.lang.String) defaultValue(fields()[3]);
        record.title = fieldSetFlags()[4] ? this.title : (java.lang.String) defaultValue(fields()[4]);
        record.managerUrn = fieldSetFlags()[5] ? this.managerUrn : (java.lang.String) defaultValue(fields()[5]);
        record.departmentId = fieldSetFlags()[6] ? this.departmentId : (java.lang.Long) defaultValue(fields()[6]);
        record.departmentName = fieldSetFlags()[7] ? this.departmentName : (java.lang.String) defaultValue(fields()[7]);
        record.firstName = fieldSetFlags()[8] ? this.firstName : (java.lang.String) defaultValue(fields()[8]);
        record.lastName = fieldSetFlags()[9] ? this.lastName : (java.lang.String) defaultValue(fields()[9]);
        record.fullName = fieldSetFlags()[10] ? this.fullName : (java.lang.String) defaultValue(fields()[10]);
        record.countryCode = fieldSetFlags()[11] ? this.countryCode : (java.lang.String) defaultValue(fields()[11]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}

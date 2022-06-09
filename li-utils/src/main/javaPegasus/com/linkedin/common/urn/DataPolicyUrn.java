package com.linkedin.common.urn;

import com.linkedin.data.template.Custom;
import com.linkedin.data.template.DirectCoercer;
import com.linkedin.data.template.TemplateOutputCastException;
import java.net.URISyntaxException;


public final class DataPolicyUrn extends Urn {

  public static final String ENTITY_TYPE = "dataPolicy";

  private final String _dataPolicyName;

  public DataPolicyUrn(String dataPolicyName) {
    super(ENTITY_TYPE, TupleKey.createWithOneKeyPart(dataPolicyName));
    this._dataPolicyName = dataPolicyName;
  }

  private DataPolicyUrn(TupleKey entityKey, String dataPolicyName) {
    super("li", "dataPolicy", entityKey);
    this._dataPolicyName = dataPolicyName;
  }

  public String getDataPolicyNameEntity() {
    return _dataPolicyName;
  }

  public static DataPolicyUrn createFromString(String rawUrn) throws URISyntaxException {
    return createFromUrn(Urn.createFromString(rawUrn));
  }

  private static DataPolicyUrn decodeUrn(String dataPolicyName) throws Exception {
    return new DataPolicyUrn(TupleKey.create(new Object[]{dataPolicyName}), dataPolicyName);
  }

  public static DataPolicyUrn createFromUrn(Urn urn) throws URISyntaxException {
    if (!"li".equals(urn.getNamespace())) {
      throw new URISyntaxException(urn.toString(), "Urn namespace type should be 'li'.");
    } else if (!ENTITY_TYPE.equals(urn.getEntityType())) {
      throw new URISyntaxException(urn.toString(), "Urn entity type should be 'dataPolicy'.");
    } else {
      TupleKey key = urn.getEntityKey();
      if (key.size() != 1) {
        throw new URISyntaxException(urn.toString(), "Invalid number of keys.");
      } else {
        try {
          return decodeUrn((String)key.getAs(0, String.class));
        } catch (Exception var3) {
          throw new URISyntaxException(urn.toString(), "Invalid URN Parameter: '" + var3.getMessage());
        }
      }
    }
  }

  public static DataPolicyUrn deserialize(String rawUrn) throws URISyntaxException {
    return createFromString(rawUrn);
  }

  static {
    Custom.registerCoercer(new DirectCoercer<DataPolicyUrn>() {
      public Object coerceInput(DataPolicyUrn object) throws ClassCastException {
        return object.toString();
      }

      public DataPolicyUrn coerceOutput(Object object) throws TemplateOutputCastException {
        try {
          return DataPolicyUrn.createFromString((String) object);
        } catch (URISyntaxException e) {
          throw new TemplateOutputCastException("Invalid URN syntax: " + e.getMessage(), e);
        }
      }
    }, DataPolicyUrn.class);
  }
}

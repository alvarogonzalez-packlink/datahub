import datahub.emitter.mce_builder as builder

from datahub.emitter.rest_emitter import DatahubRestEmitter
from datahub.emitter.mcp import MetadataChangeProposalWrapper
from datahub.metadata.schema_classes import (
    CorpRoleInfoClass,
    CorpUserInfoClass,
    CorpGroupInfoClass,
    DataPolicyInfoClass,
    ResourcePrincipalPolicyClass,
    DataPolicyTypeClass,
    RoleMembershipClass, ChangeTypeClass,
)


corp_role_info = CorpRoleInfoClass(
    displayName="analyst"
)
corp_role_urn = builder.make_role_urn("analyst")

corp_user_info1 = CorpUserInfoClass(
    displayName="John",
    active=True
)
corp_user_1_urn = builder.make_user_urn("john@acryldata.io")

corp_user_info2 = CorpUserInfoClass(
    displayName="David",
    active=True
)
corp_user_2_urn = builder.make_user_urn("david@acryldata.io")


corp_group_info = CorpGroupInfoClass(
    displayName="sales representatives",
    admins=[corp_user_1_urn],
    members=[corp_user_2_urn],
    groups=[]
)
corp_group_urn = builder.make_group_urn("sales_representative")



resource_principal_policy = ResourcePrincipalPolicyClass(
    principal=builder.make_role_urn("analyst"),
    resourceRef=builder.make_dataset_urn("postgres", "public.sale"),
    permission="SELECT",
    isAllow=True,
)

data_policy_info_class = DataPolicyInfoClass(
    type=DataPolicyTypeClass.ResourcePrincipalPolicy,
    resourcePrincipalPolicy=resource_principal_policy,
    displayName="Dataset {} access policy".format("sale"),
)
data_policy_urn = builder.make_data_policy_urn("public.sale#analyst#SELECT")

role_membership = RoleMembershipClass(
    roles=[corp_role_urn]
)

# Construct a MetadataChangeProposalWrapper object.
corp_role_mcp = MetadataChangeProposalWrapper(
    entityType="corpRole",
    changeType=ChangeTypeClass.UPSERT,
    entityUrn=corp_role_urn,
    aspectName="corpRoleInfo",
    aspect=corp_role_info,
)

corp_user_info1_mcp = MetadataChangeProposalWrapper(
    entityType="corpUser",
    changeType=ChangeTypeClass.UPSERT,
    entityUrn=corp_user_1_urn,
    aspectName="corpUserInfo",
    aspect=corp_user_info1
)

corp_user_info2_mcp = MetadataChangeProposalWrapper(
    entityType="corpUser",
    changeType=ChangeTypeClass.UPSERT,
    entityUrn=corp_user_2_urn,
    aspectName="corpUserInfo",
    aspect=corp_user_info2
)

corp_user_1_rm_mcp = MetadataChangeProposalWrapper(
    entityType="corpUser",
    changeType=ChangeTypeClass.UPSERT,
    entityUrn=corp_user_1_urn,
    aspectName="roleMembership",
    aspect=role_membership
)

corp_user_2_rm_mcp = MetadataChangeProposalWrapper(
    entityType="corpUser",
    changeType=ChangeTypeClass.UPSERT,
    entityUrn=corp_user_2_urn,
    aspectName="roleMembership",
    aspect=role_membership
)


# Create an emitter to the GMS REST API.
emitter = DatahubRestEmitter("http://localhost:8080")

emitter.emit_mcp(corp_role_mcp)

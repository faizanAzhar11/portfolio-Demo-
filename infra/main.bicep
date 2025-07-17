// Main infrastructure deployment for portfolio website
// This template creates a complete infrastructure setup for a static web app
// with supporting services for monitoring and security

targetScope = 'resourceGroup'

// =============================================================================
// PARAMETERS
// =============================================================================

@description('Name of the environment (e.g., dev, staging, prod)')
param environmentName string

@description('Primary location for all resources')
param location string = resourceGroup().location

@description('Resource group name for deployment')
param resourceGroupName string

@description('Site URL for the portfolio website')
param siteUrl string = 'https://faizanazhar.dev'

@description('Site name for the portfolio website')
param siteName string = 'Faizan Azhar Portfolio'

// =============================================================================
// VARIABLES
// =============================================================================

// Generate a unique resource token based on environment name and subscription
var resourceToken = toLower(uniqueString(subscription().id, environmentName, location))

// Resource naming convention: {resourcePrefix}-{resourceToken}
var resourcePrefix = 'portfolio'

// Common tags for all resources
var tags = {
  'azd-env-name': environmentName
  'project': 'portfolio-website'
  'environment': environmentName
}

// =============================================================================
// RESOURCES
// =============================================================================

// User-assigned managed identity for secure access
resource managedIdentity 'Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31' = {
  name: '${resourcePrefix}-identity-${resourceToken}'
  location: location
  tags: tags
}

// Log Analytics workspace for monitoring and logging
resource logAnalyticsWorkspace 'Microsoft.OperationalInsights/workspaces@2023-09-01' = {
  name: '${resourcePrefix}-logs-${resourceToken}'
  location: location
  tags: tags
  properties: {
    sku: {
      name: 'PerGB2018'
    }
    retentionInDays: 30
    features: {
      enableLogAccessUsingOnlyResourcePermissions: true
    }
  }
}

// Application Insights for application performance monitoring
resource applicationInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: '${resourcePrefix}-appinsights-${resourceToken}'
  location: location
  tags: tags
  kind: 'web'
  properties: {
    Application_Type: 'web'
    WorkspaceResourceId: logAnalyticsWorkspace.id
    IngestionMode: 'LogAnalytics'
    publicNetworkAccessForIngestion: 'Enabled'
    publicNetworkAccessForQuery: 'Enabled'
  }
}

// Key Vault for storing secrets and configuration
resource keyVault 'Microsoft.KeyVault/vaults@2023-07-01' = {
  name: '${resourcePrefix}-kv-${resourceToken}'
  location: location
  tags: tags
  properties: {
    sku: {
      name: 'standard'
      family: 'A'
    }
    tenantId: subscription().tenantId
    enabledForTemplateDeployment: true
    enabledForDiskEncryption: false
    enabledForDeployment: false
    enableRbacAuthorization: true
    enableSoftDelete: true
    softDeleteRetentionInDays: 7
    enablePurgeProtection: false
    publicNetworkAccess: 'enabled'
    accessPolicies: []
    networkAcls: {
      defaultAction: 'Allow'
      bypass: 'AzureServices'
    }
  }
}

// Static Web App for hosting the portfolio website
resource staticWebApp 'Microsoft.Web/staticSites@2024-04-01' = {
  name: '${resourcePrefix}-swa-${resourceToken}'
  location: location
  tags: union(tags, {
    'azd-service-name': 'portfolio-website'
  })
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
    buildProperties: {
      appLocation: '.'
      outputLocation: 'out'
      skipGithubActionWorkflowGeneration: true
    }
    stagingEnvironmentPolicy: 'Enabled'
    allowConfigFileUpdates: true
    enterpriseGradeCdnStatus: 'Disabled'
    provider: 'None'
  }
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '${managedIdentity.id}': {}
    }
  }
}

// Store application secrets in Key Vault
resource siteUrlSecret 'Microsoft.KeyVault/vaults/secrets@2023-07-01' = {
  name: 'SITE-URL'
  parent: keyVault
  properties: {
    value: siteUrl
    contentType: 'text/plain'
  }
}

resource siteNameSecret 'Microsoft.KeyVault/vaults/secrets@2023-07-01' = {
  name: 'SITE-NAME'
  parent: keyVault
  properties: {
    value: siteName
    contentType: 'text/plain'
  }
}

resource applicationInsightsConnectionStringSecret 'Microsoft.KeyVault/vaults/secrets@2023-07-01' = {
  name: 'APPLICATIONINSIGHTS-CONNECTION-STRING'
  parent: keyVault
  properties: {
    value: applicationInsights.properties.ConnectionString
    contentType: 'text/plain'
  }
}

// =============================================================================
// OUTPUTS
// =============================================================================

@description('The resource ID of the Static Web App')
output STATIC_WEB_APP_RESOURCE_ID string = staticWebApp.id

@description('The name of the Static Web App')
output STATIC_WEB_APP_NAME string = staticWebApp.name

@description('The default hostname of the Static Web App')
output STATIC_WEB_APP_DEFAULT_HOSTNAME string = staticWebApp.properties.defaultHostname

@description('The URL of the deployed Static Web App')
output STATIC_WEB_APP_URL string = 'https://${staticWebApp.properties.defaultHostname}'

@description('The resource ID of the Key Vault')
output KEY_VAULT_RESOURCE_ID string = keyVault.id

@description('The name of the Key Vault')
output KEY_VAULT_NAME string = keyVault.name

@description('The URI of the Key Vault')
output KEY_VAULT_URI string = keyVault.properties.vaultUri

@description('The resource ID of the Application Insights')
output APPLICATION_INSIGHTS_RESOURCE_ID string = applicationInsights.id

@description('The name of the Application Insights')
output APPLICATION_INSIGHTS_NAME string = applicationInsights.name

@description('The connection string for Application Insights')
output APPLICATION_INSIGHTS_CONNECTION_STRING string = applicationInsights.properties.ConnectionString

@description('The resource ID of the Log Analytics workspace')
output LOG_ANALYTICS_WORKSPACE_RESOURCE_ID string = logAnalyticsWorkspace.id

@description('The name of the Log Analytics workspace')
output LOG_ANALYTICS_WORKSPACE_NAME string = logAnalyticsWorkspace.name

@description('The resource ID of the managed identity')
output MANAGED_IDENTITY_RESOURCE_ID string = managedIdentity.id

@description('The name of the managed identity')
output MANAGED_IDENTITY_NAME string = managedIdentity.name

@description('The client ID of the managed identity')
output MANAGED_IDENTITY_CLIENT_ID string = managedIdentity.properties.clientId

@description('The principal ID of the managed identity')
output MANAGED_IDENTITY_PRINCIPAL_ID string = managedIdentity.properties.principalId

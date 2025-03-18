import { manifests as entrypoints } from './entrypoints/manifest';
import { manifests as conditions } from './conditions/manifest';
import { manifests as dashboards } from './dashboards/manifest';
import { manifests as entityActions } from './entityActions/manifest';
import { manifests as userPermissions } from './userpermissions/manifest';
import { manifests as workspaceActions } from './workspaceActions/manifest';
import { manifests as workspaceContexts } from './workspaceContexts/manifest';
import { manifests as workspaceFooterApps } from './workspaceFooterApp/manifest';
//import { manifests as workspaceViews } from './workspaceViews/manifest';

// Job of the bundle is to collate all the manifests from different parts of the extension and load other manifests
// We load this bundle from umbraco-package.json
export const manifests: Array<UmbExtensionManifest> = [
  ...entrypoints,
  ...conditions,
  ...dashboards,
  ...entityActions,
  ...userPermissions,
  ...workspaceActions,
  ...workspaceContexts,
  ...workspaceFooterApps,
  //...workspaceViews, // TODO: Remnember to remove this if we are certain we no longer what this UX
];

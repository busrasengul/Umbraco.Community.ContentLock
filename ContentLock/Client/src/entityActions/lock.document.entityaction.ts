import { UmbControllerHost } from "@umbraco-cms/backoffice/controller-api";
import { UmbEntityActionArgs, UmbEntityActionBase } from "@umbraco-cms/backoffice/entity-action";
import { UMB_NOTIFICATION_CONTEXT, UmbNotificationContext } from "@umbraco-cms/backoffice/notification";
import { ContentLockService } from "../api";
import { CONTENTLOCK_WORKSPACE_CONTEXT, ContentLockWorkspaceContext } from "../workspaceContexts/contentlock.workspace.context";

export class LockDocumentEntityAction extends UmbEntityActionBase<never> {
    
    private _notificationCtx?: UmbNotificationContext;
    private _lockCtx?: ContentLockWorkspaceContext;

    constructor(host: UmbControllerHost, args: UmbEntityActionArgs<never>) {
        super(host, args);

        // Fetch/consume the contexts & assign to the private fields
        this.consumeContext(UMB_NOTIFICATION_CONTEXT, (notificationCtx) => {
            this._notificationCtx = notificationCtx;
        });

        this.consumeContext(CONTENTLOCK_WORKSPACE_CONTEXT, (lockCtx) => {
            this._lockCtx = lockCtx;
            // TODO: Why can I not get this from the tree?
            console.log('TODO: can i GET lock ctx from tree?', lockCtx);
        });
    }

    async execute() {
        if (!this.args.unique) {
            throw new Error("The document unique identifier is missing");
        }

        // Make API call
        const result = await ContentLockService.lockContent({
            path: {
                key: this.args.unique
            }
        });

        // Kaboom notification
        if(!result.response.ok){
            this._notificationCtx?.peek('danger', {
                data: {
                    headline: 'Locking Failed',
                    message: 'Unable to lock document'
                }
            });
            return;
        }

        // Update the context observables with the new state of the document
        this._lockCtx?.setIsLocked(true);
        this._lockCtx?.setIsLockedBySelf(true);
        this._lockCtx?.setLockedByName("TESTING");

        // Success notification
        this._notificationCtx?.peek('positive', {
            data: {
                headline: 'Document Locked',
                message: 'The document has been locked for you to edit.'
            }
        });
    }
}
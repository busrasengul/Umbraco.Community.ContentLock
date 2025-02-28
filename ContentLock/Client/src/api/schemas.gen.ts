// This file is auto-generated by @hey-api/openapi-ts

export const ContentLockOverviewSchema = {
    required: ['items', 'totalResults'],
    type: 'object',
    properties: {
        totalResults: {
            type: 'integer',
            format: 'int32'
        },
        items: {
            type: 'array',
            items: {
                oneOf: [
                    {
                        '$ref': '#/components/schemas/ContentLockOverviewItem'
                    }
                ]
            }
        }
    },
    additionalProperties: false
} as const;

export const ContentLockOverviewItemSchema = {
    required: ['checkedOutBy', 'checkedOutByKey', 'contentType', 'key', 'lastEdited', 'nodeName'],
    type: 'object',
    properties: {
        key: {
            type: 'string',
            format: 'uuid'
        },
        nodeName: {
            type: 'string'
        },
        contentType: {
            type: 'string'
        },
        checkedOutBy: {
            type: 'string'
        },
        checkedOutByKey: {
            type: 'string',
            format: 'uuid'
        },
        lastEdited: {
            type: 'string',
            format: 'date-time'
        }
    },
    additionalProperties: false
} as const;

export const ContentLockStatusSchema = {
    required: ['isLocked', 'lockedByKey', 'lockedBySelf'],
    type: 'object',
    properties: {
        isLocked: {
            type: 'boolean'
        },
        lockedByKey: {
            type: 'string',
            format: 'uuid'
        },
        lockedByName: {
            type: 'string',
            nullable: true
        },
        lockedBySelf: {
            type: 'boolean'
        }
    },
    additionalProperties: false
} as const;

export const EventMessageTypeModelSchema = {
    enum: ['Default', 'Info', 'Error', 'Success', 'Warning'],
    type: 'string'
} as const;

export const NotificationHeaderModelSchema = {
    required: ['category', 'message', 'type'],
    type: 'object',
    properties: {
        message: {
            type: 'string'
        },
        category: {
            type: 'string'
        },
        type: {
            '$ref': '#/components/schemas/EventMessageTypeModel'
        }
    },
    additionalProperties: false
} as const;

export const ProblemDetailsSchema = {
    type: 'object',
    properties: {
        type: {
            type: 'string',
            nullable: true
        },
        title: {
            type: 'string',
            nullable: true
        },
        status: {
            type: 'integer',
            format: 'int32',
            nullable: true
        },
        detail: {
            type: 'string',
            nullable: true
        },
        instance: {
            type: 'string',
            nullable: true
        }
    },
    additionalProperties: {}
} as const;
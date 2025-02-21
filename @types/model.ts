// Base field types supported in components
export type FieldType = "text" | "image" | "number" | "boolean" | "repeatable";

// Standard field definition
export interface FieldDefinition {
  type: FieldType;
  required?: boolean;
}

// Repeatable field definition (nested fields)
export interface RepeatableFieldDefinition extends FieldDefinition {
  type: "repeatable";
  fields: Record<string, FieldDefinition>;
}

// Component model definition (generic)
export interface ComponentModel {
  fields: Record<string, FieldDefinition | RepeatableFieldDefinition>;
}

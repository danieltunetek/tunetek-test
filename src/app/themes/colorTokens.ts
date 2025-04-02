// ../theme/colorTokens.ts

// Import types from the library to ensure compatibility
import {
    ColorCategory,
    ColorTokens as LibraryColorTokens, // Use alias to avoid name clash if needed
  } from 'my-component-library'; // Adjust path if needed
  
  // Define the subset type if needed for documentation/hints
  export type ConsumerColorCategory =
    | 'main' | 'support' | 'neutral' | 'danger' | 'warning' | 'success' | 'info';
  
  // REMOVED the interface ColorTokens as the library type is sufficient
  
  // Typed the export according to the library's ColorTokens type
  export const colorTokens: LibraryColorTokens = {
    main: {
      default: 'var(--main-color-primary-color-main-base-default)',
      hover: 'var(--main-color-primary-color-main-base-hover)',
      active: 'var(--main-color-primary-color-main-base-active)',
      disabled: 'var(--main-color-primary-color-main-base-default)', // Consider a specific disabled color variable
      disabledOpacity: 'var(--semantic-semantic-opacity-disabled)',
    },
    support: {
      default: 'var(--support-color-extra1-color-support-base-default)',
      hover: 'var(--support-color-extra1-color-support-base-hover)',
      active: 'var(--support-color-extra1-color-support-base-active)',
      disabled: 'var(--support-color-extra1-color-support-base-default)',
      disabledOpacity: 'var(--semantic-semantic-opacity-disabled)',
    },
    neutral: {
      default: 'var(--semantic-semantic-color-neutral-base-default)',
      hover: 'var(--semantic-semantic-color-neutral-base-hover)',
      active: 'var(--semantic-semantic-color-neutral-base-active)',
      disabled: 'var(--semantic-semantic-color-neutral-base-default)',
      disabledOpacity: 'var(--semantic-semantic-opacity-disabled)',
    },
    danger: {
      default: 'var(--semantic-semantic-color-danger-base-default)',
      hover: 'var(--semantic-semantic-color-danger-base-hover)',
      active: 'var(--semantic-semantic-color-danger-base-active)',
      disabled: 'var(--semantic-semantic-color-danger-base-default)',
      disabledOpacity: 'var(--semantic-semantic-opacity-disabled)',
    },
    warning: {
      default: 'var(--semantic-semantic-color-warning-base-default)',
      hover: 'var(--semantic-semantic-color-warning-base-hover)',
      active: 'var(--semantic-semantic-color-warning-base-active)',
      disabled: 'var(--semantic-semantic-color-warning-base-default)',
      disabledOpacity: 'var(--semantic-semantic-opacity-disabled)',
    },
    success: {
      default: 'var(--semantic-semantic-color-success-base-default)',
      hover: 'var(--semantic-semantic-color-success-base-hover)',
      active: 'var(--semantic-semantic-color-success-base-active)',
      disabled: 'var(--semantic-semantic-color-success-base-default)',
      disabledOpacity: 'var(--semantic-semantic-opacity-disabled)',
    },
    info: {
      default: 'var(--semantic-semantic-color-info-base-default)',
      hover: 'var(--semantic-semantic-color-info-base-hover)',
      active: 'var(--semantic-semantic-color-info-base-active)',
      disabled: 'var(--semantic-semantic-color-info-base-default)',
      disabledOpacity: 'var(--semantic-semantic-opacity-disabled)',
    },
    // Add any other string keys if needed, or remove if ColorTokens is strictly ColorCategory
  };
  
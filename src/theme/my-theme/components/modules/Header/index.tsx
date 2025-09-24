// src/theme/my-theme/components/modules/Header/index.tsx
import React from 'react';
import { Menu } from '@hubspot/cms-components';
import {
  ImageField,
  MenuField,
  ModuleFields,
} from '@hubspot/cms-components/fields';
import logo from '../../../assets/sprocket.svg';
import '../../../styles/tailwind.css';

export function Component({
  fieldValues,
}: {
  fieldValues: {
    logo?: { src?: string; alt?: string; width?: number; height?: number };
    menu?: string;
  };
}) {
  const { src, alt, width, height } = fieldValues.logo || {};

  return (
    <header className="w-full border-b bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <img
          src={src || logo}
          alt={alt || 'Site logo'}
          width={width || 100}
          height={height || 100}
          className="h-auto max-h-12 w-auto"
        />
        <Menu fieldPath="menu" />
      </nav>
    </header>
  );
}

const DEFAULT_MENU_ID = '<YOUR_DEFAULT_MENU_ID>';

export const fields = (
  <ModuleFields>
    <ImageField
      name="logo"
      label="Logo"
      default={{ src: logo, height: 100, alt: 'Logo for navigation' }}
      resizable
    />
    <MenuField name="menu" label="Menu" default={DEFAULT_MENU_ID} />
  </ModuleFields>
);

export const meta = {
  label: 'Header Module',
};

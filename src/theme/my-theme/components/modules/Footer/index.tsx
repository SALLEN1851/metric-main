// src/theme/my-theme/components/modules/Footer/index.tsx
import { ModuleFields, TextField } from '@hubspot/cms-components/fields';
// Adjust this import path to wherever your Tailwind entry lives:
import '../../../styles/tailwind.css';

export function Component({
  fieldValues,
}: {
  fieldValues: { footerText?: string };
}) {
  const text = (fieldValues?.footerText || '').trim() || 'Be Well.';

  return (
    <footer className="w-full border-t py-6 text-center text-sm text-gray-600">
      <p>{text}</p>
    </footer>
  );
}

export const fields = (
  <ModuleFields>
    <TextField label="Footer Text" name="footerText" default="Be Well." />
  </ModuleFields>
);

export const meta = {
  label: 'Footer Module',
};

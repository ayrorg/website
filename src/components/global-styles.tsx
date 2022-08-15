import { Global } from '@emotion/react';
import { Theme } from 'theme-ui';

export const GlobalStyles: React.FC = () => (
  <Global
    styles={(_: Theme) => ({
      html: { fontSize: '18px' },
      body: { margin: 0 },
      '*': {
        boxSizing: 'border-box',
      },
    })}
  />
);

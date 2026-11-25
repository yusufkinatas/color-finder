import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { Global, ThemeUIProvider } from 'theme-ui'

import { AppError } from './components/app-error'
import { GameLayout } from './components/game-layout'
import { ColorFinder } from './game/color-finder'
import { theme } from './theme/theme'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <ThemeUIProvider theme={theme}>
      <ErrorBoundary FallbackComponent={AppError}>
        <Global
          styles={{
            body: {
              overscrollBehavior: 'none',
              margin: 0,
              backgroundColor: '#000',
              color: '#fff',
              fontFamily:
                'Geist, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
              WebkitFontSmoothing: 'antialiased',
            },
            'a:focus-visible, button:focus-visible': {
              outline: '2px solid #E25F00',
              outlineOffset: 3,
            },
          }}
        />
        <GameLayout>
          <ColorFinder />
        </GameLayout>
      </ErrorBoundary>
    </ThemeUIProvider>
  </React.StrictMode>
)

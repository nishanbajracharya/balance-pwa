import * as darkreader from 'darkreader';
import { useCallback, useEffect, useState } from 'react';

type DarkReaderConfig = Partial<darkreader.Theme>;

let initialized = false;

const defaultDarkModeClass = 'dark-mode';

const defaultDarkReaderConfig = {
  brightness: 100,
  contrast: 90,
  sepia: 0,
};

export function useDarkMode(
  darkModeClass: string = defaultDarkModeClass,
  darkReaderConfig: DarkReaderConfig = defaultDarkReaderConfig
) {
  const [enabled, setEnabled] = useState<boolean>(() => darkreader.isEnabled());

  const applyBodyClass = useCallback(
    (isEnabled: boolean) => {
      document.body.classList.toggle(darkModeClass, isEnabled);
    },
    [darkModeClass]
  );

  const syncState = useCallback(() => {
    const isEnabled = darkreader.isEnabled();
    setEnabled(isEnabled);
    applyBodyClass(isEnabled);
  }, [applyBodyClass]);

  const toggle = useCallback(() => {
    if (darkreader.isEnabled()) {
      darkreader.disable();
    } else {
      darkreader.enable(darkReaderConfig);
    }
    syncState();
  }, [darkReaderConfig, syncState]);

  const enable = useCallback(() => {
    darkreader.enable(darkReaderConfig);
    syncState();
  }, [darkReaderConfig, syncState]);

  const disable = useCallback(() => {
    darkreader.disable();
    syncState();
  }, [syncState]);

  useEffect(() => {
    // Run only once globally
    if (!initialized) {
      darkreader.disable();
      initialized = true;
    }

    syncState();
  }, [darkReaderConfig, syncState]);

  return {
    toggleDarkMode: toggle,
    enableDarkMode: enable,
    disableDarkMode: disable,
    isDarkModeEnabled: enabled,
  };
}

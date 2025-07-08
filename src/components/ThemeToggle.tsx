import React from 'react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded text-sm dark:text-white"
        >
            Toggle {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
}

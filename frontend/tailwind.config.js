/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable manual dark mode toggle
    theme: {
        extend: {
            colors: {
                brand: {
                    light: 'var(--color-brand-light)',
                    DEFAULT: 'var(--color-brand)',
                    dark: 'var(--color-brand-dark)',
                    accent: 'var(--color-brand-accent)',
                    secondary: 'var(--color-brand-secondary)',
                },
                text: {
                    primary: 'var(--color-text-primary)',
                    secondary: 'var(--color-text-secondary)',
                    light: 'var(--color-text-light)',
                },
                surface: {
                    DEFAULT: 'var(--color-surface)',
                    off: 'var(--color-surface-off)',
                    glass: 'var(--color-surface-glass)',
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
            animation: {
                'fade-up': 'fadeUp 0.8s ease-out forwards',
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}

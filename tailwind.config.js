/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                'rose': {
                    50: '#fff1f2',
                    500: '#f43f5e',
                },
                'blue': {
                    400: '#60a5fa',
                },
            },
            fontFamily: {
                'frank': ['Frank Ruhl Libre', 'serif'],
                'poppins': ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
} 
/** @type {import('tailwindcss').Config} */

export const content = [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
    extend: {
        backgroundColor: {
            body: "var(--bg-primary)",
            cardPrimary: "var(--card-primary)",
            btnHighlight: "var(--btn-highlight)",
        },
        colors: {
            highlight: "var(--text-highlight)",
            primary: "var(--text-primary)",
            secondary: "var(--text-secondary)",
            info: "var(--text-info)",
        },
        borderColor: {
            highlight: "var(--btn-highlight)",
        },
    },
};
export const plugins = [];

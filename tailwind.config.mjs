/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          // DEFAULT: "hsl(var(--primary))",
          DEFAULT: "#A37EE6",
          foreground: "hsl(var(--primary-foreground))",
        },
        primaryShades: {
          100: "#DED1F6",
          900: "#3B2D53",
        },
        secondaryShades: {
          900: "#0B1620",
          base: "#1F3E5A",
        },
        gray: {
          100: "#F5F5F5",
          150: "#9E9FA2",
          300: "#D5D7DA",
          500: "#717680",
          700: "#414651",
          900: "#181D27",
        },
        primaryText: {
          DEFAULT: "#00261C",
        },
        success: {
          100: "#D1FADF",
          500: "#12B76A",
        },
        warning: {
          300: "#FEC84B",
          500: "#F79009",
        },
        error: {
          500: "#F04438",
        },
        "accent-shades": {
          300: "#EEEEEE",
          500: "#E6E6E6",
          700: "#9C9C9C",
          900: "#535353",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

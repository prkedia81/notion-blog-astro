/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blueGray: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        darkCoolGray: {
          50: "#F5F6F7",
          100: "#EBEDEF",
          200: "#CED1D6",
          300: "#B0B5BD",
          400: "#757E8C",
          500: "#3A475B",
          600: "#344052",
          700: "#2C3544",
          800: "#232B37",
          900: "#1C232D",
        },
        coolGray: {
          50: "#F7F8F9",
          100: "#EEF0F3",
          200: "#D5DAE1",
          300: "#BBC3CF",
          400: "#8896AB",
          500: "#556987",
          600: "#4D5F7A",
          700: "#404F65",
          800: "#333F51",
          900: "#2A3342",
        },
        trueGray: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      blur: {
        0: "0",
        none: "0",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px",
      },
      fontFamily: {
        body: '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        heading:
          '"Outfit", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        sans: '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "3xl": "0px 14px 44px rgba(0, 0, 0, 0.2)",
        "4xl": "0px 14.031px 54.1195px rgba(0, 0, 0, 0.1)",
        "5xl": "0px 42.4441px 61.3082px rgba(0, 0, 0, 0.08)",
        "6xl": "0px 44px 94px rgba(0, 0, 0, 0.06)",
        "7xl": "0px 34px 64px rgba(0, 0, 0, 0.08)",
        "8xl": "0px 44px 24px rgba(0, 0, 0, 0.04)",
        "9xl": "0px 25px 70px rgba(0, 0, 0, 0.12)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        none: "none",
      },
      backgroundImage: {
        none: "none",
        "gradient-white":
          "linear-gradient(112.84deg, #FFFFFF 0.33%, #EDF5F2 100%)",
        "gradient-indigo":
          "linear-gradient(98.24deg, #5D75F3 0%, #A279F9 100%)",
        "gradient-fuchsia":
          "linear-gradient(112.84deg, #46BAEB 0.33%, #AF2CFF 38.23%, #F790AF 65.22%, #C1ABFF 100%)",
        "gradient-blue2":
          "linear-gradient(90.41deg, #E0E7FF 0.25%, rgba(224, 231, 255, 0) 99.64%)",
        "gradient-orange":
          "linear-gradient(98.24deg, #FFB36D 0%, #EC5353 100%)",
        "gradient-purple2":
          "linear-gradient(98.24deg, #F39682 0.01%, #7446F7 100%)",
        "gradient-black2":
          "linear-gradient(133.11deg, #18181B 0%, #2E2E33 100%)",
        "gradient-orange2":
          "linear-gradient(98.24deg, #EC5353 0%, #FFB36D 100%)",
        "gradient-blue": "linear-gradient(98.24deg, #56C1E3 0%, #5B6AF0 100%)",
        "gradient-purple":
          "linear-gradient(98.24deg, #6C2DD1 0%, #FF7DBC 100%)",
        "gradient-violet2":
          "linear-gradient(98.24deg, #FF9483 0%, #FFCBA4 0.01%, #8479F9 100%)",
        "gradient-cyan":
          "linear-gradient(90deg, rgba(108,213,246,1) 0%, rgba(248,157,92,1) 50%, rgba(91,106,240,1) 100%)",
        "gradient-cyan2":
          "linear-gradient(98.24deg, #6CD5F7 0%, #FEE2CE 35.94%, #B0A9DF 69.27%, #5B6AF0 100%)",
        "gradient-black":
          "linear-gradient(98.24deg, #212121 0.01%, #1D1D1D 100%)",
        "gradient-red": "linear-gradient(98.24deg, #FF9483 0%, #F17980 100%)",
        "gradient-green": "linear-gradient(98.24deg, #CEE9C1 0%, #83C8DE 100%)",
        "gradient-violet":
          "linear-gradient(98.24deg, #E0AEF8 1.56%, #3168F5 100%)",
        "gradient-pink":
          "linear-gradient(98.24deg, #FAF5F4 0%, #F4E3E4 55.95%, #F0D5D7 100%)",
        "gradient-pink2":
          "linear-gradient(112.84deg, #FFFFFF 0.33%, #EEDFEF 100%)",
        "gradient-gray":
          "linear-gradient(125.68deg, #F4F4F5 0.59%, #FBFBFB 100%)",
        "gradient-gray2":
          "linear-gradient(98.24deg, #FFFFFF 0%, #F9F9FF 47.4%, #EBECF7 100%)",
        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
        "gradient-to-tr":
          "linear-gradient(to top right, var(--tw-gradient-stops))",
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
        "gradient-to-br":
          "linear-gradient(to bottom right, var(--tw-gradient-stops))",
        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
        "gradient-to-bl":
          "linear-gradient(to bottom left, var(--tw-gradient-stops))",
        "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
        "gradient-to-tl":
          "linear-gradient(to top left, var(--tw-gradient-stops))",
      },
      transitionDelay: {
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
      },
      transitionDuration: {
        DEFAULT: "150ms",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
      },
      transitionProperty: {
        none: "none",
        all: "all",
        DEFAULT:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        colors: "background-color, border-color, color, fill, stroke",
        opacity: "opacity",
        shadow: "box-shadow",
        transform: "transform",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        linear: "linear",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

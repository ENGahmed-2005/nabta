/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#155EEF",
          dim: "#E8EFFE",
        },
        red: {
          DEFAULT: "#E53935",
          dim: "#FCEAEA",
        },
        canvas: "#F8F9FB",
        surface: "#FFFFFF",
        ink: "#111827",
        muted: "#667085",
        line: "#E4E7EC",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        serif: ["'Fraunces'", "Georgia", "serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        shell: "1240px",
      },
      transitionTimingFunction: {
        nabta: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

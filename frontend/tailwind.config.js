/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    //「src」ディレクトリを使用する場合:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {},
    },
  },
  //Tailwind CSSを使う際に起きるHTMLタグのデフォルトスタイルのリセットを無効化(併用可能に)
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};

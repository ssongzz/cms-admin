/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // Tailwind의 class이름이 포함된 파일에 대한 경로를 구성하는 부분을 추가합니다.
        // src경로 내부에 자바스크립트, 타입스크립트, jsx를 리턴하는 파일들을 모두 작성 해줍니다.
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#7f43f5",
                    1: "#9364f2"
                }
            }
        },
    },
    plugins: [],
}

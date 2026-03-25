1. write a div to insert in footer to display social icons like google, twitter, github, linkedIn, instagram

2. rel="noopener noreferrer" 
what does it mean

3. C:\Users\91746\Desktop\DESKTOP\PRODESK\my-react-app>npx tailwindcss -i ./index.css -o ./App.css --watch
npm error could not determine executable to run
npm error A complete log of this run can be found in: C:\Users\91746\AppData\Local\npm-cache\_logs\2026-03-25T22_03_25_697Z-debug-0.log
how to resolve this error

4. write the file postcss.config.js. is it required btw

5. C:\Users\91746\Desktop\DESKTOP\PRODESK\my-react-app>npm i tailwindcss/postcss 
npm error code 128
npm error An unknown git error occurred
npm error command git --no-replace-objects ls-remote ssh://git@github.com/tailwindcss/postcss.git
npm error Warning: Permanently added 'github.com' (ED25519) to the list of known hosts.
npm error git@github.com: Permission denied (publickey).
npm error fatal: Could not read from remote repository.
npm error
npm error Please make sure you have the correct access rights
npm error and the repository exists.
npm error A complete log of this run can be found in: C:\Users\91746\AppData\Local\npm-cache\_logs\2026-03-25T22_12_06_126Z-debug-0.log

6. error: [plugin:vite:css] [postcss] It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin. The PostCSS plugin has moved to a separate package, so to continue using Tailwind CSS with PostCSS you'll need to install `@tailwindcss/postcss` and update your PostCSS configuration.

7. this is postcss.config.js:
    export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
}
any change to make in this file

8. npx tailwindcss -i ./src/index.css -o ./src/App.css --watch
if i don't run this command, then what to add as css file in index.html

9. in hero section, i want all three div vertically, means heaing text, sub-heading text and get started button on above of each other

10. i want to reduce width of text as it is stretched to the device width. i want to make it viewable being good

11. zooming in of text on hovering

12. write the readme.md file for my project which is a landing page having 4 sections: Navbar, Hero, Services, Footer

13. how to push the whole folder into github using terminal commands

14. how to improve lighthouse score

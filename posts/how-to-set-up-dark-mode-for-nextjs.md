---
title: "🌙 How to set up dark mode with Nextjs, Typescript and Sass"
date: "2020-02-10"
---
![Image of a gruvbox based desktop](/posts/gruvbox.png)
## Introduction
I love [gruvbox](https://github.com/morhetz/gruvbox)! You can probably tell by
colorscheme of this site. I went to great lengths to get dark mode to work (dat aesthetic grind) 
jnd I'd like to share how I did it! 😃

### Prerequisite
Familar with Typescript, Nextjs and a bit of Sass

Are you as keen as I am 😀? Let's go!

## Instructions
### Step 1 - Download dependencies from npm
Install `next-themes`.
```bash
npm install next-themes --save
```

### Step 2 - Import dependencies into _app.tsx
Import the dependencies into our project into `pages/_app.tsx`.
```typescript
// pages/_app.tsx

import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
  ) 
}
```

_**PS: ** If you don't have an \_app.tsx in your nextjs, you can make one and add the 
following code snippet._

### Step 3 - Add your colors to a global css/scss file
Update the global css/scss file to include these colors

```scss
// styles/global.scss

:root {
  --background: white;
  --foreground: black; 
}

[data-theme='dark'] {
  --background: black;
  --foreground: white; 

html,
body {
  color: var(--foreground);
  background: var(--background); 
  transition: all 0.20s linear; 
}
```

**PS:** The  `transition: all 0.20s` linear  animation cause it smooth.
**PSS:** If you like Gruvbox dark theme setting, I attached to the bottom
an appendix (Appendix A) that has all the color settings!

Now that you have a global css/scss file, we'll need to import it into our \_app.tsx file!

### Step 4 - Import the css/scss file into \_app.tsx
After you've played around with the color schemes, you'll need to import it into `\_app.tsx`.

```typescript
// pages/_app.tsx

import "styles/global.scss"
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
  ) 
}
```

_**PS: ** We'll need to import all our global css/scss here in the _app.tsx file._

### Step 5 - Toggling theme with useTheme()
To use it inside our application, we'll need a way to access it from the frnot-end. We can use the `useTheme` webhook to do so. In this implementation, I created a toggle button on the layout component.

```typescript
// components/layout.tsx

import { useTheme } from 'next-themes'

export default function Layout({ children }) {

  const {theme, setTheme} = useTheme()

	const toggleTheme = () => {
		if (theme == "light") {
			setTheme('dark')
		} else {
			settheme('light)
		}
	}

	return (
		<>
			<header>
				<button onClick={toggleTheme} >Theme toggle</button>
			</header>
			<main>
				{children}
			</main>
			<footer>
				I'm a footer
			</footer>
		</>
	)
}

```

## Conclusion
And that's it! Hopefully these steps help you with enabling dark mode on your sites! 

If you have any questions, feel free to reach out to me on twitter @kndwindev.

### Related readings
1. [ next-themes ]( https://github.com/pacocoursey/next-themes )
2. [ app.jsx/tsx ]( https://nextjs.org/docs/advanced-features/custom-app ) 
3. [ gruvbox color scheme ]( https://github.com/morhetz/gruvbox )

### Appendix A - Gruvbox settings
**`styles/global.scss`**
```scss
@import './colors'; 

:root {
  --background: white; //background color being #fbf1c7 was too strong
	--background1: #{$light1}; 
	--background2: #{$light2}; 
	--background3: #{$light3}; 
  --foreground: #{$dark0}; 
  --foreground1: #{$dark1}; 
  --foreground2: #{$dark2}; 
  --foreground3: #{$dark3}; 
  --grey: #{$grey};

  --aqua: #{$aqua-dark};
  --aqua2: #{$aqua-light};
  --blue: #{$blue-dark};
  --blue2: #{$blue-light};
  --red: #{$red-dark};
  --red2: #{$red-light}; 
  --green: #{$green-dark};
  --green2: #{$green-light};
	--yellow: #{$yellow-dark};
	--yellow2: #{$yellow-light}; 
	--orange: #{$orange-dark};
	--orange2: #{$orange-light};
	--purple: #{$purple-dark};
	--purple2: #{$purple-light};
}

[data-theme='dark'] {
  --background: #{$dark0};
	--background1: #{$dark1}; 
	--background2: #{$dark2}; 
	--background3: #{$dark3}; 
  --foreground: #{$light0}; 
  --foreground1: #{$light1}; 
  --foreground2: #{$light2}; 
  --foreground3: #{$light3}; 
  --grey: #{$grey};

  --aqua: #{$aqua-light}; 
  --aqua2: #{$aqua-dark};
  --blue: #{$blue-light}; 
  --blue2: #{$blue-dark}; 
  --red: #{$red-light}; 
  --red2: #{$red-dark}; 
  --green: #{$green-light};
  --green2: #{$green-dark};
	--yellow: #{$yellow-light}; 
	--yellow2: #{$yellow-dark}; 
	--orange: #{$orange-light}; 
	--orange2: #{$orange-dark}; 
	--purple: #{$purple-light}; 
	--purple2: #{$purple-dark}; 
}
```

**`styles/colors.scss`**
```scss
$dark0: #282828;
$dark1: #504945;
$dark2: #7c6f64;
$dark3: #ebdbb2;
$light0: #fbf1c7;
$light1: #ebdbb2;
$light2: #d5c4a1;
$light3: #bfae93;
$blue: #458588;
$blue-dark: #076678;
$blue-light: #83a598;
$red: #cc241d; 
$red-dark: #9d0006; 
$red-light: #fb4934; 
$aqua: #689d6a; 
$aqua-dark: #427b48; 
$aqua-light: #8ec07c; 
$green: #98971a;
$green-dark: #79740e; 
$green-light: #b8bb26; 
$yellow: #d79921;
$yellow-dark: #b57614; 
$yellow-light: #fabd2f; 
$orange: #d65d0e; 
$orange-dark: #af3a03; 
$orange-light: #fe8019; 
$purple: #b16286;
$purple-dark: #8f3f71; 
$purple-light: #d3869b;
$grey: #928374;
```

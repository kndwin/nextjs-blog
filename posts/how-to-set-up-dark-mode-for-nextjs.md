---
title: "[WIP] How to set up dark mode with Nextjs"
date: "2020-02-10"
---
![Image of a gruvbox based desktop](/posts/gruvbox.png)
## Introduction
I love [gruvbox](https://github.com/morhetz/gruvbox)! You can probably tell by
colorscheme of this site. I went to great lengths to get dark mode to work and
I'd like to share how I did it.

### Step 1 - Download dependecies from npm
```bash
npm install next-themes --save
```

I tried to find a way to do this without dependecies but it turns out this was
the easiest way to maniplate css variables at the root level.

### Step 2 - Import dependecies into _app.tsx

```typescript
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

If you don't have an \_app.tsx in your nextjs, you can make one and add the 
following code snippet. 

### Step 3 - Add your colors to a global css/scss file
We're nearly there! now we'll need to update the global css/scss file to
include these colors

**(PS)** I quite like the  **`transition: all 0.20s linear;`**  animation cause 
it so smooth.
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

(Optional): If you like Gruvbox dark theme setting, I attached to the bottom
an appendix (Appendix A) that has all the color settings!

Now that you have a global css/scss file, we'll need to import it into  
`_app.tst`
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
We're nearly there! Only one step to go
### Step 4 - Toggling theme with useTheme()
```typescript
import { useTheme } from 'next-themes'

export default function Layout() {

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
			<button onClick={toggleTheme} >Theme toggle</button>
		</>
	)
}

```
## Appendix A - Gruvbox settings
- `styles/global.scss`
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

- `styles/colors.scss`
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

## The Sock Kingdom - A Vue Prismic Site

### Purpose

Develop a basic website using Prismic and Vue 3 that uses Vue Router and Route Resolver to create a dynamic Navigation menu.

### About the website

The Sock Kingdom website contains three blog posts about buying socks which are displayed on the homepage using a Recent Posts slice. There is also a Posts page which uses pagination to show all blog posts.

The HTML serializer was used to render `h2` elements as Pig Latin via the [`piglatin`](https://github.com/montanaflynn/piglatin) module and code snippet field as a `code` element via the codespan custom label.

The blog post content was generated via [ChatGPT](https://openai.com/blog/chatgpt) and author profiles using [AI Writer](https://tools.picsart.com/text/ai-writer). All blog post images were taken from [Unsplash](https://unsplash.com).

Two Vite plugins were used to add extra functionality. [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) adds support for file system routing and [`vite-plugin-webfont-dl`](https://github.com/feat-agency/vite-plugin-webfont-dl) improved performance of importing Google Fonts.

### Screenshot

![The Sock Kingdom Website Screenshot](https://github.com/louisefindlay23/sk-vue/assets/26024131/dd80e131-4867-4dd2-82fb-9c25937a09d7)

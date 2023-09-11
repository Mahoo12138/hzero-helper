// ==UserScript==
// @name       hzero-helper
// @namespace  npm/vite-plugin-monkey
// @version    0.0.3
// @author     monkey
// @icon       https://vitejs.dev/logo.svg
// @match      https://*.56mada.com/*
// @match      http://localhost:8000/*
// @require    https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js
// @require    https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js
// @grant      none
// ==/UserScript==

(e=>{const t=document.createElement("style");t.dataset.source="vite-plugin-monkey",t.textContent=e,document.head.append(t)})(' *,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}:root{--background: 0 0% 100%;--foreground: 222.2 84% 4.9%;--muted: 210 40% 96.1%;--muted-foreground: 215.4 16.3% 46.9%;--popover: 0 0% 100%;--popover-foreground: 222.2 84% 4.9%;--card: 0 0% 100%;--card-foreground: 222.2 84% 4.9%;--border: 214.3 31.8% 91.4%;--input: 214.3 31.8% 91.4%;--primary: 222.2 47.4% 11.2%;--primary-foreground: 210 40% 98%;--secondary: 210 40% 96.1%;--secondary-foreground: 222.2 47.4% 11.2%;--accent: 210 40% 96.1%;--accent-foreground: 222.2 47.4% 11.2%;--destructive: 0 84.2% 60.2%;--destructive-foreground: 210 40% 98%;--ring: 215 20.2% 65.1%;--radius: 12px}*{border-color:hsl(var(--border))}body{background-color:hsl(var(--background));color:hsl(var(--foreground))}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%;margin-right:auto;margin-left:auto;padding-right:2rem;padding-left:2rem}@media (min-width: 1400px){.container{max-width:1400px}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.fixed{position:fixed}.absolute{position:absolute}.inset-0{inset:0px}.inset-x-0{left:0px;right:0px}.inset-y-0{top:0px;bottom:0px}.bottom-0{bottom:0px}.left-0{left:0px}.left-\\[50\\%\\]{left:50%}.right-0{right:0px}.right-\\[16px\\]{right:16px}.right-\\[25px\\]{right:25px}.top-0{top:0px}.top-\\[16px\\]{top:16px}.top-\\[25px\\]{top:25px}.top-\\[50\\%\\]{top:50%}.z-50{z-index:50}.\\!mt-\\[10px\\]{margin-top:10px!important}.\\!mt-\\[16px\\]{margin-top:16px!important}.mt-4{margin-top:1rem}.mt-\\[20px\\]{margin-top:20px}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-\\[10px\\]{height:10px}.h-\\[20px\\]{height:20px}.h-\\[24px\\]{height:24px}.h-\\[25px\\]{height:25px}.h-\\[28px\\]{height:28px}.h-\\[40px\\]{height:40px}.h-full{height:100%}.w-1\\/4{width:25%}.w-10{width:2.5rem}.w-3\\/4{width:75%}.w-\\[20px\\]{width:20px}.w-\\[24px\\]{width:24px}.w-\\[44px\\]{width:44px}.w-\\[60px\\]{width:60px}.w-full{width:100%}.max-w-lg{max-width:32rem}.shrink-0{flex-shrink:0}.caption-bottom{caption-side:bottom}.translate-x-\\[-50\\%\\]{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[-50\\%\\]{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-center{align-items:center}.justify-center{justify-content:center}.gap-4{gap:1rem}.gap-\\[10px\\]{gap:10px}.gap-\\[16px\\]{gap:16px}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.375rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.375rem * var(--tw-space-y-reverse))}.overflow-auto{overflow:auto}.whitespace-nowrap{white-space:nowrap}.rounded-\\[16px\\]{border-radius:16px}.rounded-\\[5px\\]{border-radius:5px}.rounded-full{border-radius:9999px}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.border{border-width:1px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-r{border-right-width:1px}.border-t{border-top-width:1px}.border-input{border-color:hsl(var(--input))}.border-transparent{border-color:transparent}.bg-background{background-color:hsl(var(--background))}.bg-background\\/80{background-color:hsl(var(--background) / .8)}.bg-destructive{background-color:hsl(var(--destructive))}.bg-primary{background-color:hsl(var(--primary))}.bg-secondary{background-color:hsl(var(--secondary))}.p-6{padding:1.5rem}.p-\\[10px\\]{padding:10px}.p-\\[20px\\]{padding:20px}.px-8{padding-left:2rem;padding-right:2rem}.px-\\[10px\\]{padding-left:10px;padding-right:10px}.px-\\[12px\\]{padding-left:12px;padding-right:12px}.px-\\[16px\\]{padding-left:16px;padding-right:16px}.px-\\[18px\\]{padding-left:18px;padding-right:18px}.py-\\[10px\\]{padding-top:10px;padding-bottom:10px}.py-\\[16px\\]{padding-top:16px;padding-bottom:16px}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.align-middle{vertical-align:middle}.text-md{font-size:14px}.text-sm{font-size:12px}.text-xl{font-size:16px}.text-xxl{font-size:20px}.font-medium{font-weight:500}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.text-\\[\\#ccc\\]{--tw-text-opacity: 1;color:rgb(204 204 204 / var(--tw-text-opacity))}.text-destructive-foreground{color:hsl(var(--destructive-foreground))}.text-foreground{color:hsl(var(--foreground))}.text-muted-foreground{color:hsl(var(--muted-foreground))}.text-primary{color:hsl(var(--primary))}.text-primary-foreground{color:hsl(var(--primary-foreground))}.text-secondary-foreground{color:hsl(var(--secondary-foreground))}.underline-offset-4{text-underline-offset:4px}.opacity-70{opacity:.7}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.ring-0{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-offset-background{--tw-ring-offset-color: hsl(var(--background))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-sm{--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}@keyframes enter{0%{opacity:var(--tw-enter-opacity, 1);transform:translate3d(var(--tw-enter-translate-x, 0),var(--tw-enter-translate-y, 0),0) scale3d(var(--tw-enter-scale, 1),var(--tw-enter-scale, 1),var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity, 1);transform:translate3d(var(--tw-exit-translate-x, 0),var(--tw-exit-translate-y, 0),0) scale3d(var(--tw-exit-scale, 1),var(--tw-exit-scale, 1),var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))}}.duration-200{animation-duration:.2s}.ease-in-out{animation-timing-function:cubic-bezier(.4,0,.2,1)}.file\\:border-0::file-selector-button{border-width:0px}.file\\:bg-transparent::file-selector-button{background-color:transparent}.file\\:text-sm::file-selector-button{font-size:12px}.file\\:font-medium::file-selector-button{font-weight:500}.placeholder\\:text-muted-foreground::-moz-placeholder{color:hsl(var(--muted-foreground))}.placeholder\\:text-muted-foreground::placeholder{color:hsl(var(--muted-foreground))}.hover\\:bg-\\[hsla\\(0\\,0\\%\\,100\\%\\,\\.1\\)\\]:hover{background-color:#ffffff1a}.hover\\:bg-accent:hover{background-color:hsl(var(--accent))}.hover\\:bg-destructive\\/90:hover{background-color:hsl(var(--destructive) / .9)}.hover\\:bg-muted\\/50:hover{background-color:hsl(var(--muted) / .5)}.hover\\:bg-primary\\/90:hover{background-color:hsl(var(--primary) / .9)}.hover\\:bg-secondary\\/80:hover{background-color:hsl(var(--secondary) / .8)}.hover\\:text-accent-foreground:hover{color:hsl(var(--accent-foreground))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-ring:focus{--tw-ring-color: hsl(var(--ring))}.focus\\:ring-offset-2:focus{--tw-ring-offset-width: 2px}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-ring:focus-visible{--tw-ring-color: hsl(var(--ring))}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width: 2px}.focus-visible\\:ring-offset-background:focus-visible{--tw-ring-offset-color: hsl(var(--background))}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.peer:disabled~.peer-disabled\\:cursor-not-allowed{cursor:not-allowed}.peer:disabled~.peer-disabled\\:opacity-70{opacity:.7}.data-\\[state\\=checked\\]\\:translate-x-\\[20px\\][data-state=checked]{--tw-translate-x: 20px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=checked\\]\\:bg-primary[data-state=checked]{background-color:hsl(var(--primary))}.data-\\[state\\=open\\]\\:bg-accent[data-state=open]{background-color:hsl(var(--accent))}.data-\\[state\\=open\\]\\:bg-secondary[data-state=open]{background-color:hsl(var(--secondary))}.data-\\[state\\=selected\\]\\:bg-muted[data-state=selected]{background-color:hsl(var(--muted))}.data-\\[state\\=unchecked\\]\\:bg-input[data-state=unchecked]{background-color:hsl(var(--input))}.data-\\[state\\=open\\]\\:text-muted-foreground[data-state=open]{color:hsl(var(--muted-foreground))}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{transition-duration:.3s}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{transition-duration:.5s}.data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial}.data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation-name:exit;animation-duration:.15s;--tw-exit-opacity: initial;--tw-exit-scale: initial;--tw-exit-rotate: initial;--tw-exit-translate-x: initial;--tw-exit-translate-y: initial}.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity: 0}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity: 0}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale: .95}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale: .95}.data-\\[state\\=closed\\]\\:slide-out-to-bottom[data-state=closed]{--tw-exit-translate-y: 100%}.data-\\[state\\=closed\\]\\:slide-out-to-left[data-state=closed]{--tw-exit-translate-x: -100%}.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state=closed]{--tw-exit-translate-x: -50%}.data-\\[state\\=closed\\]\\:slide-out-to-right[data-state=closed]{--tw-exit-translate-x: 100%}.data-\\[state\\=closed\\]\\:slide-out-to-top[data-state=closed]{--tw-exit-translate-y: -100%}.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state=closed]{--tw-exit-translate-y: -48%}.data-\\[state\\=open\\]\\:slide-in-from-bottom[data-state=open]{--tw-enter-translate-y: 100%}.data-\\[state\\=open\\]\\:slide-in-from-left[data-state=open]{--tw-enter-translate-x: -100%}.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state=open]{--tw-enter-translate-x: -50%}.data-\\[state\\=open\\]\\:slide-in-from-right[data-state=open]{--tw-enter-translate-x: 100%}.data-\\[state\\=open\\]\\:slide-in-from-top[data-state=open]{--tw-enter-translate-y: -100%}.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state=open]{--tw-enter-translate-y: -48%}.data-\\[state\\=closed\\]\\:duration-300[data-state=closed]{animation-duration:.3s}.data-\\[state\\=open\\]\\:duration-500[data-state=open]{animation-duration:.5s}@media (min-width: 640px){.sm\\:max-w-sm{max-width:24rem}.sm\\:flex-row{flex-direction:row}.sm\\:justify-end{justify-content:flex-end}.sm\\:space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.sm\\:rounded-lg{border-radius:var(--radius)}.sm\\:text-left{text-align:left}}@media (min-width: 768px){.md\\:w-1\\/3{width:33.333333%}}.\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:pr-0:has([role=checkbox]){padding-right:0}.\\[\\&_tr\\:last-child\\]\\:border-0 tr:last-child{border-width:0px}.\\[\\&_tr\\]\\:border-b tr{border-bottom-width:1px} ');

(function (React, require$$0) {
  'use strict';

  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const k in e) {
        if (k !== 'default') {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }

  const React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f = React, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a)
      m$1.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps)
      for (b in a = c.defaultProps, a)
        void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  {
    jsxRuntime.exports = reactJsxRuntime_production_min;
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  var client = {};
  var m = require$$0;
  {
    client.createRoot = m.createRoot;
    client.hydrateRoot = m.hydrateRoot;
  }
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return function handleEvent(event) {
      originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
      if (checkForDefaultPrevented === false || !event.defaultPrevented)
        return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
    };
  }
  function $6ed0406888f73fc4$var$setRef(ref, value) {
    if (typeof ref === "function")
      ref(value);
    else if (ref !== null && ref !== void 0)
      ref.current = value;
  }
  function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
    return (node) => refs.forEach(
      (ref) => $6ed0406888f73fc4$var$setRef(ref, node)
    );
  }
  function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
    return React.useCallback($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
  }
  function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
      const BaseContext = /* @__PURE__ */ React.createContext(defaultContext);
      const index2 = defaultContexts.length;
      defaultContexts = [
        ...defaultContexts,
        defaultContext
      ];
      function Provider(props) {
        const { scope, children, ...context } = props;
        const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
        const value = React.useMemo(
          () => context,
          Object.values(context)
        );
        return /* @__PURE__ */ React.createElement(Context.Provider, {
          value
        }, children);
      }
      function useContext$1(consumerName, scope) {
        const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
        const context = React.useContext(Context);
        if (context)
          return context;
        if (defaultContext !== void 0)
          return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
      }
      Provider.displayName = rootComponentName + "Provider";
      return [
        Provider,
        useContext$1
      ];
    }
    const createScope = () => {
      const scopeContexts = defaultContexts.map((defaultContext) => {
        return /* @__PURE__ */ React.createContext(defaultContext);
      });
      return function useScope(scope) {
        const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
        return React.useMemo(
          () => ({
            [`__scope${scopeName}`]: {
              ...scope,
              [scopeName]: contexts
            }
          }),
          [
            scope,
            contexts
          ]
        );
      };
    };
    createScope.scopeName = scopeName;
    return [
      $c512c27ab02ef895$export$fd42f52fd3ae1109,
      $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
    ];
  }
  function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1)
      return baseScope;
    const createScope1 = () => {
      const scopeHooks = scopes.map(
        (createScope) => ({
          useScope: createScope(),
          scopeName: createScope.scopeName
        })
      );
      return function useComposedScopes(overrideScopes) {
        const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
          const scopeProps = useScope(overrideScopes);
          const currentScope = scopeProps[`__scope${scopeName}`];
          return {
            ...nextScopes,
            ...currentScope
          };
        }, {});
        return React.useMemo(
          () => ({
            [`__scope${baseScope.scopeName}`]: nextScopes1
          }),
          [
            nextScopes1
          ]
        );
      };
    };
    createScope1.scopeName = baseScope.scopeName;
    return createScope1;
  }
  const $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? React.useLayoutEffect : () => {
  };
  const $1746a345f3d73bb7$var$useReactId = React__namespace["useId".toString()] || (() => void 0);
  let $1746a345f3d73bb7$var$count = 0;
  function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
    const [id, setId] = React__namespace.useState($1746a345f3d73bb7$var$useReactId());
    $9f79659886946c16$export$e5c5a5f917a5871c(() => {
      if (!deterministicId)
        setId(
          (reactId) => reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
        );
    }, [
      deterministicId
    ]);
    return deterministicId || (id ? `radix-${id}` : "");
  }
  function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
    const callbackRef = React.useRef(callback);
    React.useEffect(() => {
      callbackRef.current = callback;
    });
    return React.useMemo(
      () => (...args) => {
        var _callbackRef$current;
        return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
      },
      []
    );
  }
  function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop, defaultProp, onChange = () => {
  } }) {
    const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
      defaultProp,
      onChange
    });
    const isControlled = prop !== void 0;
    const value1 = isControlled ? prop : uncontrolledProp;
    const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
    const setValue = React.useCallback((nextValue) => {
      if (isControlled) {
        const setter = nextValue;
        const value = typeof nextValue === "function" ? setter(prop) : nextValue;
        if (value !== prop)
          handleChange(value);
      } else
        setUncontrolledProp(nextValue);
    }, [
      isControlled,
      prop,
      setUncontrolledProp,
      handleChange
    ]);
    return [
      value1,
      setValue
    ];
  }
  function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
    const uncontrolledState = React.useState(defaultProp);
    const [value] = uncontrolledState;
    const prevValueRef = React.useRef(value);
    const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
    React.useEffect(() => {
      if (prevValueRef.current !== value) {
        handleChange(value);
        prevValueRef.current = value;
      }
    }, [
      value,
      prevValueRef,
      handleChange
    ]);
    return uncontrolledState;
  }
  const $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React.Children.toArray(children);
    const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React.Children.count(newElement) > 1)
            return React.Children.only(null);
          return /* @__PURE__ */ React.isValidElement(newElement) ? newElement.props.children : null;
        } else
          return child;
      });
      return /* @__PURE__ */ React.createElement($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
        ref: forwardedRef
      }), /* @__PURE__ */ React.isValidElement(newElement) ? /* @__PURE__ */ React.cloneElement(newElement, void 0, newChildren) : null);
    }
    return /* @__PURE__ */ React.createElement($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
      ref: forwardedRef
    }), children);
  });
  $5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = "Slot";
  const $5e63c961fc1ce211$var$SlotClone = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (/* @__PURE__ */ React.isValidElement(children))
      return /* @__PURE__ */ React.cloneElement(children, {
        ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
        ref: forwardedRef ? $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref) : children.ref
      });
    return React.Children.count(children) > 1 ? React.Children.only(null) : null;
  });
  $5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
  const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) => {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, children);
  };
  function $5e63c961fc1ce211$var$isSlottable(child) {
    return /* @__PURE__ */ React.isValidElement(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
  }
  function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
    const overrideProps = {
      ...childProps
    };
    for (const propName in childProps) {
      const slotPropValue = slotProps[propName];
      const childPropValue = childProps[propName];
      const isHandler = /^on[A-Z]/.test(propName);
      if (isHandler) {
        if (slotPropValue && childPropValue)
          overrideProps[propName] = (...args) => {
            childPropValue(...args);
            slotPropValue(...args);
          };
        else if (slotPropValue)
          overrideProps[propName] = slotPropValue;
      } else if (propName === "style")
        overrideProps[propName] = {
          ...slotPropValue,
          ...childPropValue
        };
      else if (propName === "className")
        overrideProps[propName] = [
          slotPropValue,
          childPropValue
        ].filter(Boolean).join(" ");
    }
    return {
      ...slotProps,
      ...overrideProps
    };
  }
  const $8927f6f2acc4f386$var$NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul"
  ];
  const $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
    const Node = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
      const { asChild, ...primitiveProps } = props;
      const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
      React.useEffect(() => {
        window[Symbol.for("radix-ui")] = true;
      }, []);
      return /* @__PURE__ */ React.createElement(Comp, _extends({}, primitiveProps, {
        ref: forwardedRef
      }));
    });
    Node.displayName = `Primitive.${node}`;
    return {
      ...primitive,
      [node]: Node
    };
  }, {});
  function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
    if (target)
      require$$0.flushSync(
        () => target.dispatchEvent(event)
      );
  }
  function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
    const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp);
    React.useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === "Escape")
          onEscapeKeyDown(event);
      };
      ownerDocument.addEventListener("keydown", handleKeyDown);
      return () => ownerDocument.removeEventListener("keydown", handleKeyDown);
    }, [
      onEscapeKeyDown,
      ownerDocument
    ]);
  }
  const $5cb92bef7577960e$var$CONTEXT_UPDATE = "dismissableLayer.update";
  const $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
  const $5cb92bef7577960e$var$FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
  let $5cb92bef7577960e$var$originalBodyPointerEvents;
  const $5cb92bef7577960e$var$DismissableLayerContext = /* @__PURE__ */ React.createContext({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
  });
  const $5cb92bef7577960e$export$177fb62ff3ec1f22 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    var _node$ownerDocument;
    const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
    const context = React.useContext($5cb92bef7577960e$var$DismissableLayerContext);
    const [node1, setNode] = React.useState(null);
    const ownerDocument = (_node$ownerDocument = node1 === null || node1 === void 0 ? void 0 : node1.ownerDocument) !== null && _node$ownerDocument !== void 0 ? _node$ownerDocument : globalThis === null || globalThis === void 0 ? void 0 : globalThis.document;
    const [, force] = React.useState({});
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
      forwardedRef,
      (node) => setNode(node)
    );
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
      ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index2 = node1 ? layers.indexOf(node1) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event) => {
      const target = event.target;
      const isPointerDownOnBranch = [
        ...context.branches
      ].some(
        (branch) => branch.contains(target)
      );
      if (!isPointerEventsEnabled || isPointerDownOnBranch)
        return;
      onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
      onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
      if (!event.defaultPrevented)
        onDismiss === null || onDismiss === void 0 || onDismiss();
    }, ownerDocument);
    const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event) => {
      const target = event.target;
      const isFocusInBranch = [
        ...context.branches
      ].some(
        (branch) => branch.contains(target)
      );
      if (isFocusInBranch)
        return;
      onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
      onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
      if (!event.defaultPrevented)
        onDismiss === null || onDismiss === void 0 || onDismiss();
    }, ownerDocument);
    $addc16e1bbe58fd0$export$3a72a57244d6e765((event) => {
      const isHighestLayer = index2 === context.layers.size - 1;
      if (!isHighestLayer)
        return;
      onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
      if (!event.defaultPrevented && onDismiss) {
        event.preventDefault();
        onDismiss();
      }
    }, ownerDocument);
    React.useEffect(() => {
      if (!node1)
        return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          $5cb92bef7577960e$var$originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
          ownerDocument.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(node1);
      }
      context.layers.add(node1);
      $5cb92bef7577960e$var$dispatchUpdate();
      return () => {
        if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1)
          ownerDocument.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
      };
    }, [
      node1,
      ownerDocument,
      disableOutsidePointerEvents,
      context
    ]);
    React.useEffect(() => {
      return () => {
        if (!node1)
          return;
        context.layers.delete(node1);
        context.layersWithOutsidePointerEventsDisabled.delete(node1);
        $5cb92bef7577960e$var$dispatchUpdate();
      };
    }, [
      node1,
      context
    ]);
    React.useEffect(() => {
      const handleUpdate = () => force({});
      document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
      return () => document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, layerProps, {
      ref: composedRefs,
      style: {
        pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
        ...props.style
      },
      onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusCapture, focusOutside.onFocusCapture),
      onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlurCapture, focusOutside.onBlurCapture),
      onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
    }));
  });
  function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
    const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
    const isPointerInsideReactTreeRef = React.useRef(false);
    const handleClickRef = React.useRef(() => {
    });
    React.useEffect(() => {
      const handlePointerDown = (event) => {
        if (event.target && !isPointerInsideReactTreeRef.current) {
          let handleAndDispatchPointerDownOutsideEvent = function() {
            $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
              discrete: true
            });
          };
          const eventDetail = {
            originalEvent: event
          };
          if (event.pointerType === "touch") {
            ownerDocument.removeEventListener("click", handleClickRef.current);
            handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
            ownerDocument.addEventListener("click", handleClickRef.current, {
              once: true
            });
          } else
            handleAndDispatchPointerDownOutsideEvent();
        }
        isPointerInsideReactTreeRef.current = false;
      };
      const timerId = window.setTimeout(() => {
        ownerDocument.addEventListener("pointerdown", handlePointerDown);
      }, 0);
      return () => {
        window.clearTimeout(timerId);
        ownerDocument.removeEventListener("pointerdown", handlePointerDown);
        ownerDocument.removeEventListener("click", handleClickRef.current);
      };
    }, [
      ownerDocument,
      handlePointerDownOutside
    ]);
    return {
      // ensures we check React component tree (not just DOM tree)
      onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
    };
  }
  function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
    const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
    const isFocusInsideReactTreeRef = React.useRef(false);
    React.useEffect(() => {
      const handleFocus = (event) => {
        if (event.target && !isFocusInsideReactTreeRef.current) {
          const eventDetail = {
            originalEvent: event
          };
          $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
            discrete: false
          });
        }
      };
      ownerDocument.addEventListener("focusin", handleFocus);
      return () => ownerDocument.removeEventListener("focusin", handleFocus);
    }, [
      ownerDocument,
      handleFocusOutside
    ]);
    return {
      onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
      onBlurCapture: () => isFocusInsideReactTreeRef.current = false
    };
  }
  function $5cb92bef7577960e$var$dispatchUpdate() {
    const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
    document.dispatchEvent(event);
  }
  function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
    const target = detail.originalEvent.target;
    const event = new CustomEvent(name, {
      bubbles: false,
      cancelable: true,
      detail
    });
    if (handler)
      target.addEventListener(name, handler, {
        once: true
      });
    if (discrete)
      $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
    else
      target.dispatchEvent(event);
  }
  const $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
  const $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
  const $d3863c46a17e8a28$var$EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
  };
  const $d3863c46a17e8a28$export$20e40289641fbbb6 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
    const [container1, setContainer] = React.useState(null);
    const onMountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onMountAutoFocusProp);
    const onUnmountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onUnmountAutoFocusProp);
    const lastFocusedElementRef = React.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
      forwardedRef,
      (node) => setContainer(node)
    );
    const focusScope = React.useRef({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    }).current;
    React.useEffect(() => {
      if (trapped) {
        let handleFocusIn = function(event) {
          if (focusScope.paused || !container1)
            return;
          const target = event.target;
          if (container1.contains(target))
            lastFocusedElementRef.current = target;
          else
            $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
              select: true
            });
        }, handleFocusOut = function(event) {
          if (focusScope.paused || !container1)
            return;
          const relatedTarget = event.relatedTarget;
          if (relatedTarget === null)
            return;
          if (!container1.contains(relatedTarget))
            $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
              select: true
            });
        }, handleMutations = function(mutations) {
          const focusedElement = document.activeElement;
          for (const mutation of mutations) {
            if (mutation.removedNodes.length > 0) {
              if (!(container1 !== null && container1 !== void 0 && container1.contains(focusedElement)))
                $d3863c46a17e8a28$var$focus(container1);
            }
          }
        };
        document.addEventListener("focusin", handleFocusIn);
        document.addEventListener("focusout", handleFocusOut);
        const mutationObserver = new MutationObserver(handleMutations);
        if (container1)
          mutationObserver.observe(container1, {
            childList: true,
            subtree: true
          });
        return () => {
          document.removeEventListener("focusin", handleFocusIn);
          document.removeEventListener("focusout", handleFocusOut);
          mutationObserver.disconnect();
        };
      }
    }, [
      trapped,
      container1,
      focusScope.paused
    ]);
    React.useEffect(() => {
      if (container1) {
        $d3863c46a17e8a28$var$focusScopesStack.add(focusScope);
        const previouslyFocusedElement = document.activeElement;
        const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
        if (!hasFocusedCandidate) {
          const mountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
          container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
          container1.dispatchEvent(mountEvent);
          if (!mountEvent.defaultPrevented) {
            $d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(container1)), {
              select: true
            });
            if (document.activeElement === previouslyFocusedElement)
              $d3863c46a17e8a28$var$focus(container1);
          }
        }
        return () => {
          container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
          setTimeout(() => {
            const unmountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
            container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
            container1.dispatchEvent(unmountEvent);
            if (!unmountEvent.defaultPrevented)
              $d3863c46a17e8a28$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
                select: true
              });
            container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
            $d3863c46a17e8a28$var$focusScopesStack.remove(focusScope);
          }, 0);
        };
      }
    }, [
      container1,
      onMountAutoFocus,
      onUnmountAutoFocus,
      focusScope
    ]);
    const handleKeyDown = React.useCallback((event) => {
      if (!loop && !trapped)
        return;
      if (focusScope.paused)
        return;
      const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
      const focusedElement = document.activeElement;
      if (isTabKey && focusedElement) {
        const container = event.currentTarget;
        const [first, last] = $d3863c46a17e8a28$var$getTabbableEdges(container);
        const hasTabbableElementsInside = first && last;
        if (!hasTabbableElementsInside) {
          if (focusedElement === container)
            event.preventDefault();
        } else {
          if (!event.shiftKey && focusedElement === last) {
            event.preventDefault();
            if (loop)
              $d3863c46a17e8a28$var$focus(first, {
                select: true
              });
          } else if (event.shiftKey && focusedElement === first) {
            event.preventDefault();
            if (loop)
              $d3863c46a17e8a28$var$focus(last, {
                select: true
              });
          }
        }
      }
    }, [
      loop,
      trapped,
      focusScope.paused
    ]);
    return /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
      tabIndex: -1
    }, scopeProps, {
      ref: composedRefs,
      onKeyDown: handleKeyDown
    }));
  });
  function $d3863c46a17e8a28$var$focusFirst(candidates, { select = false } = {}) {
    const previouslyFocusedElement = document.activeElement;
    for (const candidate of candidates) {
      $d3863c46a17e8a28$var$focus(candidate, {
        select
      });
      if (document.activeElement !== previouslyFocusedElement)
        return;
    }
  }
  function $d3863c46a17e8a28$var$getTabbableEdges(container) {
    const candidates = $d3863c46a17e8a28$var$getTabbableCandidates(container);
    const first = $d3863c46a17e8a28$var$findVisible(candidates, container);
    const last = $d3863c46a17e8a28$var$findVisible(candidates.reverse(), container);
    return [
      first,
      last
    ];
  }
  function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (node) => {
        const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
        if (node.disabled || node.hidden || isHiddenInput)
          return NodeFilter.FILTER_SKIP;
        return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    while (walker.nextNode())
      nodes.push(walker.currentNode);
    return nodes;
  }
  function $d3863c46a17e8a28$var$findVisible(elements, container) {
    for (const element of elements) {
      if (!$d3863c46a17e8a28$var$isHidden(element, {
        upTo: container
      }))
        return element;
    }
  }
  function $d3863c46a17e8a28$var$isHidden(node, { upTo }) {
    if (getComputedStyle(node).visibility === "hidden")
      return true;
    while (node) {
      if (upTo !== void 0 && node === upTo)
        return false;
      if (getComputedStyle(node).display === "none")
        return true;
      node = node.parentElement;
    }
    return false;
  }
  function $d3863c46a17e8a28$var$isSelectableInput(element) {
    return element instanceof HTMLInputElement && "select" in element;
  }
  function $d3863c46a17e8a28$var$focus(element, { select = false } = {}) {
    if (element && element.focus) {
      const previouslyFocusedElement = document.activeElement;
      element.focus({
        preventScroll: true
      });
      if (element !== previouslyFocusedElement && $d3863c46a17e8a28$var$isSelectableInput(element) && select)
        element.select();
    }
  }
  const $d3863c46a17e8a28$var$focusScopesStack = $d3863c46a17e8a28$var$createFocusScopesStack();
  function $d3863c46a17e8a28$var$createFocusScopesStack() {
    let stack = [];
    return {
      add(focusScope) {
        const activeFocusScope = stack[0];
        if (focusScope !== activeFocusScope)
          activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
        stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
        stack.unshift(focusScope);
      },
      remove(focusScope) {
        var _stack$;
        stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
        (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
      }
    };
  }
  function $d3863c46a17e8a28$var$arrayRemove(array, item) {
    const updatedArray = [
      ...array
    ];
    const index2 = updatedArray.indexOf(item);
    if (index2 !== -1)
      updatedArray.splice(index2, 1);
    return updatedArray;
  }
  function $d3863c46a17e8a28$var$removeLinks(items) {
    return items.filter(
      (item) => item.tagName !== "A"
    );
  }
  const $f1701beae083dbae$export$602eac185826482c = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    var _globalThis$document;
    const { container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body, ...portalProps } = props;
    return container ? /* @__PURE__ */ require$$0.createPortal(/* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, portalProps, {
      ref: forwardedRef
    })), container) : null;
  });
  function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
    return React.useReducer((state, event) => {
      const nextState = machine[state][event];
      return nextState !== null && nextState !== void 0 ? nextState : state;
    }, initialState);
  }
  const $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props) => {
    const { present, children } = props;
    const presence = $921a889cee6df7e8$var$usePresence(present);
    const child = typeof children === "function" ? children({
      present: presence.isPresent
    }) : React.Children.only(children);
    const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
    const forceMount = typeof children === "function";
    return forceMount || presence.isPresent ? /* @__PURE__ */ React.cloneElement(child, {
      ref
    }) : null;
  };
  $921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
  function $921a889cee6df7e8$var$usePresence(present) {
    const [node1, setNode] = React.useState();
    const stylesRef = React.useRef({});
    const prevPresentRef = React.useRef(present);
    const prevAnimationNameRef = React.useRef("none");
    const initialState = present ? "mounted" : "unmounted";
    const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted"
      },
      unmounted: {
        MOUNT: "mounted"
      }
    });
    React.useEffect(() => {
      const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
      prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
    }, [
      state
    ]);
    $9f79659886946c16$export$e5c5a5f917a5871c(() => {
      const styles = stylesRef.current;
      const wasPresent = prevPresentRef.current;
      const hasPresentChanged = wasPresent !== present;
      if (hasPresentChanged) {
        const prevAnimationName = prevAnimationNameRef.current;
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
        if (present)
          send("MOUNT");
        else if (currentAnimationName === "none" || (styles === null || styles === void 0 ? void 0 : styles.display) === "none")
          send("UNMOUNT");
        else {
          const isAnimating = prevAnimationName !== currentAnimationName;
          if (wasPresent && isAnimating)
            send("ANIMATION_OUT");
          else
            send("UNMOUNT");
        }
        prevPresentRef.current = present;
      }
    }, [
      present,
      send
    ]);
    $9f79659886946c16$export$e5c5a5f917a5871c(() => {
      if (node1) {
        const handleAnimationEnd = (event) => {
          const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
          const isCurrentAnimation = currentAnimationName.includes(event.animationName);
          if (event.target === node1 && isCurrentAnimation)
            require$$0.flushSync(
              () => send("ANIMATION_END")
            );
        };
        const handleAnimationStart = (event) => {
          if (event.target === node1)
            prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        };
        node1.addEventListener("animationstart", handleAnimationStart);
        node1.addEventListener("animationcancel", handleAnimationEnd);
        node1.addEventListener("animationend", handleAnimationEnd);
        return () => {
          node1.removeEventListener("animationstart", handleAnimationStart);
          node1.removeEventListener("animationcancel", handleAnimationEnd);
          node1.removeEventListener("animationend", handleAnimationEnd);
        };
      } else
        send("ANIMATION_END");
    }, [
      node1,
      send
    ]);
    return {
      isPresent: [
        "mounted",
        "unmountSuspended"
      ].includes(state),
      ref: React.useCallback((node) => {
        if (node)
          stylesRef.current = getComputedStyle(node);
        setNode(node);
      }, [])
    };
  }
  function $921a889cee6df7e8$var$getAnimationName(styles) {
    return (styles === null || styles === void 0 ? void 0 : styles.animationName) || "none";
  }
  let $3db38b7d1fb3fe6a$var$count = 0;
  function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
    React.useEffect(() => {
      var _edgeGuards$, _edgeGuards$2;
      const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
      document.body.insertAdjacentElement("afterbegin", (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $3db38b7d1fb3fe6a$var$createFocusGuard());
      document.body.insertAdjacentElement("beforeend", (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $3db38b7d1fb3fe6a$var$createFocusGuard());
      $3db38b7d1fb3fe6a$var$count++;
      return () => {
        if ($3db38b7d1fb3fe6a$var$count === 1)
          document.querySelectorAll("[data-radix-focus-guard]").forEach(
            (node) => node.remove()
          );
        $3db38b7d1fb3fe6a$var$count--;
      };
    }, []);
  }
  function $3db38b7d1fb3fe6a$var$createFocusGuard() {
    const element = document.createElement("span");
    element.setAttribute("data-radix-focus-guard", "");
    element.tabIndex = 0;
    element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none";
    return element;
  }
  var __assign = function() {
    __assign = Object.assign || function __assign2(t) {
      for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
        s = arguments[i];
        for (var p2 in s)
          if (Object.prototype.hasOwnProperty.call(s, p2))
            t[p2] = s[p2];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  function __rest(s, e) {
    var t = {};
    for (var p2 in s)
      if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
        t[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
          t[p2[i]] = s[p2[i]];
      }
    return t;
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l2 = from.length, ar; i < l2; i++) {
        if (ar || !(i in from)) {
          if (!ar)
            ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };
  var zeroRightClassName = "right-scroll-bar-position";
  var fullWidthClassName = "width-before-scroll-bar";
  var noScrollbarsClassName = "with-scroll-bars-hidden";
  var removedBarSizeVariable = "--removed-body-scroll-bar-size";
  function assignRef(ref, value) {
    if (typeof ref === "function") {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
    return ref;
  }
  function useCallbackRef(initialValue, callback) {
    var ref = React.useState(function() {
      return {
        // value
        value: initialValue,
        // last callback
        callback,
        // "memoized" public interface
        facade: {
          get current() {
            return ref.value;
          },
          set current(value) {
            var last = ref.value;
            if (last !== value) {
              ref.value = value;
              ref.callback(value, last);
            }
          }
        }
      };
    })[0];
    ref.callback = callback;
    return ref.facade;
  }
  function useMergeRefs(refs, defaultValue) {
    return useCallbackRef(defaultValue || null, function(newValue) {
      return refs.forEach(function(ref) {
        return assignRef(ref, newValue);
      });
    });
  }
  function ItoI(a) {
    return a;
  }
  function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) {
      middleware = ItoI;
    }
    var buffer = [];
    var assigned = false;
    var medium = {
      read: function() {
        if (assigned) {
          throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
        }
        if (buffer.length) {
          return buffer[buffer.length - 1];
        }
        return defaults;
      },
      useMedium: function(data) {
        var item = middleware(data, assigned);
        buffer.push(item);
        return function() {
          buffer = buffer.filter(function(x) {
            return x !== item;
          });
        };
      },
      assignSyncMedium: function(cb) {
        assigned = true;
        while (buffer.length) {
          var cbs = buffer;
          buffer = [];
          cbs.forEach(cb);
        }
        buffer = {
          push: function(x) {
            return cb(x);
          },
          filter: function() {
            return buffer;
          }
        };
      },
      assignMedium: function(cb) {
        assigned = true;
        var pendingQueue = [];
        if (buffer.length) {
          var cbs = buffer;
          buffer = [];
          cbs.forEach(cb);
          pendingQueue = buffer;
        }
        var executeQueue = function() {
          var cbs2 = pendingQueue;
          pendingQueue = [];
          cbs2.forEach(cb);
        };
        var cycle = function() {
          return Promise.resolve().then(executeQueue);
        };
        cycle();
        buffer = {
          push: function(x) {
            pendingQueue.push(x);
            cycle();
          },
          filter: function(filter) {
            pendingQueue = pendingQueue.filter(filter);
            return buffer;
          }
        };
      }
    };
    return medium;
  }
  function createSidecarMedium(options) {
    if (options === void 0) {
      options = {};
    }
    var medium = innerCreateMedium(null);
    medium.options = __assign({ async: true, ssr: false }, options);
    return medium;
  }
  var SideCar$1 = function(_a) {
    var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
    if (!sideCar) {
      throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    }
    var Target = sideCar.read();
    if (!Target) {
      throw new Error("Sidecar medium not found");
    }
    return React__namespace.createElement(Target, __assign({}, rest));
  };
  SideCar$1.isSideCarExport = true;
  function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar$1;
  }
  var effectCar = createSidecarMedium();
  var nothing = function() {
    return;
  };
  var RemoveScroll = React__namespace.forwardRef(function(props, parentRef) {
    var ref = React__namespace.useRef(null);
    var _a = React__namespace.useState({
      onScrollCapture: nothing,
      onWheelCapture: nothing,
      onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
    var SideCar2 = sideCar;
    var containerRef = useMergeRefs([ref, parentRef]);
    var containerProps = __assign(__assign({}, rest), callbacks);
    return React__namespace.createElement(
      React__namespace.Fragment,
      null,
      enabled && React__namespace.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
      forwardProps ? React__namespace.cloneElement(React__namespace.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React__namespace.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
    );
  });
  RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
  };
  RemoveScroll.classNames = {
    fullWidth: fullWidthClassName,
    zeroRight: zeroRightClassName
  };
  var getNonce = function() {
    if (typeof __webpack_nonce__ !== "undefined") {
      return __webpack_nonce__;
    }
    return void 0;
  };
  function makeStyleTag() {
    if (!document)
      return null;
    var tag = document.createElement("style");
    tag.type = "text/css";
    var nonce = getNonce();
    if (nonce) {
      tag.setAttribute("nonce", nonce);
    }
    return tag;
  }
  function injectStyles(tag, css) {
    if (tag.styleSheet) {
      tag.styleSheet.cssText = css;
    } else {
      tag.appendChild(document.createTextNode(css));
    }
  }
  function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName("head")[0];
    head.appendChild(tag);
  }
  var stylesheetSingleton = function() {
    var counter = 0;
    var stylesheet = null;
    return {
      add: function(style) {
        if (counter == 0) {
          if (stylesheet = makeStyleTag()) {
            injectStyles(stylesheet, style);
            insertStyleTag(stylesheet);
          }
        }
        counter++;
      },
      remove: function() {
        counter--;
        if (!counter && stylesheet) {
          stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
          stylesheet = null;
        }
      }
    };
  };
  var styleHookSingleton = function() {
    var sheet = stylesheetSingleton();
    return function(styles, isDynamic) {
      React__namespace.useEffect(function() {
        sheet.add(styles);
        return function() {
          sheet.remove();
        };
      }, [styles && isDynamic]);
    };
  };
  var styleSingleton = function() {
    var useStyle = styleHookSingleton();
    var Sheet2 = function(_a) {
      var styles = _a.styles, dynamic = _a.dynamic;
      useStyle(styles, dynamic);
      return null;
    };
    return Sheet2;
  };
  var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
  };
  var parse = function(x) {
    return parseInt(x || "", 10) || 0;
  };
  var getOffset = function(gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
    var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
    var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
    return [parse(left), parse(top), parse(right)];
  };
  var getGapWidth = function(gapMode) {
    if (gapMode === void 0) {
      gapMode = "margin";
    }
    if (typeof window === "undefined") {
      return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
      left: offsets[0],
      top: offsets[1],
      right: offsets[2],
      gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
    };
  };
  var Style = styleSingleton();
  var getStyles = function(_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) {
      gapMode = "margin";
    }
    return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
      allowRelative && "position: relative ".concat(important, ";"),
      gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
      gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
    ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
  };
  var RemoveScrollBar = function(props) {
    var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? "margin" : _a;
    var gap = React__namespace.useMemo(function() {
      return getGapWidth(gapMode);
    }, [gapMode]);
    return React__namespace.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
  };
  var passiveSupported = false;
  if (typeof window !== "undefined") {
    try {
      var options = Object.defineProperty({}, "passive", {
        get: function() {
          passiveSupported = true;
          return true;
        }
      });
      window.addEventListener("test", options, options);
      window.removeEventListener("test", options, options);
    } catch (err) {
      passiveSupported = false;
    }
  }
  var nonPassive = passiveSupported ? { passive: false } : false;
  var alwaysContainsScroll = function(node) {
    return node.tagName === "TEXTAREA";
  };
  var elementCanBeScrolled = function(node, overflow) {
    var styles = window.getComputedStyle(node);
    return (
      // not-not-scrollable
      styles[overflow] !== "hidden" && // contains scroll inside self
      !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
    );
  };
  var elementCouldBeVScrolled = function(node) {
    return elementCanBeScrolled(node, "overflowY");
  };
  var elementCouldBeHScrolled = function(node) {
    return elementCanBeScrolled(node, "overflowX");
  };
  var locationCouldBeScrolled = function(axis, node) {
    var current = node;
    do {
      if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
        current = current.host;
      }
      var isScrollable = elementCouldBeScrolled(axis, current);
      if (isScrollable) {
        var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
        if (s > d) {
          return true;
        }
      }
      current = current.parentNode;
    } while (current && current !== document.body);
    return false;
  };
  var getVScrollVariables = function(_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
      scrollTop,
      scrollHeight,
      clientHeight
    ];
  };
  var getHScrollVariables = function(_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
      scrollLeft,
      scrollWidth,
      clientWidth
    ];
  };
  var elementCouldBeScrolled = function(axis, node) {
    return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
  };
  var getScrollVariables = function(axis, node) {
    return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
  };
  var getDirectionFactor = function(axis, direction) {
    return axis === "h" && direction === "rtl" ? -1 : 1;
  };
  var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
      var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
      var elementScroll = scroll_1 - capacity - directionFactor * position;
      if (position || elementScroll) {
        if (elementCouldBeScrolled(axis, target)) {
          availableScroll += elementScroll;
          availableScrollTop += position;
        }
      }
      target = target.parentNode;
    } while (
      // portaled content
      !targetInLock && target !== document.body || // self content
      targetInLock && (endTarget.contains(target) || endTarget === target)
    );
    if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
      shouldCancelScroll = true;
    } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
      shouldCancelScroll = true;
    }
    return shouldCancelScroll;
  };
  var getTouchXY = function(event) {
    return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
  };
  var getDeltaXY = function(event) {
    return [event.deltaX, event.deltaY];
  };
  var extractRef = function(ref) {
    return ref && "current" in ref ? ref.current : ref;
  };
  var deltaCompare = function(x, y) {
    return x[0] === y[0] && x[1] === y[1];
  };
  var generateStyle = function(id) {
    return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
  };
  var idCounter = 0;
  var lockStack = [];
  function RemoveScrollSideCar(props) {
    var shouldPreventQueue = React__namespace.useRef([]);
    var touchStartRef = React__namespace.useRef([0, 0]);
    var activeAxis = React__namespace.useRef();
    var id = React__namespace.useState(idCounter++)[0];
    var Style2 = React__namespace.useState(function() {
      return styleSingleton();
    })[0];
    var lastProps = React__namespace.useRef(props);
    React__namespace.useEffect(function() {
      lastProps.current = props;
    }, [props]);
    React__namespace.useEffect(function() {
      if (props.inert) {
        document.body.classList.add("block-interactivity-".concat(id));
        var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
        allow_1.forEach(function(el) {
          return el.classList.add("allow-interactivity-".concat(id));
        });
        return function() {
          document.body.classList.remove("block-interactivity-".concat(id));
          allow_1.forEach(function(el) {
            return el.classList.remove("allow-interactivity-".concat(id));
          });
        };
      }
      return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = React__namespace.useCallback(function(event, parent) {
      if ("touches" in event && event.touches.length === 2) {
        return !lastProps.current.allowPinchZoom;
      }
      var touch = getTouchXY(event);
      var touchStart = touchStartRef.current;
      var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
      var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
      var currentAxis;
      var target = event.target;
      var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
      if ("touches" in event && moveDirection === "h" && target.type === "range") {
        return false;
      }
      var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
      if (!canBeScrolledInMainDirection) {
        return true;
      }
      if (canBeScrolledInMainDirection) {
        currentAxis = moveDirection;
      } else {
        currentAxis = moveDirection === "v" ? "h" : "v";
        canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
      }
      if (!canBeScrolledInMainDirection) {
        return false;
      }
      if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
        activeAxis.current = currentAxis;
      }
      if (!currentAxis) {
        return true;
      }
      var cancelingAxis = activeAxis.current || currentAxis;
      return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = React__namespace.useCallback(function(_event) {
      var event = _event;
      if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
        return;
      }
      var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
      var sourceEvent = shouldPreventQueue.current.filter(function(e) {
        return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
      })[0];
      if (sourceEvent && sourceEvent.should) {
        if (event.cancelable) {
          event.preventDefault();
        }
        return;
      }
      if (!sourceEvent) {
        var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
          return node.contains(event.target);
        });
        var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
        if (shouldStop) {
          if (event.cancelable) {
            event.preventDefault();
          }
        }
      }
    }, []);
    var shouldCancel = React__namespace.useCallback(function(name, delta, target, should) {
      var event = { name, delta, target, should };
      shouldPreventQueue.current.push(event);
      setTimeout(function() {
        shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
          return e !== event;
        });
      }, 1);
    }, []);
    var scrollTouchStart = React__namespace.useCallback(function(event) {
      touchStartRef.current = getTouchXY(event);
      activeAxis.current = void 0;
    }, []);
    var scrollWheel = React__namespace.useCallback(function(event) {
      shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = React__namespace.useCallback(function(event) {
      shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    React__namespace.useEffect(function() {
      lockStack.push(Style2);
      props.setCallbacks({
        onScrollCapture: scrollWheel,
        onWheelCapture: scrollWheel,
        onTouchMoveCapture: scrollTouchMove
      });
      document.addEventListener("wheel", shouldPrevent, nonPassive);
      document.addEventListener("touchmove", shouldPrevent, nonPassive);
      document.addEventListener("touchstart", scrollTouchStart, nonPassive);
      return function() {
        lockStack = lockStack.filter(function(inst) {
          return inst !== Style2;
        });
        document.removeEventListener("wheel", shouldPrevent, nonPassive);
        document.removeEventListener("touchmove", shouldPrevent, nonPassive);
        document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
      };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return React__namespace.createElement(
      React__namespace.Fragment,
      null,
      inert ? React__namespace.createElement(Style2, { styles: generateStyle(id) }) : null,
      removeScrollBar ? React__namespace.createElement(RemoveScrollBar, { gapMode: "margin" }) : null
    );
  }
  const SideCar = exportSidecar(effectCar, RemoveScrollSideCar);
  var ReactRemoveScroll = React__namespace.forwardRef(function(props, ref) {
    return React__namespace.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: SideCar }));
  });
  ReactRemoveScroll.classNames = RemoveScroll.classNames;
  const $67UHm$RemoveScroll = ReactRemoveScroll;
  var getDefaultParent = function(originalTarget) {
    if (typeof document === "undefined") {
      return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
  };
  var counterMap = /* @__PURE__ */ new WeakMap();
  var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
  var markerMap = {};
  var lockCount = 0;
  var unwrapHost = function(node) {
    return node && (node.host || unwrapHost(node.parentNode));
  };
  var correctTargets = function(parent, targets) {
    return targets.map(function(target) {
      if (parent.contains(target)) {
        return target;
      }
      var correctedTarget = unwrapHost(target);
      if (correctedTarget && parent.contains(correctedTarget)) {
        return correctedTarget;
      }
      console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
      return null;
    }).filter(function(x) {
      return Boolean(x);
    });
  };
  var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    if (!markerMap[markerName]) {
      markerMap[markerName] = /* @__PURE__ */ new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = /* @__PURE__ */ new Set();
    var elementsToStop = new Set(targets);
    var keep = function(el) {
      if (!el || elementsToKeep.has(el)) {
        return;
      }
      elementsToKeep.add(el);
      keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function(parent) {
      if (!parent || elementsToStop.has(parent)) {
        return;
      }
      Array.prototype.forEach.call(parent.children, function(node) {
        if (elementsToKeep.has(node)) {
          deep(node);
        } else {
          var attr = node.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node) || 0) + 1;
          var markerValue = (markerCounter.get(node) || 0) + 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          hiddenNodes.push(node);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node, true);
          }
          if (markerValue === 1) {
            node.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node.setAttribute(controlAttribute, "true");
          }
        }
      });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function() {
      hiddenNodes.forEach(function(node) {
        var counterValue = counterMap.get(node) - 1;
        var markerValue = markerCounter.get(node) - 1;
        counterMap.set(node, counterValue);
        markerCounter.set(node, markerValue);
        if (!counterValue) {
          if (!uncontrolledNodes.has(node)) {
            node.removeAttribute(controlAttribute);
          }
          uncontrolledNodes.delete(node);
        }
        if (!markerValue) {
          node.removeAttribute(markerName);
        }
      });
      lockCount--;
      if (!lockCount) {
        counterMap = /* @__PURE__ */ new WeakMap();
        counterMap = /* @__PURE__ */ new WeakMap();
        uncontrolledNodes = /* @__PURE__ */ new WeakMap();
        markerMap = {};
      }
    };
  };
  var hideOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
      markerName = "data-aria-hidden";
    }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
      return function() {
        return null;
      };
    }
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
    return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
  };
  const $5d3850c4d0b4e6c7$var$DIALOG_NAME = "Dialog";
  const [$5d3850c4d0b4e6c7$var$createDialogContext, $5d3850c4d0b4e6c7$export$cc702773b8ea3e41] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($5d3850c4d0b4e6c7$var$DIALOG_NAME);
  const [$5d3850c4d0b4e6c7$var$DialogProvider, $5d3850c4d0b4e6c7$var$useDialogContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$DIALOG_NAME);
  const $5d3850c4d0b4e6c7$export$3ddf2d174ce01153 = (props) => {
    const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
    const triggerRef = React.useRef(null);
    const contentRef = React.useRef(null);
    const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpenChange
    });
    return /* @__PURE__ */ React.createElement($5d3850c4d0b4e6c7$var$DialogProvider, {
      scope: __scopeDialog,
      triggerRef,
      contentRef,
      contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
      titleId: $1746a345f3d73bb7$export$f680877a34711e37(),
      descriptionId: $1746a345f3d73bb7$export$f680877a34711e37(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: React.useCallback(
        () => setOpen(
          (prevOpen) => !prevOpen
        ),
        [
          setOpen
        ]
      ),
      modal
    }, children);
  };
  const $5d3850c4d0b4e6c7$var$TRIGGER_NAME = "DialogTrigger";
  const $5d3850c4d0b4e6c7$export$2e1e1122cf0cba88 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeDialog, ...triggerProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": context.open,
      "aria-controls": context.contentId,
      "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, triggerProps, {
      ref: composedTriggerRef,
      onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onOpenToggle)
    }));
  });
  const $5d3850c4d0b4e6c7$var$PORTAL_NAME = "DialogPortal";
  const [$5d3850c4d0b4e6c7$var$PortalProvider, $5d3850c4d0b4e6c7$var$usePortalContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, {
    forceMount: void 0
  });
  const $5d3850c4d0b4e6c7$export$dad7c95542bacce0 = (props) => {
    const { __scopeDialog, forceMount, children, container } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, __scopeDialog);
    return /* @__PURE__ */ React.createElement($5d3850c4d0b4e6c7$var$PortalProvider, {
      scope: __scopeDialog,
      forceMount
    }, React.Children.map(
      children,
      (child) => /* @__PURE__ */ React.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
        present: forceMount || context.open
      }, /* @__PURE__ */ React.createElement($f1701beae083dbae$export$602eac185826482c, {
        asChild: true,
        container
      }, child))
    ));
  };
  const $5d3850c4d0b4e6c7$var$OVERLAY_NAME = "DialogOverlay";
  const $5d3850c4d0b4e6c7$export$bd1d06c79be19e17 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ React.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      present: forceMount || context.open
    }, /* @__PURE__ */ React.createElement($5d3850c4d0b4e6c7$var$DialogOverlayImpl, _extends({}, overlayProps, {
      ref: forwardedRef
    }))) : null;
  });
  const $5d3850c4d0b4e6c7$var$DialogOverlayImpl = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeDialog, ...overlayProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, __scopeDialog);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ React.createElement($67UHm$RemoveScroll, {
        as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
        allowPinchZoom: true,
        shards: [
          context.contentRef
        ]
      }, /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
        "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
      }, overlayProps, {
        ref: forwardedRef,
        style: {
          pointerEvents: "auto",
          ...overlayProps.style
        }
      })))
    );
  });
  const $5d3850c4d0b4e6c7$var$CONTENT_NAME = "DialogContent";
  const $5d3850c4d0b4e6c7$export$b6d9565de1e068cf = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
    return /* @__PURE__ */ React.createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      present: forceMount || context.open
    }, context.modal ? /* @__PURE__ */ React.createElement($5d3850c4d0b4e6c7$var$DialogContentModal, _extends({}, contentProps, {
      ref: forwardedRef
    })) : /* @__PURE__ */ React.createElement($5d3850c4d0b4e6c7$var$DialogContentNonModal, _extends({}, contentProps, {
      ref: forwardedRef
    })));
  });
  const $5d3850c4d0b4e6c7$var$DialogContentModal = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
    const contentRef = React.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.contentRef, contentRef);
    React.useEffect(() => {
      const content = contentRef.current;
      if (content)
        return hideOthers(content);
    }, []);
    return /* @__PURE__ */ React.createElement($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
      ref: composedRefs,
      trapFocus: context.open,
      disableOutsidePointerEvents: true,
      onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
        var _context$triggerRef$c;
        event.preventDefault();
        (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
      }),
      onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
        const originalEvent = event.detail.originalEvent;
        const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
        const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
        if (isRightClick)
          event.preventDefault();
      }),
      onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
        props.onFocusOutside,
        (event) => event.preventDefault()
      )
    }));
  });
  const $5d3850c4d0b4e6c7$var$DialogContentNonModal = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = React.useRef(false);
    const hasPointerDownOutsideRef = React.useRef(false);
    return /* @__PURE__ */ React.createElement($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
      ref: forwardedRef,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      onCloseAutoFocus: (event) => {
        var _props$onCloseAutoFoc;
        (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
        if (!event.defaultPrevented) {
          var _context$triggerRef$c2;
          if (!hasInteractedOutsideRef.current)
            (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
          event.preventDefault();
        }
        hasInteractedOutsideRef.current = false;
        hasPointerDownOutsideRef.current = false;
      },
      onInteractOutside: (event) => {
        var _props$onInteractOuts, _context$triggerRef$c3;
        (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
        if (!event.defaultPrevented) {
          hasInteractedOutsideRef.current = true;
          if (event.detail.originalEvent.type === "pointerdown")
            hasPointerDownOutsideRef.current = true;
        }
        const target = event.target;
        const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
        if (targetIsTrigger)
          event.preventDefault();
        if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current)
          event.preventDefault();
      }
    }));
  });
  const $5d3850c4d0b4e6c7$var$DialogContentImpl = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, __scopeDialog);
    const contentRef = React.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
    $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement($d3863c46a17e8a28$export$20e40289641fbbb6, {
      asChild: true,
      loop: true,
      trapped: trapFocus,
      onMountAutoFocus: onOpenAutoFocus,
      onUnmountAutoFocus: onCloseAutoFocus
    }, /* @__PURE__ */ React.createElement($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends({
      role: "dialog",
      id: context.contentId,
      "aria-describedby": context.descriptionId,
      "aria-labelledby": context.titleId,
      "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, contentProps, {
      ref: composedRefs,
      onDismiss: () => context.onOpenChange(false)
    }))), false);
  });
  const $5d3850c4d0b4e6c7$var$TITLE_NAME = "DialogTitle";
  const $5d3850c4d0b4e6c7$export$16f7638e4a34b909 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeDialog, ...titleProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.h2, _extends({
      id: context.titleId
    }, titleProps, {
      ref: forwardedRef
    }));
  });
  const $5d3850c4d0b4e6c7$var$DESCRIPTION_NAME = "DialogDescription";
  const $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.p, _extends({
      id: context.descriptionId
    }, descriptionProps, {
      ref: forwardedRef
    }));
  });
  const $5d3850c4d0b4e6c7$var$CLOSE_NAME = "DialogClose";
  const $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeDialog, ...closeProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
      type: "button"
    }, closeProps, {
      ref: forwardedRef,
      onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
        props.onClick,
        () => context.onOpenChange(false)
      )
    }));
  });
  function $5d3850c4d0b4e6c7$var$getState(open) {
    return open ? "open" : "closed";
  }
  const $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9 = $5d3850c4d0b4e6c7$export$3ddf2d174ce01153;
  const $5d3850c4d0b4e6c7$export$41fb9f06171c75f4 = $5d3850c4d0b4e6c7$export$2e1e1122cf0cba88;
  const $5d3850c4d0b4e6c7$export$602eac185826482c = $5d3850c4d0b4e6c7$export$dad7c95542bacce0;
  const $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff = $5d3850c4d0b4e6c7$export$bd1d06c79be19e17;
  const $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2 = $5d3850c4d0b4e6c7$export$b6d9565de1e068cf;
  const $5d3850c4d0b4e6c7$export$f99233281efd08a0 = $5d3850c4d0b4e6c7$export$16f7638e4a34b909;
  const $5d3850c4d0b4e6c7$export$393edc798c47379d = $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5;
  const $5d3850c4d0b4e6c7$export$f39c2d165cd861fe = $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac;
  function r$1(e) {
    var t, f2, n2 = "";
    if ("string" == typeof e || "number" == typeof e)
      n2 += e;
    else if ("object" == typeof e)
      if (Array.isArray(e))
        for (t = 0; t < e.length; t++)
          e[t] && (f2 = r$1(e[t])) && (n2 && (n2 += " "), n2 += f2);
      else
        for (t in e)
          e[t] && (n2 && (n2 += " "), n2 += t);
    return n2;
  }
  function clsx$1() {
    for (var e, t, f2 = 0, n2 = ""; f2 < arguments.length; )
      (e = arguments[f2++]) && (t = r$1(e)) && (n2 && (n2 += " "), n2 += t);
    return n2;
  }
  const falsyToString = (value) => typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
  const cx = clsx$1;
  const cva = (base, config) => {
    return (props) => {
      var ref;
      if ((config === null || config === void 0 ? void 0 : config.variants) == null)
        return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
      const { variants, defaultVariants } = config;
      const getVariantClassNames = Object.keys(variants).map((variant) => {
        const variantProp = props === null || props === void 0 ? void 0 : props[variant];
        const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
        if (variantProp === null)
          return null;
        const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
        return variants[variant][variantKey];
      });
      const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
        let [key, value] = param;
        if (value === void 0) {
          return acc;
        }
        acc[key] = value;
        return acc;
      }, {});
      const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (ref = config.compoundVariants) === null || ref === void 0 ? void 0 : ref.reduce((acc, param1) => {
        let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param1;
        return Object.entries(compoundVariantOptions).every((param) => {
          let [key, value] = param;
          return Array.isArray(value) ? value.includes({
            ...defaultVariants,
            ...propsWithoutUndefined
          }[key]) : {
            ...defaultVariants,
            ...propsWithoutUndefined
          }[key] === value;
        }) ? [
          ...acc,
          cvClass,
          cvClassName
        ] : acc;
      }, []);
      return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
  };
  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  const createLucideIcon = (iconName, iconNode) => {
    const Component = React.forwardRef(
      ({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, children, ...rest }, ref) => React.createElement(
        "svg",
        {
          ref,
          ...defaultAttributes,
          width: size,
          height: size,
          stroke: color,
          strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
          className: `lucide lucide-${toKebabCase(iconName)}`,
          ...rest
        },
        [
          ...iconNode.map(([tag, attrs]) => React.createElement(tag, attrs)),
          ...(Array.isArray(children) ? children : [children]) || []
        ]
      )
    );
    Component.displayName = `${iconName}`;
    return Component;
  };
  const X = createLucideIcon("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]);
  function r(e) {
    var t, f2, n2 = "";
    if ("string" == typeof e || "number" == typeof e)
      n2 += e;
    else if ("object" == typeof e)
      if (Array.isArray(e))
        for (t = 0; t < e.length; t++)
          e[t] && (f2 = r(e[t])) && (n2 && (n2 += " "), n2 += f2);
      else
        for (t in e)
          e[t] && (n2 && (n2 += " "), n2 += t);
    return n2;
  }
  function clsx() {
    for (var e, t, f2 = 0, n2 = ""; f2 < arguments.length; )
      (e = arguments[f2++]) && (t = r(e)) && (n2 && (n2 += " "), n2 += t);
    return n2;
  }
  function twJoin() {
    var index2 = 0;
    var argument;
    var resolvedValue;
    var string = "";
    while (index2 < arguments.length) {
      if (argument = arguments[index2++]) {
        if (resolvedValue = toValue(argument)) {
          string && (string += " ");
          string += resolvedValue;
        }
      }
    }
    return string;
  }
  function toValue(mix) {
    if (typeof mix === "string") {
      return mix;
    }
    var resolvedValue;
    var string = "";
    for (var k2 = 0; k2 < mix.length; k2++) {
      if (mix[k2]) {
        if (resolvedValue = toValue(mix[k2])) {
          string && (string += " ");
          string += resolvedValue;
        }
      }
    }
    return string;
  }
  var CLASS_PART_SEPARATOR = "-";
  function createClassUtils(config) {
    var classMap = createClassMap(config);
    var conflictingClassGroups = config.conflictingClassGroups, _config$conflictingCl = config.conflictingClassGroupModifiers, conflictingClassGroupModifiers = _config$conflictingCl === void 0 ? {} : _config$conflictingCl;
    function getClassGroupId(className) {
      var classParts = className.split(CLASS_PART_SEPARATOR);
      if (classParts[0] === "" && classParts.length !== 1) {
        classParts.shift();
      }
      return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
    }
    function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
      var conflicts = conflictingClassGroups[classGroupId] || [];
      if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
        return [].concat(conflicts, conflictingClassGroupModifiers[classGroupId]);
      }
      return conflicts;
    }
    return {
      getClassGroupId,
      getConflictingClassGroupIds
    };
  }
  function getGroupRecursive(classParts, classPartObject) {
    var _a;
    if (classParts.length === 0) {
      return classPartObject.classGroupId;
    }
    var currentClassPart = classParts[0];
    var nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    var classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
    if (classGroupFromNextClassPart) {
      return classGroupFromNextClassPart;
    }
    if (classPartObject.validators.length === 0) {
      return void 0;
    }
    var classRest = classParts.join(CLASS_PART_SEPARATOR);
    return (_a = classPartObject.validators.find(function(_ref) {
      var validator = _ref.validator;
      return validator(classRest);
    })) == null ? void 0 : _a.classGroupId;
  }
  var arbitraryPropertyRegex = /^\[(.+)\]$/;
  function getGroupIdForArbitraryProperty(className) {
    if (arbitraryPropertyRegex.test(className)) {
      var arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
      var property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
      if (property) {
        return "arbitrary.." + property;
      }
    }
  }
  function createClassMap(config) {
    var theme = config.theme, prefix = config.prefix;
    var classMap = {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    };
    var prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
    prefixedClassGroupEntries.forEach(function(_ref2) {
      var classGroupId = _ref2[0], classGroup = _ref2[1];
      processClassesRecursively(classGroup, classMap, classGroupId, theme);
    });
    return classMap;
  }
  function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
    classGroup.forEach(function(classDefinition) {
      if (typeof classDefinition === "string") {
        var classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
        classPartObjectToEdit.classGroupId = classGroupId;
        return;
      }
      if (typeof classDefinition === "function") {
        if (isThemeGetter(classDefinition)) {
          processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
          return;
        }
        classPartObject.validators.push({
          validator: classDefinition,
          classGroupId
        });
        return;
      }
      Object.entries(classDefinition).forEach(function(_ref3) {
        var key = _ref3[0], classGroup2 = _ref3[1];
        processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
      });
    });
  }
  function getPart(classPartObject, path) {
    var currentClassPartObject = classPartObject;
    path.split(CLASS_PART_SEPARATOR).forEach(function(pathPart) {
      if (!currentClassPartObject.nextPart.has(pathPart)) {
        currentClassPartObject.nextPart.set(pathPart, {
          nextPart: /* @__PURE__ */ new Map(),
          validators: []
        });
      }
      currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
    });
    return currentClassPartObject;
  }
  function isThemeGetter(func) {
    return func.isThemeGetter;
  }
  function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
    if (!prefix) {
      return classGroupEntries;
    }
    return classGroupEntries.map(function(_ref4) {
      var classGroupId = _ref4[0], classGroup = _ref4[1];
      var prefixedClassGroup = classGroup.map(function(classDefinition) {
        if (typeof classDefinition === "string") {
          return prefix + classDefinition;
        }
        if (typeof classDefinition === "object") {
          return Object.fromEntries(Object.entries(classDefinition).map(function(_ref5) {
            var key = _ref5[0], value = _ref5[1];
            return [prefix + key, value];
          }));
        }
        return classDefinition;
      });
      return [classGroupId, prefixedClassGroup];
    });
  }
  function createLruCache(maxCacheSize) {
    if (maxCacheSize < 1) {
      return {
        get: function get() {
          return void 0;
        },
        set: function set() {
        }
      };
    }
    var cacheSize = 0;
    var cache = /* @__PURE__ */ new Map();
    var previousCache = /* @__PURE__ */ new Map();
    function update(key, value) {
      cache.set(key, value);
      cacheSize++;
      if (cacheSize > maxCacheSize) {
        cacheSize = 0;
        previousCache = cache;
        cache = /* @__PURE__ */ new Map();
      }
    }
    return {
      get: function get(key) {
        var value = cache.get(key);
        if (value !== void 0) {
          return value;
        }
        if ((value = previousCache.get(key)) !== void 0) {
          update(key, value);
          return value;
        }
      },
      set: function set(key, value) {
        if (cache.has(key)) {
          cache.set(key, value);
        } else {
          update(key, value);
        }
      }
    };
  }
  var IMPORTANT_MODIFIER = "!";
  function createSplitModifiers(config) {
    var separator = config.separator || ":";
    var isSeparatorSingleCharacter = separator.length === 1;
    var firstSeparatorCharacter = separator[0];
    var separatorLength = separator.length;
    return function splitModifiers(className) {
      var modifiers = [];
      var bracketDepth = 0;
      var modifierStart = 0;
      var postfixModifierPosition;
      for (var index2 = 0; index2 < className.length; index2++) {
        var currentCharacter = className[index2];
        if (bracketDepth === 0) {
          if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index2, index2 + separatorLength) === separator)) {
            modifiers.push(className.slice(modifierStart, index2));
            modifierStart = index2 + separatorLength;
            continue;
          }
          if (currentCharacter === "/") {
            postfixModifierPosition = index2;
            continue;
          }
        }
        if (currentCharacter === "[") {
          bracketDepth++;
        } else if (currentCharacter === "]") {
          bracketDepth--;
        }
      }
      var baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
      var hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
      var baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
      var maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
      return {
        modifiers,
        hasImportantModifier,
        baseClassName,
        maybePostfixModifierPosition
      };
    };
  }
  function sortModifiers(modifiers) {
    if (modifiers.length <= 1) {
      return modifiers;
    }
    var sortedModifiers = [];
    var unsortedModifiers = [];
    modifiers.forEach(function(modifier) {
      var isArbitraryVariant = modifier[0] === "[";
      if (isArbitraryVariant) {
        sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort().concat([modifier]));
        unsortedModifiers = [];
      } else {
        unsortedModifiers.push(modifier);
      }
    });
    sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort());
    return sortedModifiers;
  }
  function createConfigUtils(config) {
    return {
      cache: createLruCache(config.cacheSize),
      splitModifiers: createSplitModifiers(config),
      ...createClassUtils(config)
    };
  }
  var SPLIT_CLASSES_REGEX = /\s+/;
  function mergeClassList(classList, configUtils) {
    var splitModifiers = configUtils.splitModifiers, getClassGroupId = configUtils.getClassGroupId, getConflictingClassGroupIds = configUtils.getConflictingClassGroupIds;
    var classGroupsInConflict = /* @__PURE__ */ new Set();
    return classList.trim().split(SPLIT_CLASSES_REGEX).map(function(originalClassName) {
      var _splitModifiers = splitModifiers(originalClassName), modifiers = _splitModifiers.modifiers, hasImportantModifier = _splitModifiers.hasImportantModifier, baseClassName = _splitModifiers.baseClassName, maybePostfixModifierPosition = _splitModifiers.maybePostfixModifierPosition;
      var classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
      var hasPostfixModifier = Boolean(maybePostfixModifierPosition);
      if (!classGroupId) {
        if (!maybePostfixModifierPosition) {
          return {
            isTailwindClass: false,
            originalClassName
          };
        }
        classGroupId = getClassGroupId(baseClassName);
        if (!classGroupId) {
          return {
            isTailwindClass: false,
            originalClassName
          };
        }
        hasPostfixModifier = false;
      }
      var variantModifier = sortModifiers(modifiers).join(":");
      var modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
      return {
        isTailwindClass: true,
        modifierId,
        classGroupId,
        originalClassName,
        hasPostfixModifier
      };
    }).reverse().filter(function(parsed) {
      if (!parsed.isTailwindClass) {
        return true;
      }
      var modifierId = parsed.modifierId, classGroupId = parsed.classGroupId, hasPostfixModifier = parsed.hasPostfixModifier;
      var classId = modifierId + classGroupId;
      if (classGroupsInConflict.has(classId)) {
        return false;
      }
      classGroupsInConflict.add(classId);
      getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach(function(group) {
        return classGroupsInConflict.add(modifierId + group);
      });
      return true;
    }).reverse().map(function(parsed) {
      return parsed.originalClassName;
    }).join(" ");
  }
  function createTailwindMerge() {
    for (var _len = arguments.length, createConfig = new Array(_len), _key = 0; _key < _len; _key++) {
      createConfig[_key] = arguments[_key];
    }
    var configUtils;
    var cacheGet;
    var cacheSet;
    var functionToCall = initTailwindMerge;
    function initTailwindMerge(classList) {
      var firstCreateConfig = createConfig[0], restCreateConfig = createConfig.slice(1);
      var config = restCreateConfig.reduce(function(previousConfig, createConfigCurrent) {
        return createConfigCurrent(previousConfig);
      }, firstCreateConfig());
      configUtils = createConfigUtils(config);
      cacheGet = configUtils.cache.get;
      cacheSet = configUtils.cache.set;
      functionToCall = tailwindMerge;
      return tailwindMerge(classList);
    }
    function tailwindMerge(classList) {
      var cachedResult = cacheGet(classList);
      if (cachedResult) {
        return cachedResult;
      }
      var result = mergeClassList(classList, configUtils);
      cacheSet(classList, result);
      return result;
    }
    return function callTailwindMerge() {
      return functionToCall(twJoin.apply(null, arguments));
    };
  }
  function fromTheme(key) {
    var themeGetter = function themeGetter2(theme) {
      return theme[key] || [];
    };
    themeGetter.isThemeGetter = true;
    return themeGetter;
  }
  var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
  var fractionRegex = /^\d+\/\d+$/;
  var stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
  var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
  var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
  var shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  function isLength(value) {
    return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value) || isArbitraryLength(value);
  }
  function isArbitraryLength(value) {
    return getIsArbitraryValue(value, "length", isLengthOnly);
  }
  function isArbitrarySize(value) {
    return getIsArbitraryValue(value, "size", isNever);
  }
  function isArbitraryPosition(value) {
    return getIsArbitraryValue(value, "position", isNever);
  }
  function isArbitraryUrl(value) {
    return getIsArbitraryValue(value, "url", isUrl);
  }
  function isArbitraryNumber(value) {
    return getIsArbitraryValue(value, "number", isNumber);
  }
  function isNumber(value) {
    return !Number.isNaN(Number(value));
  }
  function isPercent(value) {
    return value.endsWith("%") && isNumber(value.slice(0, -1));
  }
  function isInteger(value) {
    return isIntegerOnly(value) || getIsArbitraryValue(value, "number", isIntegerOnly);
  }
  function isArbitraryValue(value) {
    return arbitraryValueRegex.test(value);
  }
  function isAny() {
    return true;
  }
  function isTshirtSize(value) {
    return tshirtUnitRegex.test(value);
  }
  function isArbitraryShadow(value) {
    return getIsArbitraryValue(value, "", isShadow);
  }
  function getIsArbitraryValue(value, label, testValue) {
    var result = arbitraryValueRegex.exec(value);
    if (result) {
      if (result[1]) {
        return result[1] === label;
      }
      return testValue(result[2]);
    }
    return false;
  }
  function isLengthOnly(value) {
    return lengthUnitRegex.test(value);
  }
  function isNever() {
    return false;
  }
  function isUrl(value) {
    return value.startsWith("url(");
  }
  function isIntegerOnly(value) {
    return Number.isInteger(Number(value));
  }
  function isShadow(value) {
    return shadowRegex.test(value);
  }
  function getDefaultConfig() {
    var colors = fromTheme("colors");
    var spacing = fromTheme("spacing");
    var blur = fromTheme("blur");
    var brightness = fromTheme("brightness");
    var borderColor = fromTheme("borderColor");
    var borderRadius = fromTheme("borderRadius");
    var borderSpacing = fromTheme("borderSpacing");
    var borderWidth = fromTheme("borderWidth");
    var contrast = fromTheme("contrast");
    var grayscale = fromTheme("grayscale");
    var hueRotate = fromTheme("hueRotate");
    var invert = fromTheme("invert");
    var gap = fromTheme("gap");
    var gradientColorStops = fromTheme("gradientColorStops");
    var gradientColorStopPositions = fromTheme("gradientColorStopPositions");
    var inset = fromTheme("inset");
    var margin = fromTheme("margin");
    var opacity = fromTheme("opacity");
    var padding = fromTheme("padding");
    var saturate = fromTheme("saturate");
    var scale = fromTheme("scale");
    var sepia = fromTheme("sepia");
    var skew = fromTheme("skew");
    var space = fromTheme("space");
    var translate = fromTheme("translate");
    var getOverscroll = function getOverscroll2() {
      return ["auto", "contain", "none"];
    };
    var getOverflow = function getOverflow2() {
      return ["auto", "hidden", "clip", "visible", "scroll"];
    };
    var getSpacingWithAutoAndArbitrary = function getSpacingWithAutoAndArbitrary2() {
      return ["auto", isArbitraryValue, spacing];
    };
    var getSpacingWithArbitrary = function getSpacingWithArbitrary2() {
      return [isArbitraryValue, spacing];
    };
    var getLengthWithEmpty = function getLengthWithEmpty2() {
      return ["", isLength];
    };
    var getNumberWithAutoAndArbitrary = function getNumberWithAutoAndArbitrary2() {
      return ["auto", isNumber, isArbitraryValue];
    };
    var getPositions = function getPositions2() {
      return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
    };
    var getLineStyles = function getLineStyles2() {
      return ["solid", "dashed", "dotted", "double", "none"];
    };
    var getBlendModes = function getBlendModes2() {
      return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
    };
    var getAlign = function getAlign2() {
      return ["start", "end", "center", "between", "around", "evenly", "stretch"];
    };
    var getZeroAndEmpty = function getZeroAndEmpty2() {
      return ["", "0", isArbitraryValue];
    };
    var getBreaks = function getBreaks2() {
      return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
    };
    var getNumber = function getNumber2() {
      return [isNumber, isArbitraryNumber];
    };
    var getNumberAndArbitrary = function getNumberAndArbitrary2() {
      return [isNumber, isArbitraryValue];
    };
    return {
      cacheSize: 500,
      theme: {
        colors: [isAny],
        spacing: [isLength],
        blur: ["none", "", isTshirtSize, isArbitraryValue],
        brightness: getNumber(),
        borderColor: [colors],
        borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
        borderSpacing: getSpacingWithArbitrary(),
        borderWidth: getLengthWithEmpty(),
        contrast: getNumber(),
        grayscale: getZeroAndEmpty(),
        hueRotate: getNumberAndArbitrary(),
        invert: getZeroAndEmpty(),
        gap: getSpacingWithArbitrary(),
        gradientColorStops: [colors],
        gradientColorStopPositions: [isPercent, isArbitraryLength],
        inset: getSpacingWithAutoAndArbitrary(),
        margin: getSpacingWithAutoAndArbitrary(),
        opacity: getNumber(),
        padding: getSpacingWithArbitrary(),
        saturate: getNumber(),
        scale: getNumber(),
        sepia: getZeroAndEmpty(),
        skew: getNumberAndArbitrary(),
        space: getSpacingWithArbitrary(),
        translate: getSpacingWithArbitrary()
      },
      classGroups: {
        // Layout
        /**
         * Aspect Ratio
         * @see https://tailwindcss.com/docs/aspect-ratio
         */
        aspect: [{
          aspect: ["auto", "square", "video", isArbitraryValue]
        }],
        /**
         * Container
         * @see https://tailwindcss.com/docs/container
         */
        container: ["container"],
        /**
         * Columns
         * @see https://tailwindcss.com/docs/columns
         */
        columns: [{
          columns: [isTshirtSize]
        }],
        /**
         * Break After
         * @see https://tailwindcss.com/docs/break-after
         */
        "break-after": [{
          "break-after": getBreaks()
        }],
        /**
         * Break Before
         * @see https://tailwindcss.com/docs/break-before
         */
        "break-before": [{
          "break-before": getBreaks()
        }],
        /**
         * Break Inside
         * @see https://tailwindcss.com/docs/break-inside
         */
        "break-inside": [{
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
        }],
        /**
         * Box Decoration Break
         * @see https://tailwindcss.com/docs/box-decoration-break
         */
        "box-decoration": [{
          "box-decoration": ["slice", "clone"]
        }],
        /**
         * Box Sizing
         * @see https://tailwindcss.com/docs/box-sizing
         */
        box: [{
          box: ["border", "content"]
        }],
        /**
         * Display
         * @see https://tailwindcss.com/docs/display
         */
        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
        /**
         * Floats
         * @see https://tailwindcss.com/docs/float
         */
        "float": [{
          "float": ["right", "left", "none"]
        }],
        /**
         * Clear
         * @see https://tailwindcss.com/docs/clear
         */
        clear: [{
          clear: ["left", "right", "both", "none"]
        }],
        /**
         * Isolation
         * @see https://tailwindcss.com/docs/isolation
         */
        isolation: ["isolate", "isolation-auto"],
        /**
         * Object Fit
         * @see https://tailwindcss.com/docs/object-fit
         */
        "object-fit": [{
          object: ["contain", "cover", "fill", "none", "scale-down"]
        }],
        /**
         * Object Position
         * @see https://tailwindcss.com/docs/object-position
         */
        "object-position": [{
          object: [].concat(getPositions(), [isArbitraryValue])
        }],
        /**
         * Overflow
         * @see https://tailwindcss.com/docs/overflow
         */
        overflow: [{
          overflow: getOverflow()
        }],
        /**
         * Overflow X
         * @see https://tailwindcss.com/docs/overflow
         */
        "overflow-x": [{
          "overflow-x": getOverflow()
        }],
        /**
         * Overflow Y
         * @see https://tailwindcss.com/docs/overflow
         */
        "overflow-y": [{
          "overflow-y": getOverflow()
        }],
        /**
         * Overscroll Behavior
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        overscroll: [{
          overscroll: getOverscroll()
        }],
        /**
         * Overscroll Behavior X
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        "overscroll-x": [{
          "overscroll-x": getOverscroll()
        }],
        /**
         * Overscroll Behavior Y
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        "overscroll-y": [{
          "overscroll-y": getOverscroll()
        }],
        /**
         * Position
         * @see https://tailwindcss.com/docs/position
         */
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        /**
         * Top / Right / Bottom / Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        inset: [{
          inset: [inset]
        }],
        /**
         * Right / Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        "inset-x": [{
          "inset-x": [inset]
        }],
        /**
         * Top / Bottom
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        "inset-y": [{
          "inset-y": [inset]
        }],
        /**
         * Start
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        start: [{
          start: [inset]
        }],
        /**
         * End
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        end: [{
          end: [inset]
        }],
        /**
         * Top
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        top: [{
          top: [inset]
        }],
        /**
         * Right
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        right: [{
          right: [inset]
        }],
        /**
         * Bottom
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        bottom: [{
          bottom: [inset]
        }],
        /**
         * Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        left: [{
          left: [inset]
        }],
        /**
         * Visibility
         * @see https://tailwindcss.com/docs/visibility
         */
        visibility: ["visible", "invisible", "collapse"],
        /**
         * Z-Index
         * @see https://tailwindcss.com/docs/z-index
         */
        z: [{
          z: ["auto", isInteger]
        }],
        // Flexbox and Grid
        /**
         * Flex Basis
         * @see https://tailwindcss.com/docs/flex-basis
         */
        basis: [{
          basis: getSpacingWithAutoAndArbitrary()
        }],
        /**
         * Flex Direction
         * @see https://tailwindcss.com/docs/flex-direction
         */
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        /**
         * Flex Wrap
         * @see https://tailwindcss.com/docs/flex-wrap
         */
        "flex-wrap": [{
          flex: ["wrap", "wrap-reverse", "nowrap"]
        }],
        /**
         * Flex
         * @see https://tailwindcss.com/docs/flex
         */
        flex: [{
          flex: ["1", "auto", "initial", "none", isArbitraryValue]
        }],
        /**
         * Flex Grow
         * @see https://tailwindcss.com/docs/flex-grow
         */
        grow: [{
          grow: getZeroAndEmpty()
        }],
        /**
         * Flex Shrink
         * @see https://tailwindcss.com/docs/flex-shrink
         */
        shrink: [{
          shrink: getZeroAndEmpty()
        }],
        /**
         * Order
         * @see https://tailwindcss.com/docs/order
         */
        order: [{
          order: ["first", "last", "none", isInteger]
        }],
        /**
         * Grid Template Columns
         * @see https://tailwindcss.com/docs/grid-template-columns
         */
        "grid-cols": [{
          "grid-cols": [isAny]
        }],
        /**
         * Grid Column Start / End
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-start-end": [{
          col: ["auto", {
            span: ["full", isInteger]
          }, isArbitraryValue]
        }],
        /**
         * Grid Column Start
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-start": [{
          "col-start": getNumberWithAutoAndArbitrary()
        }],
        /**
         * Grid Column End
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-end": [{
          "col-end": getNumberWithAutoAndArbitrary()
        }],
        /**
         * Grid Template Rows
         * @see https://tailwindcss.com/docs/grid-template-rows
         */
        "grid-rows": [{
          "grid-rows": [isAny]
        }],
        /**
         * Grid Row Start / End
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-start-end": [{
          row: ["auto", {
            span: [isInteger]
          }, isArbitraryValue]
        }],
        /**
         * Grid Row Start
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-start": [{
          "row-start": getNumberWithAutoAndArbitrary()
        }],
        /**
         * Grid Row End
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-end": [{
          "row-end": getNumberWithAutoAndArbitrary()
        }],
        /**
         * Grid Auto Flow
         * @see https://tailwindcss.com/docs/grid-auto-flow
         */
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        /**
         * Grid Auto Columns
         * @see https://tailwindcss.com/docs/grid-auto-columns
         */
        "auto-cols": [{
          "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
        }],
        /**
         * Grid Auto Rows
         * @see https://tailwindcss.com/docs/grid-auto-rows
         */
        "auto-rows": [{
          "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
        }],
        /**
         * Gap
         * @see https://tailwindcss.com/docs/gap
         */
        gap: [{
          gap: [gap]
        }],
        /**
         * Gap X
         * @see https://tailwindcss.com/docs/gap
         */
        "gap-x": [{
          "gap-x": [gap]
        }],
        /**
         * Gap Y
         * @see https://tailwindcss.com/docs/gap
         */
        "gap-y": [{
          "gap-y": [gap]
        }],
        /**
         * Justify Content
         * @see https://tailwindcss.com/docs/justify-content
         */
        "justify-content": [{
          justify: ["normal"].concat(getAlign())
        }],
        /**
         * Justify Items
         * @see https://tailwindcss.com/docs/justify-items
         */
        "justify-items": [{
          "justify-items": ["start", "end", "center", "stretch"]
        }],
        /**
         * Justify Self
         * @see https://tailwindcss.com/docs/justify-self
         */
        "justify-self": [{
          "justify-self": ["auto", "start", "end", "center", "stretch"]
        }],
        /**
         * Align Content
         * @see https://tailwindcss.com/docs/align-content
         */
        "align-content": [{
          content: ["normal"].concat(getAlign(), ["baseline"])
        }],
        /**
         * Align Items
         * @see https://tailwindcss.com/docs/align-items
         */
        "align-items": [{
          items: ["start", "end", "center", "baseline", "stretch"]
        }],
        /**
         * Align Self
         * @see https://tailwindcss.com/docs/align-self
         */
        "align-self": [{
          self: ["auto", "start", "end", "center", "stretch", "baseline"]
        }],
        /**
         * Place Content
         * @see https://tailwindcss.com/docs/place-content
         */
        "place-content": [{
          "place-content": [].concat(getAlign(), ["baseline"])
        }],
        /**
         * Place Items
         * @see https://tailwindcss.com/docs/place-items
         */
        "place-items": [{
          "place-items": ["start", "end", "center", "baseline", "stretch"]
        }],
        /**
         * Place Self
         * @see https://tailwindcss.com/docs/place-self
         */
        "place-self": [{
          "place-self": ["auto", "start", "end", "center", "stretch"]
        }],
        // Spacing
        /**
         * Padding
         * @see https://tailwindcss.com/docs/padding
         */
        p: [{
          p: [padding]
        }],
        /**
         * Padding X
         * @see https://tailwindcss.com/docs/padding
         */
        px: [{
          px: [padding]
        }],
        /**
         * Padding Y
         * @see https://tailwindcss.com/docs/padding
         */
        py: [{
          py: [padding]
        }],
        /**
         * Padding Start
         * @see https://tailwindcss.com/docs/padding
         */
        ps: [{
          ps: [padding]
        }],
        /**
         * Padding End
         * @see https://tailwindcss.com/docs/padding
         */
        pe: [{
          pe: [padding]
        }],
        /**
         * Padding Top
         * @see https://tailwindcss.com/docs/padding
         */
        pt: [{
          pt: [padding]
        }],
        /**
         * Padding Right
         * @see https://tailwindcss.com/docs/padding
         */
        pr: [{
          pr: [padding]
        }],
        /**
         * Padding Bottom
         * @see https://tailwindcss.com/docs/padding
         */
        pb: [{
          pb: [padding]
        }],
        /**
         * Padding Left
         * @see https://tailwindcss.com/docs/padding
         */
        pl: [{
          pl: [padding]
        }],
        /**
         * Margin
         * @see https://tailwindcss.com/docs/margin
         */
        m: [{
          m: [margin]
        }],
        /**
         * Margin X
         * @see https://tailwindcss.com/docs/margin
         */
        mx: [{
          mx: [margin]
        }],
        /**
         * Margin Y
         * @see https://tailwindcss.com/docs/margin
         */
        my: [{
          my: [margin]
        }],
        /**
         * Margin Start
         * @see https://tailwindcss.com/docs/margin
         */
        ms: [{
          ms: [margin]
        }],
        /**
         * Margin End
         * @see https://tailwindcss.com/docs/margin
         */
        me: [{
          me: [margin]
        }],
        /**
         * Margin Top
         * @see https://tailwindcss.com/docs/margin
         */
        mt: [{
          mt: [margin]
        }],
        /**
         * Margin Right
         * @see https://tailwindcss.com/docs/margin
         */
        mr: [{
          mr: [margin]
        }],
        /**
         * Margin Bottom
         * @see https://tailwindcss.com/docs/margin
         */
        mb: [{
          mb: [margin]
        }],
        /**
         * Margin Left
         * @see https://tailwindcss.com/docs/margin
         */
        ml: [{
          ml: [margin]
        }],
        /**
         * Space Between X
         * @see https://tailwindcss.com/docs/space
         */
        "space-x": [{
          "space-x": [space]
        }],
        /**
         * Space Between X Reverse
         * @see https://tailwindcss.com/docs/space
         */
        "space-x-reverse": ["space-x-reverse"],
        /**
         * Space Between Y
         * @see https://tailwindcss.com/docs/space
         */
        "space-y": [{
          "space-y": [space]
        }],
        /**
         * Space Between Y Reverse
         * @see https://tailwindcss.com/docs/space
         */
        "space-y-reverse": ["space-y-reverse"],
        // Sizing
        /**
         * Width
         * @see https://tailwindcss.com/docs/width
         */
        w: [{
          w: ["auto", "min", "max", "fit", isArbitraryValue, spacing]
        }],
        /**
         * Min-Width
         * @see https://tailwindcss.com/docs/min-width
         */
        "min-w": [{
          "min-w": ["min", "max", "fit", isArbitraryValue, isLength]
        }],
        /**
         * Max-Width
         * @see https://tailwindcss.com/docs/max-width
         */
        "max-w": [{
          "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
            screen: [isTshirtSize]
          }, isTshirtSize, isArbitraryValue]
        }],
        /**
         * Height
         * @see https://tailwindcss.com/docs/height
         */
        h: [{
          h: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
        }],
        /**
         * Min-Height
         * @see https://tailwindcss.com/docs/min-height
         */
        "min-h": [{
          "min-h": ["min", "max", "fit", isArbitraryValue, isLength]
        }],
        /**
         * Max-Height
         * @see https://tailwindcss.com/docs/max-height
         */
        "max-h": [{
          "max-h": [isArbitraryValue, spacing, "min", "max", "fit"]
        }],
        // Typography
        /**
         * Font Size
         * @see https://tailwindcss.com/docs/font-size
         */
        "font-size": [{
          text: ["base", isTshirtSize, isArbitraryLength]
        }],
        /**
         * Font Smoothing
         * @see https://tailwindcss.com/docs/font-smoothing
         */
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        /**
         * Font Style
         * @see https://tailwindcss.com/docs/font-style
         */
        "font-style": ["italic", "not-italic"],
        /**
         * Font Weight
         * @see https://tailwindcss.com/docs/font-weight
         */
        "font-weight": [{
          font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
        }],
        /**
         * Font Family
         * @see https://tailwindcss.com/docs/font-family
         */
        "font-family": [{
          font: [isAny]
        }],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-normal": ["normal-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-ordinal": ["ordinal"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-slashed-zero": ["slashed-zero"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        /**
         * Letter Spacing
         * @see https://tailwindcss.com/docs/letter-spacing
         */
        tracking: [{
          tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
        }],
        /**
         * Line Clamp
         * @see https://tailwindcss.com/docs/line-clamp
         */
        "line-clamp": [{
          "line-clamp": ["none", isNumber, isArbitraryNumber]
        }],
        /**
         * Line Height
         * @see https://tailwindcss.com/docs/line-height
         */
        leading: [{
          leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isArbitraryValue, isLength]
        }],
        /**
         * List Style Image
         * @see https://tailwindcss.com/docs/list-style-image
         */
        "list-image": [{
          "list-image": ["none", isArbitraryValue]
        }],
        /**
         * List Style Type
         * @see https://tailwindcss.com/docs/list-style-type
         */
        "list-style-type": [{
          list: ["none", "disc", "decimal", isArbitraryValue]
        }],
        /**
         * List Style Position
         * @see https://tailwindcss.com/docs/list-style-position
         */
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        /**
         * Placeholder Color
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/placeholder-color
         */
        "placeholder-color": [{
          placeholder: [colors]
        }],
        /**
         * Placeholder Opacity
         * @see https://tailwindcss.com/docs/placeholder-opacity
         */
        "placeholder-opacity": [{
          "placeholder-opacity": [opacity]
        }],
        /**
         * Text Alignment
         * @see https://tailwindcss.com/docs/text-align
         */
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        /**
         * Text Color
         * @see https://tailwindcss.com/docs/text-color
         */
        "text-color": [{
          text: [colors]
        }],
        /**
         * Text Opacity
         * @see https://tailwindcss.com/docs/text-opacity
         */
        "text-opacity": [{
          "text-opacity": [opacity]
        }],
        /**
         * Text Decoration
         * @see https://tailwindcss.com/docs/text-decoration
         */
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        /**
         * Text Decoration Style
         * @see https://tailwindcss.com/docs/text-decoration-style
         */
        "text-decoration-style": [{
          decoration: [].concat(getLineStyles(), ["wavy"])
        }],
        /**
         * Text Decoration Thickness
         * @see https://tailwindcss.com/docs/text-decoration-thickness
         */
        "text-decoration-thickness": [{
          decoration: ["auto", "from-font", isLength]
        }],
        /**
         * Text Underline Offset
         * @see https://tailwindcss.com/docs/text-underline-offset
         */
        "underline-offset": [{
          "underline-offset": ["auto", isArbitraryValue, isLength]
        }],
        /**
         * Text Decoration Color
         * @see https://tailwindcss.com/docs/text-decoration-color
         */
        "text-decoration-color": [{
          decoration: [colors]
        }],
        /**
         * Text Transform
         * @see https://tailwindcss.com/docs/text-transform
         */
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        /**
         * Text Overflow
         * @see https://tailwindcss.com/docs/text-overflow
         */
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        /**
         * Text Indent
         * @see https://tailwindcss.com/docs/text-indent
         */
        indent: [{
          indent: getSpacingWithArbitrary()
        }],
        /**
         * Vertical Alignment
         * @see https://tailwindcss.com/docs/vertical-align
         */
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
        }],
        /**
         * Whitespace
         * @see https://tailwindcss.com/docs/whitespace
         */
        whitespace: [{
          whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
        }],
        /**
         * Word Break
         * @see https://tailwindcss.com/docs/word-break
         */
        "break": [{
          "break": ["normal", "words", "all", "keep"]
        }],
        /**
         * Hyphens
         * @see https://tailwindcss.com/docs/hyphens
         */
        hyphens: [{
          hyphens: ["none", "manual", "auto"]
        }],
        /**
         * Content
         * @see https://tailwindcss.com/docs/content
         */
        content: [{
          content: ["none", isArbitraryValue]
        }],
        // Backgrounds
        /**
         * Background Attachment
         * @see https://tailwindcss.com/docs/background-attachment
         */
        "bg-attachment": [{
          bg: ["fixed", "local", "scroll"]
        }],
        /**
         * Background Clip
         * @see https://tailwindcss.com/docs/background-clip
         */
        "bg-clip": [{
          "bg-clip": ["border", "padding", "content", "text"]
        }],
        /**
         * Background Opacity
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/background-opacity
         */
        "bg-opacity": [{
          "bg-opacity": [opacity]
        }],
        /**
         * Background Origin
         * @see https://tailwindcss.com/docs/background-origin
         */
        "bg-origin": [{
          "bg-origin": ["border", "padding", "content"]
        }],
        /**
         * Background Position
         * @see https://tailwindcss.com/docs/background-position
         */
        "bg-position": [{
          bg: [].concat(getPositions(), [isArbitraryPosition])
        }],
        /**
         * Background Repeat
         * @see https://tailwindcss.com/docs/background-repeat
         */
        "bg-repeat": [{
          bg: ["no-repeat", {
            repeat: ["", "x", "y", "round", "space"]
          }]
        }],
        /**
         * Background Size
         * @see https://tailwindcss.com/docs/background-size
         */
        "bg-size": [{
          bg: ["auto", "cover", "contain", isArbitrarySize]
        }],
        /**
         * Background Image
         * @see https://tailwindcss.com/docs/background-image
         */
        "bg-image": [{
          bg: ["none", {
            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, isArbitraryUrl]
        }],
        /**
         * Background Color
         * @see https://tailwindcss.com/docs/background-color
         */
        "bg-color": [{
          bg: [colors]
        }],
        /**
         * Gradient Color Stops From Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-from-pos": [{
          from: [gradientColorStopPositions]
        }],
        /**
         * Gradient Color Stops Via Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-via-pos": [{
          via: [gradientColorStopPositions]
        }],
        /**
         * Gradient Color Stops To Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-to-pos": [{
          to: [gradientColorStopPositions]
        }],
        /**
         * Gradient Color Stops From
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-from": [{
          from: [gradientColorStops]
        }],
        /**
         * Gradient Color Stops Via
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-via": [{
          via: [gradientColorStops]
        }],
        /**
         * Gradient Color Stops To
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-to": [{
          to: [gradientColorStops]
        }],
        // Borders
        /**
         * Border Radius
         * @see https://tailwindcss.com/docs/border-radius
         */
        rounded: [{
          rounded: [borderRadius]
        }],
        /**
         * Border Radius Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-s": [{
          "rounded-s": [borderRadius]
        }],
        /**
         * Border Radius End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-e": [{
          "rounded-e": [borderRadius]
        }],
        /**
         * Border Radius Top
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-t": [{
          "rounded-t": [borderRadius]
        }],
        /**
         * Border Radius Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-r": [{
          "rounded-r": [borderRadius]
        }],
        /**
         * Border Radius Bottom
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-b": [{
          "rounded-b": [borderRadius]
        }],
        /**
         * Border Radius Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-l": [{
          "rounded-l": [borderRadius]
        }],
        /**
         * Border Radius Start Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-ss": [{
          "rounded-ss": [borderRadius]
        }],
        /**
         * Border Radius Start End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-se": [{
          "rounded-se": [borderRadius]
        }],
        /**
         * Border Radius End End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-ee": [{
          "rounded-ee": [borderRadius]
        }],
        /**
         * Border Radius End Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-es": [{
          "rounded-es": [borderRadius]
        }],
        /**
         * Border Radius Top Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-tl": [{
          "rounded-tl": [borderRadius]
        }],
        /**
         * Border Radius Top Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-tr": [{
          "rounded-tr": [borderRadius]
        }],
        /**
         * Border Radius Bottom Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-br": [{
          "rounded-br": [borderRadius]
        }],
        /**
         * Border Radius Bottom Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-bl": [{
          "rounded-bl": [borderRadius]
        }],
        /**
         * Border Width
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w": [{
          border: [borderWidth]
        }],
        /**
         * Border Width X
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-x": [{
          "border-x": [borderWidth]
        }],
        /**
         * Border Width Y
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-y": [{
          "border-y": [borderWidth]
        }],
        /**
         * Border Width Start
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-s": [{
          "border-s": [borderWidth]
        }],
        /**
         * Border Width End
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-e": [{
          "border-e": [borderWidth]
        }],
        /**
         * Border Width Top
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-t": [{
          "border-t": [borderWidth]
        }],
        /**
         * Border Width Right
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-r": [{
          "border-r": [borderWidth]
        }],
        /**
         * Border Width Bottom
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-b": [{
          "border-b": [borderWidth]
        }],
        /**
         * Border Width Left
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-l": [{
          "border-l": [borderWidth]
        }],
        /**
         * Border Opacity
         * @see https://tailwindcss.com/docs/border-opacity
         */
        "border-opacity": [{
          "border-opacity": [opacity]
        }],
        /**
         * Border Style
         * @see https://tailwindcss.com/docs/border-style
         */
        "border-style": [{
          border: [].concat(getLineStyles(), ["hidden"])
        }],
        /**
         * Divide Width X
         * @see https://tailwindcss.com/docs/divide-width
         */
        "divide-x": [{
          "divide-x": [borderWidth]
        }],
        /**
         * Divide Width X Reverse
         * @see https://tailwindcss.com/docs/divide-width
         */
        "divide-x-reverse": ["divide-x-reverse"],
        /**
         * Divide Width Y
         * @see https://tailwindcss.com/docs/divide-width
         */
        "divide-y": [{
          "divide-y": [borderWidth]
        }],
        /**
         * Divide Width Y Reverse
         * @see https://tailwindcss.com/docs/divide-width
         */
        "divide-y-reverse": ["divide-y-reverse"],
        /**
         * Divide Opacity
         * @see https://tailwindcss.com/docs/divide-opacity
         */
        "divide-opacity": [{
          "divide-opacity": [opacity]
        }],
        /**
         * Divide Style
         * @see https://tailwindcss.com/docs/divide-style
         */
        "divide-style": [{
          divide: getLineStyles()
        }],
        /**
         * Border Color
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color": [{
          border: [borderColor]
        }],
        /**
         * Border Color X
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-x": [{
          "border-x": [borderColor]
        }],
        /**
         * Border Color Y
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-y": [{
          "border-y": [borderColor]
        }],
        /**
         * Border Color Top
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-t": [{
          "border-t": [borderColor]
        }],
        /**
         * Border Color Right
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-r": [{
          "border-r": [borderColor]
        }],
        /**
         * Border Color Bottom
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-b": [{
          "border-b": [borderColor]
        }],
        /**
         * Border Color Left
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-l": [{
          "border-l": [borderColor]
        }],
        /**
         * Divide Color
         * @see https://tailwindcss.com/docs/divide-color
         */
        "divide-color": [{
          divide: [borderColor]
        }],
        /**
         * Outline Style
         * @see https://tailwindcss.com/docs/outline-style
         */
        "outline-style": [{
          outline: [""].concat(getLineStyles())
        }],
        /**
         * Outline Offset
         * @see https://tailwindcss.com/docs/outline-offset
         */
        "outline-offset": [{
          "outline-offset": [isArbitraryValue, isLength]
        }],
        /**
         * Outline Width
         * @see https://tailwindcss.com/docs/outline-width
         */
        "outline-w": [{
          outline: [isLength]
        }],
        /**
         * Outline Color
         * @see https://tailwindcss.com/docs/outline-color
         */
        "outline-color": [{
          outline: [colors]
        }],
        /**
         * Ring Width
         * @see https://tailwindcss.com/docs/ring-width
         */
        "ring-w": [{
          ring: getLengthWithEmpty()
        }],
        /**
         * Ring Width Inset
         * @see https://tailwindcss.com/docs/ring-width
         */
        "ring-w-inset": ["ring-inset"],
        /**
         * Ring Color
         * @see https://tailwindcss.com/docs/ring-color
         */
        "ring-color": [{
          ring: [colors]
        }],
        /**
         * Ring Opacity
         * @see https://tailwindcss.com/docs/ring-opacity
         */
        "ring-opacity": [{
          "ring-opacity": [opacity]
        }],
        /**
         * Ring Offset Width
         * @see https://tailwindcss.com/docs/ring-offset-width
         */
        "ring-offset-w": [{
          "ring-offset": [isLength]
        }],
        /**
         * Ring Offset Color
         * @see https://tailwindcss.com/docs/ring-offset-color
         */
        "ring-offset-color": [{
          "ring-offset": [colors]
        }],
        // Effects
        /**
         * Box Shadow
         * @see https://tailwindcss.com/docs/box-shadow
         */
        shadow: [{
          shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
        }],
        /**
         * Box Shadow Color
         * @see https://tailwindcss.com/docs/box-shadow-color
         */
        "shadow-color": [{
          shadow: [isAny]
        }],
        /**
         * Opacity
         * @see https://tailwindcss.com/docs/opacity
         */
        opacity: [{
          opacity: [opacity]
        }],
        /**
         * Mix Blend Mode
         * @see https://tailwindcss.com/docs/mix-blend-mode
         */
        "mix-blend": [{
          "mix-blend": getBlendModes()
        }],
        /**
         * Background Blend Mode
         * @see https://tailwindcss.com/docs/background-blend-mode
         */
        "bg-blend": [{
          "bg-blend": getBlendModes()
        }],
        // Filters
        /**
         * Filter
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/filter
         */
        filter: [{
          filter: ["", "none"]
        }],
        /**
         * Blur
         * @see https://tailwindcss.com/docs/blur
         */
        blur: [{
          blur: [blur]
        }],
        /**
         * Brightness
         * @see https://tailwindcss.com/docs/brightness
         */
        brightness: [{
          brightness: [brightness]
        }],
        /**
         * Contrast
         * @see https://tailwindcss.com/docs/contrast
         */
        contrast: [{
          contrast: [contrast]
        }],
        /**
         * Drop Shadow
         * @see https://tailwindcss.com/docs/drop-shadow
         */
        "drop-shadow": [{
          "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
        }],
        /**
         * Grayscale
         * @see https://tailwindcss.com/docs/grayscale
         */
        grayscale: [{
          grayscale: [grayscale]
        }],
        /**
         * Hue Rotate
         * @see https://tailwindcss.com/docs/hue-rotate
         */
        "hue-rotate": [{
          "hue-rotate": [hueRotate]
        }],
        /**
         * Invert
         * @see https://tailwindcss.com/docs/invert
         */
        invert: [{
          invert: [invert]
        }],
        /**
         * Saturate
         * @see https://tailwindcss.com/docs/saturate
         */
        saturate: [{
          saturate: [saturate]
        }],
        /**
         * Sepia
         * @see https://tailwindcss.com/docs/sepia
         */
        sepia: [{
          sepia: [sepia]
        }],
        /**
         * Backdrop Filter
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://tailwindcss.com/docs/backdrop-filter
         */
        "backdrop-filter": [{
          "backdrop-filter": ["", "none"]
        }],
        /**
         * Backdrop Blur
         * @see https://tailwindcss.com/docs/backdrop-blur
         */
        "backdrop-blur": [{
          "backdrop-blur": [blur]
        }],
        /**
         * Backdrop Brightness
         * @see https://tailwindcss.com/docs/backdrop-brightness
         */
        "backdrop-brightness": [{
          "backdrop-brightness": [brightness]
        }],
        /**
         * Backdrop Contrast
         * @see https://tailwindcss.com/docs/backdrop-contrast
         */
        "backdrop-contrast": [{
          "backdrop-contrast": [contrast]
        }],
        /**
         * Backdrop Grayscale
         * @see https://tailwindcss.com/docs/backdrop-grayscale
         */
        "backdrop-grayscale": [{
          "backdrop-grayscale": [grayscale]
        }],
        /**
         * Backdrop Hue Rotate
         * @see https://tailwindcss.com/docs/backdrop-hue-rotate
         */
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [hueRotate]
        }],
        /**
         * Backdrop Invert
         * @see https://tailwindcss.com/docs/backdrop-invert
         */
        "backdrop-invert": [{
          "backdrop-invert": [invert]
        }],
        /**
         * Backdrop Opacity
         * @see https://tailwindcss.com/docs/backdrop-opacity
         */
        "backdrop-opacity": [{
          "backdrop-opacity": [opacity]
        }],
        /**
         * Backdrop Saturate
         * @see https://tailwindcss.com/docs/backdrop-saturate
         */
        "backdrop-saturate": [{
          "backdrop-saturate": [saturate]
        }],
        /**
         * Backdrop Sepia
         * @see https://tailwindcss.com/docs/backdrop-sepia
         */
        "backdrop-sepia": [{
          "backdrop-sepia": [sepia]
        }],
        // Tables
        /**
         * Border Collapse
         * @see https://tailwindcss.com/docs/border-collapse
         */
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        /**
         * Border Spacing
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing": [{
          "border-spacing": [borderSpacing]
        }],
        /**
         * Border Spacing X
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing-x": [{
          "border-spacing-x": [borderSpacing]
        }],
        /**
         * Border Spacing Y
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing-y": [{
          "border-spacing-y": [borderSpacing]
        }],
        /**
         * Table Layout
         * @see https://tailwindcss.com/docs/table-layout
         */
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        /**
         * Caption Side
         * @see https://tailwindcss.com/docs/caption-side
         */
        caption: [{
          caption: ["top", "bottom"]
        }],
        // Transitions and Animation
        /**
         * Tranisition Property
         * @see https://tailwindcss.com/docs/transition-property
         */
        transition: [{
          transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
        }],
        /**
         * Transition Duration
         * @see https://tailwindcss.com/docs/transition-duration
         */
        duration: [{
          duration: getNumberAndArbitrary()
        }],
        /**
         * Transition Timing Function
         * @see https://tailwindcss.com/docs/transition-timing-function
         */
        ease: [{
          ease: ["linear", "in", "out", "in-out", isArbitraryValue]
        }],
        /**
         * Transition Delay
         * @see https://tailwindcss.com/docs/transition-delay
         */
        delay: [{
          delay: getNumberAndArbitrary()
        }],
        /**
         * Animation
         * @see https://tailwindcss.com/docs/animation
         */
        animate: [{
          animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
        }],
        // Transforms
        /**
         * Transform
         * @see https://tailwindcss.com/docs/transform
         */
        transform: [{
          transform: ["", "gpu", "none"]
        }],
        /**
         * Scale
         * @see https://tailwindcss.com/docs/scale
         */
        scale: [{
          scale: [scale]
        }],
        /**
         * Scale X
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-x": [{
          "scale-x": [scale]
        }],
        /**
         * Scale Y
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-y": [{
          "scale-y": [scale]
        }],
        /**
         * Rotate
         * @see https://tailwindcss.com/docs/rotate
         */
        rotate: [{
          rotate: [isInteger, isArbitraryValue]
        }],
        /**
         * Translate X
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-x": [{
          "translate-x": [translate]
        }],
        /**
         * Translate Y
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-y": [{
          "translate-y": [translate]
        }],
        /**
         * Skew X
         * @see https://tailwindcss.com/docs/skew
         */
        "skew-x": [{
          "skew-x": [skew]
        }],
        /**
         * Skew Y
         * @see https://tailwindcss.com/docs/skew
         */
        "skew-y": [{
          "skew-y": [skew]
        }],
        /**
         * Transform Origin
         * @see https://tailwindcss.com/docs/transform-origin
         */
        "transform-origin": [{
          origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
        }],
        // Interactivity
        /**
         * Accent Color
         * @see https://tailwindcss.com/docs/accent-color
         */
        accent: [{
          accent: ["auto", colors]
        }],
        /**
         * Appearance
         * @see https://tailwindcss.com/docs/appearance
         */
        appearance: ["appearance-none"],
        /**
         * Cursor
         * @see https://tailwindcss.com/docs/cursor
         */
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
        }],
        /**
         * Caret Color
         * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
         */
        "caret-color": [{
          caret: [colors]
        }],
        /**
         * Pointer Events
         * @see https://tailwindcss.com/docs/pointer-events
         */
        "pointer-events": [{
          "pointer-events": ["none", "auto"]
        }],
        /**
         * Resize
         * @see https://tailwindcss.com/docs/resize
         */
        resize: [{
          resize: ["none", "y", "x", ""]
        }],
        /**
         * Scroll Behavior
         * @see https://tailwindcss.com/docs/scroll-behavior
         */
        "scroll-behavior": [{
          scroll: ["auto", "smooth"]
        }],
        /**
         * Scroll Margin
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-m": [{
          "scroll-m": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin X
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mx": [{
          "scroll-mx": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Y
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-my": [{
          "scroll-my": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Start
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-ms": [{
          "scroll-ms": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin End
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-me": [{
          "scroll-me": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Top
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mt": [{
          "scroll-mt": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Right
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mr": [{
          "scroll-mr": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Bottom
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mb": [{
          "scroll-mb": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Margin Left
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-ml": [{
          "scroll-ml": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-p": [{
          "scroll-p": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding X
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-px": [{
          "scroll-px": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Y
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-py": [{
          "scroll-py": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Start
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-ps": [{
          "scroll-ps": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding End
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pe": [{
          "scroll-pe": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Top
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pt": [{
          "scroll-pt": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Right
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pr": [{
          "scroll-pr": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Bottom
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pb": [{
          "scroll-pb": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Padding Left
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pl": [{
          "scroll-pl": getSpacingWithArbitrary()
        }],
        /**
         * Scroll Snap Align
         * @see https://tailwindcss.com/docs/scroll-snap-align
         */
        "snap-align": [{
          snap: ["start", "end", "center", "align-none"]
        }],
        /**
         * Scroll Snap Stop
         * @see https://tailwindcss.com/docs/scroll-snap-stop
         */
        "snap-stop": [{
          snap: ["normal", "always"]
        }],
        /**
         * Scroll Snap Type
         * @see https://tailwindcss.com/docs/scroll-snap-type
         */
        "snap-type": [{
          snap: ["none", "x", "y", "both"]
        }],
        /**
         * Scroll Snap Type Strictness
         * @see https://tailwindcss.com/docs/scroll-snap-type
         */
        "snap-strictness": [{
          snap: ["mandatory", "proximity"]
        }],
        /**
         * Touch Action
         * @see https://tailwindcss.com/docs/touch-action
         */
        touch: [{
          touch: ["auto", "none", "pinch-zoom", "manipulation", {
            pan: ["x", "left", "right", "y", "up", "down"]
          }]
        }],
        /**
         * User Select
         * @see https://tailwindcss.com/docs/user-select
         */
        select: [{
          select: ["none", "text", "all", "auto"]
        }],
        /**
         * Will Change
         * @see https://tailwindcss.com/docs/will-change
         */
        "will-change": [{
          "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
        }],
        // SVG
        /**
         * Fill
         * @see https://tailwindcss.com/docs/fill
         */
        fill: [{
          fill: [colors, "none"]
        }],
        /**
         * Stroke Width
         * @see https://tailwindcss.com/docs/stroke-width
         */
        "stroke-w": [{
          stroke: [isLength, isArbitraryNumber]
        }],
        /**
         * Stroke
         * @see https://tailwindcss.com/docs/stroke
         */
        stroke: [{
          stroke: [colors, "none"]
        }],
        // Accessibility
        /**
         * Screen Readers
         * @see https://tailwindcss.com/docs/screen-readers
         */
        sr: ["sr-only", "not-sr-only"]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"]
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"]
      }
    };
  }
  var twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
  function cn(...inputs) {
    return twMerge(clsx(inputs));
  }
  const Sheet = $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9;
  const SheetTrigger = $5d3850c4d0b4e6c7$export$41fb9f06171c75f4;
  const SheetPortal = ({
    className,
    ...props
  }) => /* @__PURE__ */ jsxRuntimeExports.jsx($5d3850c4d0b4e6c7$export$602eac185826482c, { className: cn(className), ...props });
  SheetPortal.displayName = $5d3850c4d0b4e6c7$export$602eac185826482c.displayName;
  const SheetOverlay = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,
    {
      className: cn(
        "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      ),
      ...props,
      ref
    }
  ));
  SheetOverlay.displayName = $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff.displayName;
  const sheetVariants = cva(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
    {
      variants: {
        side: {
          top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
        }
      },
      defaultVariants: {
        side: "right"
      }
    }
  );
  const SheetContent = React__namespace.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
      {
        ref,
        className: cn(sheetVariants({ side }), className),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxRuntimeExports.jsxs($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, { className: "absolute right-[25px] top-[25px] rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-[20px] w-[20px]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] }));
  SheetContent.displayName = $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2.displayName;
  const SheetHeader = ({
    className,
    ...props
  }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "flex flex-col  text-center sm:text-left",
        className
      ),
      ...props
    }
  );
  SheetHeader.displayName = "SheetHeader";
  const SheetTitle = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    $5d3850c4d0b4e6c7$export$f99233281efd08a0,
    {
      ref,
      className: cn("text-lg font-semibold text-foreground", className),
      ...props
    }
  ));
  SheetTitle.displayName = $5d3850c4d0b4e6c7$export$f99233281efd08a0.displayName;
  const SheetDescription = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    $5d3850c4d0b4e6c7$export$393edc798c47379d,
    {
      ref,
      className: cn("text-sm", className),
      ...props
    }
  ));
  SheetDescription.displayName = $5d3850c4d0b4e6c7$export$393edc798c47379d.displayName;
  const Table = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "table",
    {
      ref,
      className: cn("w-full caption-bottom text-sm", className),
      ...props
    }
  ) }));
  Table.displayName = "Table";
  const TableHeader = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
  TableHeader.displayName = "TableHeader";
  const TableBody = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tbody",
    {
      ref,
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  ));
  TableBody.displayName = "TableBody";
  const TableFooter = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tfoot",
    {
      ref,
      className: cn("bg-primary font-medium text-primary-foreground", className),
      ...props
    }
  ));
  TableFooter.displayName = "TableFooter";
  const TableRow = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      ref,
      className: cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      ),
      ...props
    }
  ));
  TableRow.displayName = "TableRow";
  const TableHead = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "th",
    {
      ref,
      className: cn(
        "h-[25px] px-[10px] text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className
      ),
      ...props
    }
  ));
  TableHead.displayName = "TableHead";
  const TableCell = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "td",
    {
      ref,
      className: cn("p-[10px] align-middle [&:has([role=checkbox])]:pr-0", className),
      ...props
    }
  ));
  TableCell.displayName = "TableCell";
  const TableCaption = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "caption",
    {
      ref,
      className: cn("mt-4 text-sm text-muted-foreground", className),
      ...props
    }
  ));
  TableCaption.displayName = "TableCaption";
  function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
    const ref = React.useRef({
      value,
      previous: value
    });
    return React.useMemo(() => {
      if (ref.current.value !== value) {
        ref.current.previous = ref.current.value;
        ref.current.value = value;
      }
      return ref.current.previous;
    }, [
      value
    ]);
  }
  function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
    const [size, setSize] = React.useState(void 0);
    $9f79659886946c16$export$e5c5a5f917a5871c(() => {
      if (element) {
        setSize({
          width: element.offsetWidth,
          height: element.offsetHeight
        });
        const resizeObserver = new ResizeObserver((entries) => {
          if (!Array.isArray(entries))
            return;
          if (!entries.length)
            return;
          const entry = entries[0];
          let width;
          let height;
          if ("borderBoxSize" in entry) {
            const borderSizeEntry = entry["borderBoxSize"];
            const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
            width = borderSize["inlineSize"];
            height = borderSize["blockSize"];
          } else {
            width = element.offsetWidth;
            height = element.offsetHeight;
          }
          setSize({
            width,
            height
          });
        });
        resizeObserver.observe(element, {
          box: "border-box"
        });
        return () => resizeObserver.unobserve(element);
      } else
        setSize(void 0);
    }, [
      element
    ]);
    return size;
  }
  const $6be4966fd9bbc698$var$SWITCH_NAME = "Switch";
  const [$6be4966fd9bbc698$var$createSwitchContext, $6be4966fd9bbc698$export$cf7f5f17f69cbd43] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($6be4966fd9bbc698$var$SWITCH_NAME);
  const [$6be4966fd9bbc698$var$SwitchProvider, $6be4966fd9bbc698$var$useSwitchContext] = $6be4966fd9bbc698$var$createSwitchContext($6be4966fd9bbc698$var$SWITCH_NAME);
  const $6be4966fd9bbc698$export$b5d5cf8927ab7262 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeSwitch, name, checked: checkedProp, defaultChecked, required, disabled, value = "on", onCheckedChange, ...switchProps } = props;
    const [button, setButton] = React.useState(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
      forwardedRef,
      (node) => setButton(node)
    );
    const hasConsumerStoppedPropagationRef = React.useRef(false);
    const isFormControl = button ? Boolean(button.closest("form")) : true;
    const [checked = false, setChecked] = $71cd76cc60e0454e$export$6f32135080cb4c3({
      prop: checkedProp,
      defaultProp: defaultChecked,
      onChange: onCheckedChange
    });
    return /* @__PURE__ */ React.createElement($6be4966fd9bbc698$var$SwitchProvider, {
      scope: __scopeSwitch,
      checked,
      disabled
    }, /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
      type: "button",
      role: "switch",
      "aria-checked": checked,
      "aria-required": required,
      "data-state": $6be4966fd9bbc698$var$getState(checked),
      "data-disabled": disabled ? "" : void 0,
      disabled,
      value
    }, switchProps, {
      ref: composedRefs,
      onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event) => {
        setChecked(
          (prevChecked) => !prevChecked
        );
        if (isFormControl) {
          hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
          if (!hasConsumerStoppedPropagationRef.current)
            event.stopPropagation();
        }
      })
    })), isFormControl && /* @__PURE__ */ React.createElement($6be4966fd9bbc698$var$BubbleInput, {
      control: button,
      bubbles: !hasConsumerStoppedPropagationRef.current,
      name,
      value,
      checked,
      required,
      disabled,
      style: {
        transform: "translateX(-100%)"
      }
    }));
  });
  const $6be4966fd9bbc698$var$THUMB_NAME = "SwitchThumb";
  const $6be4966fd9bbc698$export$4d07bf653ea69106 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { __scopeSwitch, ...thumbProps } = props;
    const context = $6be4966fd9bbc698$var$useSwitchContext($6be4966fd9bbc698$var$THUMB_NAME, __scopeSwitch);
    return /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
      "data-state": $6be4966fd9bbc698$var$getState(context.checked),
      "data-disabled": context.disabled ? "" : void 0
    }, thumbProps, {
      ref: forwardedRef
    }));
  });
  const $6be4966fd9bbc698$var$BubbleInput = (props) => {
    const { control, checked, bubbles = true, ...inputProps } = props;
    const ref = React.useRef(null);
    const prevChecked = $010c2913dbd2fe3d$export$5cae361ad82dce8b(checked);
    const controlSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(control);
    React.useEffect(() => {
      const input = ref.current;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
      const setChecked = descriptor.set;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", {
          bubbles
        });
        setChecked.call(input, checked);
        input.dispatchEvent(event);
      }
    }, [
      prevChecked,
      checked,
      bubbles
    ]);
    return /* @__PURE__ */ React.createElement("input", _extends({
      type: "checkbox",
      "aria-hidden": true,
      defaultChecked: checked
    }, inputProps, {
      tabIndex: -1,
      ref,
      style: {
        ...props.style,
        ...controlSize,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }));
  };
  function $6be4966fd9bbc698$var$getState(checked) {
    return checked ? "checked" : "unchecked";
  }
  const $6be4966fd9bbc698$export$be92b6f5f03c0fe9 = $6be4966fd9bbc698$export$b5d5cf8927ab7262;
  const $6be4966fd9bbc698$export$6521433ed15a34db = $6be4966fd9bbc698$export$4d07bf653ea69106;
  const Switch = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    $6be4966fd9bbc698$export$be92b6f5f03c0fe9,
    {
      className: cn(
        "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        className
      ),
      ...props,
      ref,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        $6be4966fd9bbc698$export$6521433ed15a34db,
        {
          className: cn(
            "pointer-events-none block h-[20px] w-[20px] rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[20px] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  ));
  Switch.displayName = $6be4966fd9bbc698$export$be92b6f5f03c0fe9.displayName;
  const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
          default: "h-[28px] px-[18px] py-[16px]",
          sm: "h-[10px] rounded-md px-[12px]",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10"
        }
      },
      defaultVariants: {
        variant: "default",
        size: "default"
      }
    }
  );
  const Button = React__namespace.forwardRef(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "button";
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Comp,
        {
          className: cn(buttonVariants({ variant, size, className })),
          ref,
          ...props
        }
      );
    }
  );
  Button.displayName = "Button";
  const Dialog = $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9;
  const DialogTrigger = $5d3850c4d0b4e6c7$export$41fb9f06171c75f4;
  const DialogClose = $5d3850c4d0b4e6c7$export$f39c2d165cd861fe;
  const DialogPortal = ({
    className,
    ...props
  }) => /* @__PURE__ */ jsxRuntimeExports.jsx($5d3850c4d0b4e6c7$export$602eac185826482c, { className: cn(className), ...props });
  DialogPortal.displayName = $5d3850c4d0b4e6c7$export$602eac185826482c.displayName;
  const DialogOverlay = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,
    {
      ref,
      className: cn(
        "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      ),
      ...props
    }
  ));
  DialogOverlay.displayName = $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff.displayName;
  const DialogContent = React__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
      {
        ref,
        className: cn(
          "fixed left-[50%] top-[50%] z-50 grid w-1/4 max-w-lg translate-x-[-50%] translate-y-[-50%] gap-[16px] border bg-background p-[20px] shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-1/3",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxRuntimeExports.jsxs($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, { className: "absolute right-[16px] top-[16px] rounded-[16px] opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-[24px] w-[24px]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "关闭" })
          ] })
        ]
      }
    )
  ] }));
  DialogContent.displayName = $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2.displayName;
  const DialogHeader = ({
    className,
    ...props
  }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "flex flex-col space-y-1.5 text-center sm:text-left",
        className
      ),
      ...props
    }
  );
  DialogHeader.displayName = "DialogHeader";
  const DialogFooter = ({
    className,
    ...props
  }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      ),
      ...props
    }
  );
  DialogFooter.displayName = "DialogFooter";
  const DialogTitle = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    $5d3850c4d0b4e6c7$export$f99233281efd08a0,
    {
      ref,
      className: cn(
        "text-xl font-semibold leading-none tracking-tight",
        className
      ),
      ...props
    }
  ));
  DialogTitle.displayName = $5d3850c4d0b4e6c7$export$f99233281efd08a0.displayName;
  const DialogDescription = React__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    $5d3850c4d0b4e6c7$export$393edc798c47379d,
    {
      ref,
      className: cn("text-sm text-muted-foreground !mt-[10px]", className),
      ...props
    }
  ));
  DialogDescription.displayName = $5d3850c4d0b4e6c7$export$393edc798c47379d.displayName;
  const defaultRoutes = [
    {
      name: "值集管理",
      path: "/hpfm/value-list"
    },
    {
      name: "值集视图",
      path: "/hpfm/lov-view"
    },
    {
      name: "宏定义",
      path: "/hpes/macro/manage/list"
    },
    {
      name: "列表配置",
      path: "/hpes/dynamic/list"
    },
    {
      name: "业务组件维护",
      path: "/hpes/dynamic-component/list"
    },
    {
      name: "子应用配置",
      path: "/hpes/dynamic-mobile/list/query"
    }
  ];
  const Input = React__namespace.forwardRef(
    ({ className, type, ...props }, ref) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type,
          className: cn(
            "flex h-[40px] w-full rounded-md border border-input bg-background px-[16px] py-[10px] text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          ),
          ref,
          ...props
        }
      );
    }
  );
  Input.displayName = "Input";
  const App = () => {
    const [menuName, setMenuName] = React.useState("");
    const [menuPath, setMenuPath] = React.useState("");
    const history = React.useMemo(() => {
      const history2 = window.dvaApp._history;
      return history2;
    }, []);
    const [routes, setRoute] = React.useState(() => {
      const routes2 = JSON.parse(window.localStorage.getItem("routes") || "[]");
      if (routes2.length == 0) {
        return defaultRoutes;
      }
      return routes2;
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex whitespace-nowrap", children: [
      routes.filter((r1) => r1.isShow).map((r2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          onClick: () => history.push(r2.path),
          className: "text-[#ccc] text-md px-[10px] rounded-[5px] hover:bg-[hsla(0,0%,100%,.1)]",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "p-10px", children: r2.name })
        }
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#ccc] text-md px-[10px] rounded-[5px] hover:bg-[hsla(0,0%,100%,.1)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "p-10px", children: "设置" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetContent, { className: "p-[20px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "text-xxl", children: "Hzero Helper 设置" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SheetDescription, { className: "!mt-[16px]", children: "在此你可以对该脚本部分设置进行自定义" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "mt-[20px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-[60px]", children: "序号" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "菜单名称" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "菜单路径" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "是否显示" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "操作" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: routes.map((route, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: index2 + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: route.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: route.path }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  checked: route.isShow,
                  onCheckedChange: (isChecked) => {
                    routes[index2].isShow = isChecked;
                    setRoute([...routes]);
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "destructive",
                  onClick: () => {
                    routes.splice(index2, 1);
                    setRoute(routes.slice());
                  },
                  children: "删除"
                }
              ) })
            ] }, route.name)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-[10px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { children: "新增" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "新增菜单项" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "添加路由菜单时，无需附带网站 host，只填写路径即可" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: menuName,
                    onChange: (e) => setMenuName(e.target.value),
                    type: "text",
                    placeholder: "菜单名称"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: menuPath,
                    onChange: (e) => setMenuPath(e.target.value),
                    type: "text",
                    placeholder: "菜单路由"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    onClick: () => {
                      routes.push({
                        name: menuName,
                        path: menuPath,
                        isShow: true
                      });
                      setRoute(routes.slice());
                    },
                    children: "确认"
                  }
                ) }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: () => {
                  window.localStorage.setItem("routes", JSON.stringify(routes));
                },
                children: "保存"
              }
            )
          ] })
        ] })
      ] })
    ] });
  };
  const init = async () => {
    let count = 0;
    const interval = window.setInterval(() => {
      const langSelect = document.querySelector(
        "div.ant-select-sm.select-no-border.default-language-select"
      );
      const container = langSelect == null ? void 0 : langSelect.parentElement;
      console.log("Hzero Helper init:", window);
      if (container) {
        container.style.maxWidth = "unset";
        const MenuContainer = document.createElement("div");
        const root = client.createRoot(MenuContainer);
        container.insertBefore(MenuContainer, container.firstChild);
        root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(App, {}));
        clearInterval(interval);
      }
      if (count === 2) {
        clearInterval(interval);
      }
      count++;
    }, 2e3);
  };
  init();

})(React, ReactDOM);

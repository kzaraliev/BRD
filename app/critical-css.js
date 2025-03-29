// Компонент за вграждане на критичен CSS в главата на документа
export function CriticalCSS() {
  return (
    <style
      id="critical-css"
      dangerouslySetInnerHTML={{
        __html: `
          /* Критичен CSS за първоначално рендериране */
          body{margin:0;padding:0;font-family:"Roboto",system-ui,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeSpeed}.bg-white{background-color:#fff}.relative{position:relative}.max-w-7xl{max-width:80rem}.mx-auto{margin-left:auto;margin-right:auto}h1{margin:0;font-weight:600;}.bg-gray-50{background-color:#f9fafb}@media (min-width:1024px){.lg\\:absolute{position:absolute}.lg\\:inset-y-0{top:0;bottom:0}.lg\\:right-0{right:0}.lg\\:w-1\\/2{width:50%}.lg\\:hidden{display:none}}.lg\\:block{display:block}@media (max-width:1023px){.lg\\:hidden{display:block}.hidden.lg\\:block{display:none}}.object-cover{object-fit:cover}.w-full{width:100%}.h-auto{height:auto}.aspect-\\[4\\/3\\]{aspect-ratio:4/3}img{opacity:1;transition:opacity .2s;display:block;width:100%;height:auto}img[src]{opacity:1}.h-full{height:100%}
          
          /* Prefetch за LCP изображение - скрива оригиналното изображение, докато се зарежда */
          img[fetchpriority="high"] {content-visibility:auto;}
          @media (max-width:640px){img[src="/lawyer-mobile-lcp.webp"]{content-visibility:auto;contain-intrinsic-size:640px 400px;}}
          @media (min-width:641px){img[src="/lawyer-desktop-lcp.webp"]{content-visibility:auto;contain-intrinsic-size:955px 776px;}}
        `,
      }}
    />
  );
}

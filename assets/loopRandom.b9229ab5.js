import{w as a}from"./writeAndUnwriteText.050dd8e6.js";import{r,a as m,m as l}from"./animationSetup.e1de7129.js";import"./writeEffect.ed9e7717.js";import"./unwriteEffect.4dd22187.js";import"./index.62428813.js";let t=[];const c=e=>{for(;;){const n=r(0,e.length),o=typeof t=="number"&&n!==t,i=Array.isArray(t)&&!t.includes(n);if(e.length===1||i||o)return o&&(t=[]),t.push(n),e[n];t.length===e.length&&(t=t.pop())}},T=async(e,n)=>{const{options:o,elements:i}=m(e,n);for(;;){l(e);const s=c(i);await a(s,o)}};export{T as default};
const a=require("child_process").exec,s=require("node:fs");function D(){return new Promise(e=>{a("git diff --cached --name-only --diff-filter=A",function(t,n,r){e(n)})})}function g(){return new Promise(e=>{a("git diff --cached --name-only --diff-filter=CMR",function(t,n,r){e(n)})})}function u(e){const t=s.statSync(e),n=new Date(parseInt(t.birthtimeMs)).toISOString().split("T").at(0),r=new Date(parseInt(t.mtimeMs)).toISOString().split("T").at(0);return{fileCreateDate:n,fileUpdateDate:r}}function l(e){return s.readFileSync(e,"utf-8").trim()}function p(e){const t=l(e),n=t.substring(3,t.indexOf("---",3)).trim().split(`
`).map(r=>r.trim());return{content:t,frontMatterLines:n}}function d(e){const{fileCreateDate:t}=u(e);let{content:n,frontMatterLines:r}=p(e);const i=r.find(c=>c.startsWith("createdAt"));i?(!i.split(":")[1]||!new RegExp(/(\d{4})-(\d{2})-(\d{2})/).test(i.split(":")[1]))&&(n="---"+n.substring(3).replace(/createdAt:.*/g,`createdAt: ${t}`),s.writeFileSync(e,n,"utf-8")):(n="---"+n.substring(3).replace("---",`createdAt: ${t}
---`),s.writeFileSync(e,n,"utf-8"))}function x(e){const{fileUpdateDate:t}=u(e);let{content:n,frontMatterLines:r}=p(e);const i=r.find(o=>o.startsWith("createdAt"))?.split(":")[1]?.trim(),c=r.find(o=>o.startsWith("updateAt"));i!==t&&(c?(n="---"+n.substring(3).replace(/updateAt:.*/g,`updateAt: ${t}`),s.writeFileSync(e,n,"utf-8")):(n="---"+n.substring(3).replace("---",`updateAt: ${t}
---`),s.writeFileSync(e,n,"utf-8")))}function f(e){let t=l(e);if(t.indexOf("---")<0)t=`---
title:
---
${t}`;else if(t.indexOf("---")===0&&t.indexOf("---",3)<0){const r=t.indexOf(`

`,3),i=t.indexOf(`
`,t.indexOf(":")),c=r>0?r:i>0?i:3;t=t.substring(0,c)+`
---
`+t.substring(c)}s.writeFileSync(e,t,"utf-8")}(async function(){new Date().toISOString().split("T").at(0);const e=await D();(e.trim().length?e.trim().split(`
`):[]).forEach(i=>{f(i),d(i)});const n=await g();(n.trim().length?n.trim().split(`
`):[]).forEach(i=>{f(i),d(i),x(i)})})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7In0=

(()=>{"use strict";let e=null,s=null,o=null,i=null,l=null,n=null,c=null,r=null;Object.entries({winter:{closeProjects:10,income:6e5,hired:10,dismissed:13,newProjects:10},spring:{closeProjects:10,income:75e4,hired:10,dismissed:115,newProjects:10},summer:{closeProjects:10,income:55e4,hired:12,dismissed:10,newProjects:10},autumn:{closeProjects:10,income:9e5,hired:9,dismissed:10,newProjects:10}}).forEach((([d,m])=>{(!e||e.income<=m.income)&&(e=m,s=d),(!o||o.income>=m.income)&&(o=m,i=d),(!l||l.hired<=m.hired)&&(l=m,n=d),(!c||c.dismissed<=m.dismissed)&&(c=m,r=d)})),console.log(s,e),console.log(o,i),console.log(l,n),console.log(c,r)})();
"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[813],{7713:(e,t,s)=>{s.d(t,{A:()=>r});s(6540);var n=s(1312),a=s(9022),i=s(4848);function r(e){const{metadata:t}=e,{previousPage:s,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[s&&(0,i.jsx)(a.A,{permalink:s,title:(0,i.jsx)(n.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,i.jsx)(a.A,{permalink:r,title:(0,i.jsx)(n.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},3892:(e,t,s)=>{s.d(t,{A:()=>r});s(6540);var n=s(7131),a=s(4651),i=s(4848);function r(e){let{items:t,component:s=a.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(n.i,{content:t,children:(0,i.jsx)(s,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},3069:(e,t,s)=>{s.r(t),s.d(t,{default:()=>A});s(6540);var n=s(4164),a=s(1312),i=s(5846),r=s(1213),l=s(7559),o=s(8774),c=s(6535),d=s(7713),g=s(1463),u=s(3892),p=s(996),h=s(1107),m=s(4848);function x(e){const t=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,a.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const s=x(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.be,{title:s,description:t.description}),(0,m.jsx)(g.A,{tag:"blog_tags_posts"})]})}function b(e){let{tag:t,items:s,sidebar:n,listMetadata:i}=e;const r=x(t);return(0,m.jsxs)(c.A,{sidebar:n,children:[t.unlisted&&(0,m.jsx)(p.A,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(h.A,{as:"h1",children:r}),t.description&&(0,m.jsx)("p",{children:t.description}),(0,m.jsx)(o.A,{href:t.allTagsPath,children:(0,m.jsx)(a.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(u.A,{items:s}),(0,m.jsx)(d.A,{metadata:i})]})}function A(e){return(0,m.jsxs)(r.e3,{className:(0,n.A)(l.G.wrapper.blogPages,l.G.page.blogTagPostListPage),children:[(0,m.jsx)(j,{...e}),(0,m.jsx)(b,{...e})]})}},996:(e,t,s)=>{s.d(t,{A:()=>p});s(6540);var n=s(4164),a=s(1312),i=s(5260),r=s(4848);function l(){return(0,r.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(i.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=s(7559),g=s(7293);function u(e){let{className:t}=e;return(0,r.jsx)(g.A,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,n.A)(t,d.G.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function p(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(u,{...e})]})}}}]);
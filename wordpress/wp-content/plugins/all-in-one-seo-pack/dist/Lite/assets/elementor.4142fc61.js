import"./js/_plugin-vue_export-helper.8823f7c1.js";import{G as f,y as g}from"./js/vue.runtime.esm-bundler.0bc3eabf.js";import{c as h,a as y}from"./js/vue-router.964734d4.js";import{e as k,l as E}from"./js/index.43fa9b03.js";import{l as b}from"./js/index.888aa896.js";import{l as v}from"./js/index.0b123ab1.js";import{i as S,j as _,l as $}from"./js/links.d8ef3c22.js";import{g as A,m as c,T as I}from"./js/postContent.5b10ed83.js";import{i as C}from"./js/isEqual.585d298d.js";import{i as P}from"./js/isEmpty.9b8981f6.js";import{s as r,_ as n}from"./js/default-i18n.3881921e.js";import{A as s}from"./js/App.a960004f.js";import"./js/translations.6e7b2383.js";import"./js/constants.d0e2b74f.js";import"./js/Caret.11ded1aa.js";import"./js/isArrayLikeObject.10b615a9.js";import"./js/cleanForSlug.a67f7e84.js";import"./js/_stringToArray.a4422725.js";import"./js/_baseIsEqual.640c1807.js";import"./js/_getAllKeys.4291a623.js";import"./js/_getTag.4ca3d6f0.js";/* empty css                */import"./js/allowed.a855ba11.js";import"./js/params.f0608262.js";/* empty css                                               *//* empty css                                                 */import"./js/JsonValues.870a4901.js";import"./js/TruSeoHighlighter.f41d03f0.js";import"./js/Ellipse.e18bc40f.js";import"./js/toFinite.c2274946.js";/* empty css                                                 */import"./js/SettingsRow.aa479f88.js";import"./js/Row.7b93a0cf.js";import"./js/Checkbox.ec923721.js";import"./js/Checkmark.edd0f833.js";import"./js/LicenseKeyBar.aa0cbefb.js";import"./js/LogoGear.5cfaa040.js";import"./js/Tabs.17b2f5c8.js";import"./js/TruSeoScore.29220195.js";import"./js/SaveChanges.5260e1c7.js";import"./js/Information.0dce27f3.js";import"./js/Slide.c3dfb2b1.js";import"./js/Portal.278055d7.js";import"./js/Index.4aad0bd0.js";import"./js/MaxCounts.12b45bab.js";import"./js/Tags.f13c16b2.js";import"./js/tags.44c472c9.js";import"./js/Tooltip.eebec260.js";import"./js/Plus.b9ec5db4.js";import"./js/Eye.fe18276e.js";import"./js/Editor.0314838b.js";import"./js/Blur.71007c0c.js";import"./js/RadioToggle.49538c2f.js";import"./js/GoogleSearchPreview.fe8a7e3c.js";import"./js/HtmlTagsEditor.dc966c4a.js";import"./js/UnfilteredHtml.13b74f4e.js";import"./js/popup.6fe74774.js";import"./js/addons.ecfd02c6.js";import"./js/upperFirst.d65414ba.js";import"./js/Index.38afdc86.js";import"./js/WpTable.de7a11dd.js";import"./js/Table.4899793d.js";import"./js/numbers.c7cb4085.js";import"./js/PostTypes.9ab32454.js";import"./js/InternalOutbound.000b4772.js";import"./js/RequiredPlans.d0936efa.js";import"./js/license.db04cc67.js";import"./js/Image.bc2d1e45.js";import"./js/FacebookPreview.6457a730.js";import"./js/Img.9752e9ac.js";import"./js/Profile.9886831c.js";import"./js/ImageUploader.dbab7868.js";import"./js/TwitterPreview.0cf38a13.js";import"./js/Book.22520912.js";import"./js/Settings.091cdc48.js";import"./js/Build.0287772a.js";import"./js/Redirects.27714aa7.js";import"./js/Index.f9e0a853.js";import"./js/strings.01407ca7.js";import"./js/isString.395b35ce.js";import"./js/ProBadge.57eb3f6b.js";import"./js/External.88ec9b3a.js";import"./js/Exclamation.0dd78a69.js";import"./js/Gear.93d6eb68.js";import"./js/Card.a96d9a32.js";import"./js/Upsell.d1c7ebfb.js";class D extends window.$e.modules.hookUI.Base{constructor(o,i,t){super(),this.hook=o,this.id=i,this.callback=t}getCommand(){return this.hook}getId(){return this.id}apply(){return this.callback()}}class O extends window.$e.modules.hookData.Base{constructor(o,i,t){super(),this.hook=o,this.id=i,this.callback=t}getCommand(){return this.hook}getId(){return this.id}apply(){return this.callback()}}function a(e,o,i){window.$e.hooks.registerUIAfter(new D(e,o,i))}function x(e,o,i){window.$e.hooks.registerDataAfter(new O(e,o,i))}let m={},p=!1;const l=()=>{const e=window.elementor.documents.getCurrent();if(!["wp-post","wp-page"].includes(e.config.type))return;const o={...m},i=A();C(o,i)||(m=i,c())},B=()=>{const e=S();P(e.currentPost)||window.elementor.config.document.id===window.elementor.config.document.revisions.current_id&&e.saveCurrentPost(e.currentPost).then(()=>{_().fetch()})},U=()=>{window.$e.internal("document/save/set-is-modified",{status:!0})},H=()=>{p||(p=!0,a("editor/documents/attach-preview","aioseo-content-scraper-attach-preview",l),a("document/save/set-is-modified","aioseo-content-scraper-on-modified",l),x("document/save/save","aioseo-save",B),k.on("postSettingsUpdated",U))},L=()=>{if(window.elementor.config.user.introduction["aioseo-introduction"]===!0)return;const e=new window.elementorModules.editor.utils.Introduction({introductionKey:"aioseo-introduction",dialogType:"alert",dialogOptions:{id:"aioseo-introduction",headerMessage:r(n("New: %1$s %2$s integration","all-in-one-seo-pack"),"AIOSEO","Elementor"),message:r(n("You can now manage your SEO settings inside of %1$s via %2$s before you publish your post!","all-in-one-seo-pack"),"Elementor","All in One SEO"),position:{my:"center center",at:"center center"},strings:{confirm:n("Got It!","all-in-one-seo-pack")},hide:{onButtonClick:!1},onConfirm:()=>{e.setViewed(),e.getDialog().hide()}}});e.show()},T=()=>{let e=window.elementor.getPreferences("ui_theme")||"auto";e==="auto"&&(e=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),document.body.classList.forEach(o=>{o.startsWith("aioseo-elementor-")&&document.body.classList.remove(o)}),document.body.classList.add("aioseo-elementor-"+e)},M=()=>{window.$e.routes.on("run:after",function(e,o){T(),o==="panel/page-settings/aioseo"&&d("#elementor-panel-page-settings-controls")}),window.elementor.modules.layouts.panel.pages.menu.Menu.addItem({name:"aioseo",icon:"aioseo aioseo-element-menu-icon aioseo-element-menu-icon-"+window.elementor.getPreferences("ui_theme"),title:"All in One SEO",type:"page",callback:()=>{try{window.$e.routes.run("panel/page-settings/aioseo")}catch{window.$e.routes.run("panel/page-settings/settings"),window.$e.routes.run("panel/page-settings/aioseo")}}},"more"),window.elementor.once("preview:loaded",function(){window.$e.components.get("panel/elements").addTab("aioseo",{title:"AIOSEO"})}),window.elementor.hooks.addFilter("panel/elements/regionViews",e=>(e.aioseo={region:e.global.region,view:window.Marionette.ItemView.extend({template:!1,id:"elementor-panel-aioseo",className:"aioseo-elementor aioseo-sidebar-panel",initialize(){document.getElementById("elementor-panel-elements-search-area").hidden=!0},onShow(){d("#elementor-panel-aioseo")},onDestroy(){document.getElementById("elementor-panel-elements-search-area").hidden=!1}}),options:{}},e))},d=e=>{const o=document.querySelector(e);o.classList.add("edit-post-sidebar","aioseo-elementor-panel"),o.appendChild(document.createElement("div"));const i=h({history:y(),routes:[{path:"/",component:s}]});let t=f({name:"Standalone/Elementor",data(){return{tableContext:window.aioseo.currentPost.context,screenContext:"sidebar"}},render:()=>g(s)});t=E(t),t=b(t),t=v(t),t.use(i),i.app=t,$(t,i),H(),t.config.globalProperties.$truSeo=new I,t.mount(`${e} > div`),c()},u=()=>{M(),L()};let w=!1;window.elementor&&(setTimeout(u),w=!0);(function(e){w||e(window).on("elementor:init",()=>{window.elementor.on("panel:init",()=>{setTimeout(u)})})})(window.jQuery);

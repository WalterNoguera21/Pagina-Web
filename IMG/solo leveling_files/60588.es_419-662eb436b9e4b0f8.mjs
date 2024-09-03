"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[60588],{190971:(e,t,r)=>{r.d(t,{c:()=>u});var o=r(667294),d=r(616550),i=r(839391),a=r(96157),n=r(624797),c=r(554786);let s=(e,t)=>((0,a.XU)(e)&&e.state?.from&&(e=e.state.from),(0,a.HV)(e))?t?1000503:1000558:(0,a.En)(e)?t?1000506:1000559:(0,a.L6)(e)?t?1000141:1000494:void 0,l=(e,t)=>{if(t&&(0,a.L6)(e))return 1000564},_=(e,t)=>{if(t){if((0,a.HV)(e))return 1000541;if((0,a.En)(e))return 1000542;if((0,a.L6)(e))return 1000140}else if((0,a.HV)(e))return 1000544;else if((0,a.En)(e))return 1000543;else if((0,a.L6)(e))return 1000540},u=()=>{let{mountPlacement:e,registerdAfterActionPlacements:t}=(0,i.Z)(),r=(0,c.HG)(),u=(0,d.TH)();return(0,o.useCallback)((o,d,i)=>{let c;switch(o){case"Save":c=s(u,r);break;case"Download":(0,a.L6)(u)&&(c=r?1000499:1000500);break;case"Clickthrough":c=_(u,r);break;case"NoAction":c=l(u,r)}null!=c&&((0,a.En)(u)&&(d={...d,search_query:(0,n.mB)(u.search)}),null!=c&&(t[c]||(0,a.XU)(u))&&e(c,d,i))},[t,e,u,r])}},43665:(e,t,r)=>{r.d(t,{Z:()=>o});function o(e){let t=!1;return{promise:new Promise((r,o)=>{e.then(e=>t?o({isCanceled:!0}):r(e),e=>t?o({isCanceled:!0}):o(e))}),cancel(){t=!0}}}},498301:(e,t,r)=>{r.d(t,{Z:()=>o});function o(e,t){if(!t)return e;let r=new RegExp(/http(s?):/);if(!r.test(e)){let o=r.exec(t);o&&o.length&&(e=o[0]+e)}return e}},825765:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(667294),d=r(43665);function i(){let e=(0,o.useRef)([]),t=(0,o.useRef)({});return(0,o.useEffect)(()=>()=>{[...Object.keys(t.current).map(e=>t.current[e]),...e.current].forEach(e=>e())},[]),function(r,o){if(o){let e=t.current[o];e&&(e(),delete t.current[o])}let{cancel:i,promise:a}=(0,d.Z)(r);return o?t.current[o]=i:e.current=[...e.current,i],a}}},692440:(e,t,r)=>{r.d(t,{H:()=>s,N:()=>c});var o=r(667294),d=r(342513),i=r(638747),a=r(785893);let{Provider:n,useHook:c}=(0,d.Z)("LastSavedTo");function s({children:e}){let[t,r]=(0,o.useState)();(0,i.Z8)("BoardPickerBoardsShortlistResource",e=>{if(!t){let{data:t}=e.response.resource_response;r(t)}});let d=(0,o.useCallback)(e=>{let o=t?t.filter(t=>t.id!==e.id):[];r([e,...o])},[t]),c=(0,o.useMemo)(()=>({lastSavedTo:t,saveToBoard:d}),[t,d]);return(0,a.jsx)(n,{value:c,children:e})}},281871:(e,t,r)=>{r.d(t,{Z:()=>o});function o(e,t,r){return{privacy_filter:t?"secret":"public",sort:r||"last_pinned_to",field_set_key:"profile_grid_item",username:e}}},885837:(e,t,r)=>{r.d(t,{O:()=>n,Q:()=>c});var o=r(827625),d=r(945488),i=r(64819);let a=["alphabetical","last_pinned_to","oldest","newest","group_boards_at_top","custom"],n={name:"BoardsResource",key:"boardsResource",options:({boardOrder:e,filterStories:t,mixPublicSecret:r,username:o,privacyFilter:d="all",filterAllPins:i=!1,filterShoppingList:a=!1,includeArchived:n=!0},c)=>({privacy_filter:d,sort:e||"last_pinned_to",field_set_key:"profile_grid_item",filter_stories:t,username:o,page_size:25,group_by:r?"mix_public_private":"visibility",include_archived:n,redux_normalize_feed:!0,filter_all_pins:i,filter_shopping_list:a,...c?{orbac_subject_id:c}:Object.freeze({})})},c=e=>a.reduce((t,r)=>{let a=[(0,i.N8)("profileBoards",(0,d.Z)(e,r))];return[!0,!1].forEach(t=>{[!0,!1].forEach(d=>{a.push((0,o.jB)(n.name,n.options({username:e,boardOrder:r,mixPublicSecret:t,filterStories:d})))})}),t.concat(a)},[])},402287:(e,t,r)=>{r.d(t,{$n:()=>R,A4:()=>h,CE:()=>I,ET:()=>C,F$:()=>y,Kw:()=>Z,Nv:()=>A,PA:()=>D,X_:()=>m,d9:()=>O,e1:()=>p,o4:()=>T,vB:()=>E});var o=r(782677),d=r(216167),i=r(372085),a=r(227258),n=r(827625),c=r(821419),s=r(64819),l=r(430408),_=r(539426),u=r(937310);function p(e){return t=>{let{boardId:r,sectionIdBefore:o,sectionIdAfter:d,sourceSectionId:a,targetSectionId:n}=e;t((0,s._f)({feedType:u.Z.BOARD_SECTIONS,feedId:r,itemType:"boardsection",sourceItemId:a,targetItemId:n}));let c=Object.freeze({});return o&&(c={...c,section_before:o}),d&&(c={...c,section_after:d}),(0,i.Z)({url:`/v3/board/sections/${a}/reorder/`,method:"POST",data:c})}}function I(e,t){return r=>r((0,a.U)("BoardSectionResource",{options:{field_set_key:t||"board_page",section_id:e}}))}function b(e,t){return{type:"SECTION_ADDED",payload:{boardId:e,section:t}}}function E({boardId:e,sourceBoardId:t="",sourceSectionId:r="",name:o,nameSource:i,pinImport:a,initialPinIds:_=[]},p,I,E){let f=0;"RECOMMENDATION"===i?f=1:"EDITED_RECOMMENDATION"===i&&(f=2);let y={board_id:e,initial_pins:a&&!a.all?a.pinIds:_,name:o,name_source:f,...I?{orbac_subject_id:I}:Object.freeze({})};return o=>d.Z.create("BoardSectionResource",y).callCreate({showError:!1}).then(({resource_response:{data:d}})=>{E({event_type:7100,object_id_str:d.id}),o(b(e,d)),o((0,s.vX)({feedId:e,feedType:u.Z.BOARD_SECTIONS,itemIds:[d.id],itemType:"boardsection"})),o((0,c.Tq)(e,"pin_count")),o((0,n.jB)("BoardSectionsRepinResource",{board_id:e,orbac_subject_id:I}));let{all:i,pinIds:_}=a||{all:!1,pinIds:[]};return i?new Promise((i,a)=>o((0,l.Z)({inverseSelection:!0,selectedPinIds:_,source:{boardId:t||e,sectionId:r||null},target:{boardId:e,sectionId:d.id}},p)).then(()=>i(d)).catch(a)):(_.length>0&&o((0,s.N8)(u.Z.BOARDFEED,e)),d)})}function f(e,t){return{type:"SECTION_DELETED",payload:{boardId:e,sectionId:t}}}function y(e,t,r){return o=>d.Z.create("BoardSectionEditResource",{section_id:t,...r?{orbac_subject_id:r}:Object.freeze({})}).callDelete({showError:!1}).then(()=>Promise.all([o(f(e,t)),o((0,s.EX)({feedId:e,feedType:u.Z.BOARD_SECTIONS,itemIds:[t],itemType:"boardsection"})),o((0,c.Tq)(e,"pin_count")),o((0,n.jB)("BoardSectionsRepinResource",{board_id:e,orbac_subject_id:r}))]))}function R(e,t,r,o){return i=>d.Z.create("BoardSectionEditResource",{section_id:t,title:r,...o?{orbac_subject_id:o}:Object.freeze({})}).callCreate({showError:!1}).then(t=>{let r=t.resource_response.data;return i(t=>{let o=r.board;o&&o.id!==e?(t(f(e,r.id??"")),t((0,s.EX)({feedId:e,feedType:u.Z.BOARD_SECTIONS,itemIds:[r.id??""],itemType:"boardsection"})),t((0,c.Tq)(e,"pin_count")),t(b(o.id??"",r)),t((0,s.vX)({feedId:o.id??"",feedType:u.Z.BOARD_SECTIONS,itemIds:[r.id??""],itemType:"boardsection"})),t((0,c.Tq)(e,"pin_count"))):t({type:"SECTION_UPDATED",payload:{boardId:e,section:r}})}),i((0,n.jB)("BoardSectionsRepinResource",{board_id:e,orbac_subject_id:o})),r})}function O(e,t,r){return o=>(0,i.Z)({url:`/v3/board/sections/${t}/merge/${r}/`,method:"POST",data:{fields:["boardsection.id","boardsection.board()","board.id","board.blocking_actions"]}}).then(d=>Promise.all([o(f(e,t)),o((0,n.jB)("BoardSectionsRepinResource",{board_id:e})),o(I(r)),o((0,s.N8)(u.Z.BOARD_SECTION_PINS,r))]).then(()=>d))}let B=(e,t)=>({type:"BOARD_SECTION_EDIT",payload:t}),D=(e,t)=>r=>d.Z.create("BoardSectionEditResource",{...t,section_id:e}).callCreate().then(o=>(r(B(e,t)),o.resource_response.data)),h=e=>t=>d.Z.create("BoardSectionResource",{section_id:e}).callGet().then(r=>(t(B(e,r.resource_response.data||{id:"",title:""})),r)),S=(e,t,r,o)=>({type:"BOARD_SECTION_DELETE",payload:{userId:e,boardSectionId:t,boardId:r,pinCount:o}}),T=(e,t,r,o)=>i=>{let a=d.Z.create("BoardSectionEditResource",{section_id:t}).callDelete();return i(S(e,t,r,o)),a},A=(e,t,r,i)=>a=>{let c={board_id:e,initial_pins:t,name:r},l="BoardSectionResource";return d.Z.create(l,c).callCreate().then(r=>{let d=r.resource_response.data,p=(0,o.Fv)(d,_.Z[l]);return i({event_type:7100,object_id_str:d.id}),a((0,n.XM)(l,c,r,p)),a(b(e,d)),a((0,s.vX)({feedId:e,feedType:u.Z.BOARD_SECTIONS,itemIds:[d.id],itemType:"boardsection"})),t.length&&a({type:"PINS_MOVE",payload:{source:{boardId:e},target:{boardId:e,sectionId:d.id},pinIds:t}}),r})},Z=e=>t=>{let{source:r,target:i,pinIds:a}=e;if(t({type:"PINS_MOVE",payload:e}),r.boardlessPins||i.boardId!==r.boardId){let e={board_id:i.boardId,pin_ids:a,section_id:i.sectionId};return d.Z.create("BulkEditResource",e).callUpdate()}if(i.sectionId){let e={section_id:i.sectionId,pins:a},r="BoardSectionEditResource";return d.Z.create(r,e).callUpdate().then(d=>{let i=(0,o.Fv)(d.resource_response.data,_.Z[r]);return t((0,n.XM)(r,e,d,i)),d})}let c={section_id:r.sectionId,pins:a};return d.Z.create("BoardSectionPinsResource",c).callDelete()},m=e=>t=>{t({type:"PINS_MOVE_ALL",payload:e});let{source:r,target:o,excludePinIds:i}=e,a={board_id:r.boardId,new_board_id:o.boardId,pin_ids:i,old_section_id:r.sectionId,new_section_id:o.sectionId};return d.Z.create("BulkEditSelectAllResource",a).callUpdate()},C=(e,t,r,o,d)=>i=>i(A(e,[],t,d)).then(t=>i(m({source:{boardId:e,sectionId:o},target:{boardId:e,sectionId:t.resource_response.data.id},excludePinIds:r})))},821419:(e,t,r)=>{r.d(t,{Br:()=>p,Cr:()=>A,K8:()=>R,L1:()=>L,Tq:()=>f,YQ:()=>g,YV:()=>T,ZP:()=>Z,aX:()=>m,eo:()=>b,fJ:()=>w,md:()=>I,oG:()=>E,oL:()=>C,of:()=>O,xH:()=>y,xQ:()=>B,xR:()=>j,xk:()=>h,yT:()=>u,zS:()=>U});var o=r(216167),d=r(481177),i=r(372085),a=r(227258),n=r(827625),c=r(281871),s=r(885837),l=r(64819),_=r(937310);function u(e){return{type:"BOARD_UPDATE_COMPLETE",payload:{board:e}}}function p(e){return{type:"BOARD_PIN_COUNT_CHANGED",payload:e}}function I(e,t){return{type:"BOARD_FOLLOW",payload:{boardId:e,value:t}}}function b({viewingUserId:e,viewingUsername:t,boardId:r,boardPinCount:o}){return{type:"BOARD_DELETE",payload:{viewingUserId:e,viewingUsername:t,boardId:r,boardPinCount:o}}}let E=(e,t)=>r=>r((0,a.U)("BoardResource",{options:{board_id:e,field_set_key:t}}));function f(e,t,r){return(0,a.U)("BoardResource",{options:{board_id:e,field_set_key:t,...r?{orbac_subject_id:r}:{}}})}function y(e,t,r){return o=>(0,i.Z)({url:`/v3/boards/${e}/merge/${t}/`,method:"POST",data:r?{orbac_subject_id:r}:{}}).then(()=>Promise.all([o(b({boardId:e})),o(f(t,"pin_count")),o((0,l.N8)(_.Z.BOARD_SECTIONS,t))]))}function R(e){return t=>{e&&(0,s.Q)(e).forEach(e=>{t(e)})}}let O=e=>({type:"BOARD_DISMISS_SENSITIVITY_SCREEN",payload:{boardId:e}}),B=e=>E(e,"pin_count");function D(e,t){return{type:"BOARD_ARCHIVE",payload:{boardId:e,username:t}}}function h(e,t){return r=>(r(D(e)),o.Z.create("BoardArchiveResource",{boardId:e,orbacSubjectId:t}).callUpdate())}function S(e){return{type:"BOARD_UNARCHIVE",payload:{boardId:e}}}function T(e,t){return r=>(r(S(e)),o.Z.create("BoardArchiveResource",{boardId:e,orbacSubjectId:t}).callDelete())}let A=(e,t)=>({type:"BOARD_COVER_IMAGE_UPDATED",payload:{boardId:e,coverPin:t}}),Z=e=>({type:"BOARD_DISABLE_MORE_IDEAS_BADGING",payload:{boardId:e}});function m(e,t,r){let i={name:e,privacy:d.Z.BoardPrivacy.PUBLIC,username:t,...r?{orbac_subject_id:r}:Object.freeze({})};return e=>o.Z.create("BoardResource",i).callCreate().then(r=>{let o=r.resource_response.data;return e(t&&(0,n.jB)("BoardsResource",(0,c.Z)(t,!1))),o})}function C(e={},t,r){return{type:"BOARD_CREATE_COMPLETE",payload:{options:e,board:t},error:r}}let v=(e,t)=>({type:"BOARD_INVITE_DENIED_BY_VIEWER",payload:{boardId:e,userId:t}}),N=(e,t,r)=>({type:"BOARD_COLLABORATOR_DELETE",payload:{boardId:e,userId:t,viewingUser:r}}),P=(e,t,r,o)=>({type:"BOARD_COLLABORATOR_ADD",payload:{boardId:e,viewingUser:t,status:r,collaboratingUsers:o}}),j=(e,t,r)=>async d=>{d(v(e,t));let i=await o.Z.create("BoardInviteResource",{board_id:e,invited_user_id:t}).callDelete();return i.resource_response.error||r({event_type:29,object_id_str:e}),i},g=(e,t,r,d,i,a)=>async n=>{n(N(e,d?.id??"",r));try{(await o.Z.create("accepted"===t?"BoardCollaboratorResource":"BoardInviteResource",{board_id:e,field_set_key:"boardEdit",invited_user_id:d?.id??"",...a?{orbac_subject_id:a}:{}}).callDelete()).resource_response.error||i({event_type:"accepted"===t?25:29,object_id_str:e})}catch(o){n(P(e,r,t,[d]))}},L=(e,t,r,d)=>i=>{let a=o.Z.create("BoardResource",{board_id:r}).callDelete();return i(b({viewingUserId:e,viewingUsername:t,boardId:r,boardPinCount:d})),a},U=(e,t)=>r=>o.Z.create("BoardArchiveResource",{boardId:e}).callUpdate().then(o=>(r((0,l.Qv)("archived-boards",[{id:e,type:"board"}])),r(D(e,t)),o)),w=(e,t)=>r=>o.Z.create("BoardArchiveResource",{boardId:e}).callDelete().then(o=>(r((0,l.Qv)(`profile-boards:${t}`,[{id:e,type:"board"}])),r(S(e)),o))},430408:(e,t,r)=>{r.d(t,{Z:()=>p,S:()=>u});var o=r(216167),d=r(821419),i=r(402287),a=r(64819),n=r(937310),c=r(622888);let s=e=>t=>{c.Z.showError(function(e,t){switch(e.api_error_code){case 2171:case 2172:case 2173:return t.bt("Espera hasta que se termine la acción de tablero anterior.", "Please wait until the previous board action finishes.", " - ", undefined, true);default:return e.message}}(t,e))},l=e=>(0,a.N8)(e.sectionId?n.Z.BOARD_SECTION_PINS:n.Z.BOARDFEED,e.sectionId||e.boardId);function _(e,t){let{source:r,target:o}=e;o.boardId!==r.boardId?(t((0,d.Tq)(r.boardId,"pin_count")),t((0,d.Tq)(o.boardId,"pin_count"))):r.sectionId&&o.sectionId||t((0,d.Tq)(o.boardId,"pin_count")),r.sectionId&&t((0,i.CE)(r.sectionId)),o.sectionId&&t((0,i.CE)(o.sectionId))}function u(e){return t=>{let{selectedPinIds:r,source:o,target:d}=e;t((0,a.EX)({feedId:o.sectionId||o.boardId,feedType:o.sectionId?n.Z.BOARD_SECTION_PINS:n.Z.BOARDFEED,itemIds:r,itemType:"pin"})),t((0,a.vX)({feedId:d.sectionId||d.boardId,feedType:d.sectionId?n.Z.BOARD_SECTION_PINS:n.Z.BOARDFEED,itemIds:r,itemType:"pin"})),_(e,t)}}function p(e,t){return r=>(function(e,t,r){let{inverseSelection:d,selectedPinIds:i,source:c,target:_,orbacSubjectId:u}=e;if(c.boardId===_.boardId&&(c.sectionId||null)===(_.sectionId||null))return Promise.reject();if(d){let e={board_id:c.boardId,new_board_id:_.boardId,old_section_id:c.sectionId||void 0,new_section_id:_.sectionId||void 0,pin_ids:i,orbac_subject_id:u};return o.Z.create("BulkEditSelectAllResource",e).callUpdate({showError:!1}).then(()=>Promise.all([t(l(c)),t(l(_))])).catch(s(r))}{let e=(e,r)=>{t((0,a.EX)({feedId:e.sectionId||e.boardId,feedType:e.sectionId?n.Z.BOARD_SECTION_PINS:n.Z.BOARDFEED,itemIds:i,itemType:"pin"})),t((0,a.vX)({feedId:r.sectionId||r.boardId,feedType:r.sectionId?n.Z.BOARD_SECTION_PINS:n.Z.BOARDFEED,itemIds:i,itemType:"pin"}))};e(c,_);let d=()=>e(_,c);if(_.boardId===c.boardId){if(_.sectionId){let e={section_id:_.sectionId,pins:i,orbac_subject_id:u};return o.Z.create("BoardSectionEditResource",e).callUpdate({showError:!1}).catch(e=>{d(),s(r)(e)})}{let e={section_id:c.sectionId,pins:i,orbac_subject_id:u};return o.Z.create("BoardSectionPinsResource",e).callDelete({showError:!1}).catch(e=>{d(),s(r)(e)})}}{let e={board_id:_.boardId,section_id:_.sectionId||void 0,pin_ids:i,orbac_subject_id:u};return o.Z.create("BulkEditResource",e).callUpdate({showError:!1}).catch(e=>{d(),s(r)(e)})}}})(e,r,t).then(()=>_(e,r))}},386129:(e,t,r)=>{r.d(t,{Ge:()=>s,JS:()=>a,OF:()=>O,P_:()=>n,Q_:()=>u,b8:()=>p,eR:()=>R,h2:()=>l,h6:()=>_});var o=r(216167),d=r(372085),i=r(107905);function a(e){return{type:"UPDATE_USER_PIN_COUNT",payload:e}}let n=(e,t)=>({type:"USER_FOLLOW",payload:{id:e,value:t}}),c=(e,t)=>({type:"USER_BLOCK",payload:{id:e,value:t}}),s=({id:e,orbacSubjectId:t,blockSource:r,blockContext:d,logContextEvent:i})=>async a=>{a(c(e,!0));let n=await o.Z.create("UserBlockResource",{blocked_user_id:e,orbac_subject_id:t,block_source:r,block_context:d}).callCreate().catch(()=>a(c(e,!1)));return i({event_type:54,object_id_str:e}),n},l=(e,t)=>async r=>{r(c(e,!1));let d=await o.Z.create("UserBlockResource",{blocked_user_id:e}).callDelete().catch(()=>r(c(e,!0)));return t({event_type:55,object_id_str:e}),d};function _(e){return{type:"UPDATE_USER_SCHEDULED_PIN_COUNT",payload:e}}let u=(e,t)=>()=>o.Z.create("UserStateResource",{state:e,value:t}).callCreate(),p=(e,t,r)=>(o,a)=>{(0,d.Z)({url:"/v3/users/me/",method:"POST"}).then(()=>{r({event_type:48,object_id_str:a().session.userId}),e(),(0,i.Z)()},t)},I=e=>e>=200&&e<400,b=(e,t="150x150")=>e&&`https://i.pinimg.com/${t}/${e.substring(0,2)}/${e.substring(2,4)}/${e.substring(4,6)}/${e}.jpg`||"",E=async(e,t,r)=>{let d=await o.Z.create("VIPResource",{upload_ids:[e]}).callGet();if(d.resource_response.data[e]){let{status:o,signature:i}=d.resource_response.data[e];"processing"===o||"registered"===o?setTimeout(async()=>{E(e,t,r)},5e3):"succeeded"===o?t(b(i)):r()}else r()},f=(e,t,r,d,i)=>(new FormData().append("img",e),o.Z.create("VIPResource",{type:t}).callCreate().then(t=>{if(t.resource_response.data){let{upload_id:o,upload_url:a,upload_parameters:n}=t.resource_response.data,c=new XMLHttpRequest;c.open("POST",a,!0),c.onload=()=>{I(c.status)?(r(100),E(o,d,i)):i()},c.upload.onprogress=e=>{r(Math.round(100*e.loaded/e.total))};let s=new FormData;for(let e in n)s.append(e,n[e]);s.append("file",e),c.send(s)}},()=>{i()})),y=e=>new Promise((t,r)=>{f(e,"pinimage",()=>{},e=>{t(e)},e=>{r(e)})}),R=e=>new Promise((t,r)=>{"string"==typeof e?e.startsWith("data")&&y(function(e,t=512){let r=e.split(";"),o=r[0].split(":")[1],d=atob(r[1].split(",")[1]),i=[];for(let e=0;e<d.length;e+=t){let r=d.slice(e,e+t),o=Array(r.length);for(let e=0;e<r.length;e+=1)o[e]=r.charCodeAt(e);let a=new Uint8Array(o);i.push(a)}return new Blob(i,{type:o})}(e)).then(e=>t(e)):r("Invalid Image")}),O=e=>()=>(0,d.Z)({url:"/v3/register/exists/",data:{email:e}})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/60588.es_419-662eb436b9e4b0f8.mjs.map
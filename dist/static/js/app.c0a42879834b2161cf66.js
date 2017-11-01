webpackJsonp([1],{0:function(t,e){},EHTI:function(t,e,n){"use strict";function o(t){n("jPX7")}var r=n("eXNe"),a=n("nwG9"),s=n("VU/8"),i=o,d=s(r.a,a.a,!1,i,"data-v-a072ea3a",null);e.a=d.exports},"FtD+":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Todos")],1)},r=[],a={render:o,staticRenderFns:r};e.a=a},IcnI:function(t,e,n){"use strict";var o=n("mUbh"),r=n("ukYY");e.a={state:{todos:[]},actions:o.a,mutations:r.a}},KF9i:function(t,e){},M93x:function(t,e,n){"use strict";var o=n("xJD8"),r=n("FtD+"),a=n("VU/8"),s=a(o.a,r.a,!1,null,null,null);e.a=s.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),r=n("ORbq"),a=n("NYxO"),s=n("yweG"),i=n.n(s),d=n("KF9i"),c=(n.n(d),n("M93x")),u=n("IcnI");o.default.use(r.a),o.default.use(a.a),o.default.use(i.a),o.default.config.productionTip=!1;var p=new a.a.Store(u.a);new o.default({el:"#app",store:p,template:"<App/>",components:{App:c.a}})},eXNe:function(t,e,n){"use strict";var o=n("NYxO");e.a={name:"Todos",created:function(){this.$store.dispatch("fetchTodos")},computed:Object(o.b)(["todos"]),methods:{addTodo:function(t){var e=this;t.target.value.trim()&&this.$store.dispatch("addTodo",{text:t.target.value,done:!1}).then(function(){e.$Message.info("Task added")},this.errorMessage),t.target.value=""},editTodo:function(t,e){var n=this,o=e.target.value;o.trim()?this.$store.dispatch("editTodo",{todo:t,updatedText:o}).then(function(){n.$Message.info("Task edited")},this.errorMessage):this.removeTodo(t)},removeTodo:function(t){var e=this;this.$store.dispatch("removeTodo",t).then(function(){e.$Message.warning("Task removed")},this.errorMessage)},toggleDone:function(t){var e=this;this.$store.dispatch("toggleDone",t).then(function(t){t.done?e.$Message.success("Task completed :)"):e.$Message.error("Task undone :(")},this.errorMessage)},errorMessage:function(){this.$Message.error("Server error")}}}},jPX7:function(t,e){},mUbh:function(t,e,n){"use strict";var o=n("Xxa5"),r=n.n(o),a=n("exGp"),s=n.n(a),i=n("7+uW"),d="https://graphql-todo.herokuapp.com/graphql";e.a={fetchTodos:function(t){var e=this,n=t.commit;return s()(r.a.mark(function t(){var o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.default.http.post(d,{query:"\n                        query {\n                            todos {\n                                id\n                                text\n                                done\n                            }\n                        }\n                    "});case 3:o=t.sent,n("fetchTodos",o.body.data.todos),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()},addTodo:function(t,e){var n=this,o=t.commit;return s()(r.a.mark(function t(){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.default.http.post(d,{query:'\n                        mutation {\n                            add (text: "'+e.text+'") {\n                                id\n                                text\n                                done\n                            }\n                        }\n                    '});case 3:a=t.sent,o("addTodo",a.body.data.add),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}},t,n,[[0,7]])}))()},editTodo:function(t,e){var n=this,o=t.commit,a=e.todo,c=e.updatedText;return s()(r.a.mark(function t(){var e;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.default.http.post(d,{query:'\n                        mutation {\n                            edit (id: "'+a.id+'", text: "'+c+'") {\n                                id\n                                text\n                                done\n                            }\n                        }\n                    '});case 3:e=t.sent,o("editTodo",{todo:a,updatedTodo:e.body.data.edit}),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}},t,n,[[0,7]])}))()},removeTodo:function(t,e){var n=this,o=t.commit;return s()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.default.http.post(d,{query:'\n                        mutation {\n                            remove (id: "'+e.id+'") {\n                                id\n                                text\n                                done\n                            }\n                        }\n                    '});case 3:o("removeTodo",e),t.next=9;break;case 6:throw t.prev=6,t.t0=t.catch(0),t.t0;case 9:case"end":return t.stop()}},t,n,[[0,6]])}))()},toggleDone:function(t,e){var n=this,o=t.commit;return s()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.default.http.post(d,{query:'\n                        mutation {\n                            toggle (id: "'+e.id+'") {\n                                id\n                                text\n                                done\n                            }\n                        }\n                    '});case 3:return o("toggleDone",e),t.abrupt("return",e);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}},t,n,[[0,7]])}))()}}},nwG9:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-wrapper"},[n("div",{staticClass:"todos"},[t._l(t.todos,function(e){return n("div",{key:e.id,staticClass:"todo row at-row"},[n("at-input",{staticClass:"edit-todo todo-input",attrs:{placeholder:"...press enter to remove",size:"large",value:e.text,disabled:e.done?"disabled":null},nativeOn:{keyup:function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key))return null;t.editTodo(e,n)}}}),t._v(" "),n("at-button",{staticClass:"action-button",attrs:{type:"primary",icon:"icon-check",size:"large",circle:"",hollow:e.done?null:"hollow"},on:{click:function(n){t.toggleDone(e)}}}),t._v(" "),n("at-button",{staticClass:"action-button",attrs:{type:"error",icon:"icon-x",size:"large",circle:"",hollow:""},on:{click:function(n){t.removeTodo(e)}}})],1)}),t._v(" "),n("div",{staticClass:"todo row at-row"},[n("at-input",{staticClass:"new-todo todo-input",attrs:{placeholder:"New todo...",size:"large"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.addTodo(e)}}})],1)],2)])},r=[],a={render:o,staticRenderFns:r};e.a=a},ukYY:function(t,e,n){"use strict";var o=n("rdLu"),r=n.n(o);e.a={fetchTodos:function(t,e){t.todos=e},addTodo:function(t,e){t.todos.push(e)},editTodo:function(t,e){var n=e.todo,o=e.updatedTodo;n.text=o.text},removeTodo:function(t,e){t.todos=r.a.reject(t.todos,function(t){return t.id===e.id})},toggleDone:function(t,e){e.done=!e.done}}},xJD8:function(t,e,n){"use strict";var o=n("EHTI");e.a={name:"app",components:{Todos:o.a}}}},["NHnr"]);
//# sourceMappingURL=app.c0a42879834b2161cf66.js.map
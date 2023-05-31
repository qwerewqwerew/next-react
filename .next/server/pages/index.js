(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 377:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "StudyItem_item__49Utw",
	"image": "StudyItem_image__yDTqP",
	"content": "StudyItem_content__cfm0f",
	"actions": "StudyItem_actions__ZqMCI"
};


/***/ }),

/***/ 5507:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "StudyList_list__vbRiV"
};


/***/ }),

/***/ 5307:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__73YTa"
};


/***/ }),

/***/ 6773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ pages),
  "getStaticProps": () => (/* reexport */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/ui/Card.js
var Card = __webpack_require__(2844);
// EXTERNAL MODULE: ./components/studyViews/StudyItem.module.css
var StudyItem_module = __webpack_require__(377);
var StudyItem_module_default = /*#__PURE__*/__webpack_require__.n(StudyItem_module);
;// CONCATENATED MODULE: ./components/studyViews/StudyItem.js




function StudyItem(props) {
    const router = (0,router_.useRouter)();
    const studyMoreFn = ()=>{
        router.push(`/${props.id}`);
    };
    return /*#__PURE__*/ jsx_runtime.jsx("li", {
        className: (StudyItem_module_default()).item,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: (StudyItem_module_default()).image,
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: props.image,
                        alt: props.title
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (StudyItem_module_default()).content,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            children: props.title
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("address", {
                            children: props.address
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: (StudyItem_module_default()).actions,
                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                        onClick: studyMoreFn,
                        children: "더보기"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const studyViews_StudyItem = (StudyItem);

// EXTERNAL MODULE: ./components/studyViews/StudyList.module.css
var StudyList_module = __webpack_require__(5507);
var StudyList_module_default = /*#__PURE__*/__webpack_require__.n(StudyList_module);
;// CONCATENATED MODULE: ./components/studyViews/StudyList.js



function StudyList(props) {
    return /*#__PURE__*/ jsx_runtime.jsx("ul", {
        className: (StudyList_module_default()).list,
        children: props.studys.map((study)=>/*#__PURE__*/ jsx_runtime.jsx(studyViews_StudyItem, {
                id: study.id,
                image: study.image,
                title: study.title,
                address: study.addrstudyMoreFness
            }, study.id))
    });
}
/* harmony default export */ const studyViews_StudyList = (StudyList);

;// CONCATENATED MODULE: ./pages/index.js




const Home = ({ studyInit  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Next Study"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "Nextjs로 만든 스터디앱"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "keyword",
                        content: "Nextjs,react"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                children: "Home"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(studyViews_StudyList, {
                studys: studyInit
            })
        ]
    });
};
async function getStaticProps() {
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://admin:1234@study-cluster.q9t7mcx.mongodb.net/?retryWrites=true&w=majority");
    const db = client.db();
    const stydyCollection = db.collection("study");
    const result = await stydyCollection.find().toArray();
    client.close();
    return {
        props: {
            studyInit: result.map((item)=>({
                    title: item.title,
                    address: item.address,
                    image: item.image,
                    id: item._id.toString()
                }))
        },
        revalidate: 10
    };
}
/* harmony default export */ const pages = (Home);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F&absolutePagePath=private-next-pages%2Findex.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 2844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5307);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);


function Card(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
        children: props.children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(6773)));
module.exports = __webpack_exports__;

})();
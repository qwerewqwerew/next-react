(() => {
var exports = {};
exports.id = 636;
exports.ids = [636];
exports.modules = {

/***/ 6706:
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "StudyDetail_detail__W3Vh_"
};


/***/ }),

/***/ 7556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ _studyId_),
  "getStaticPaths": () => (/* reexport */ getStaticPaths),
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
// EXTERNAL MODULE: ./components/studyViews/StudyDetail.module.css
var StudyDetail_module = __webpack_require__(6706);
var StudyDetail_module_default = /*#__PURE__*/__webpack_require__.n(StudyDetail_module);
;// CONCATENATED MODULE: ./components/studyViews/StudyDetail.js


const StudyDetail = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: (StudyDetail_module_default()).detail,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("img", {
                src: props.image,
                alt: props.title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                children: props.title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: props.address
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: props.description
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const studyViews_StudyDetail = (StudyDetail);

;// CONCATENATED MODULE: ./pages/[studyId]/index.js





const StudyId = ({ studyData  })=>{
    const router = (0,router_.useRouter)();
    const { studyId  } = router.query;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("title", {
                        children: [
                            studyData.title,
                            " "
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: studyData.title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "keyword",
                        content: studyData.title
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                children: [
                    "StudyId:",
                    studyId
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(studyViews_StudyDetail, {
                image: studyData.image,
                title: studyData.title,
                address: studyData.address,
                description: studyData.description
            })
        ]
    });
};
async function getStaticPaths() {
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://admin:1234@study-cluster.q9t7mcx.mongodb.net/?retryWrites=true&w=majority");
    const db = client.db();
    const studyCollection = db.collection("study");
    const result = await studyCollection.find({}, {
        _id: 1
    }).toArray();
    client.close();
    return {
        fallback: "blocking",
        paths: result.map((study)=>{
            return {
                params: {
                    studyId: study._id.toString()
                }
            };
        })
    };
}
async function getStaticProps(context) {
    const studyItemId = context.params.studyId;
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://admin:1234@study-cluster.q9t7mcx.mongodb.net/?retryWrites=true&w=majority");
    const db = client.db();
    const studyCollection = db.collection("study");
    const selectStudy = await studyCollection.findOne({
        _id: new external_mongodb_.ObjectId(studyItemId)
    });
    client.close();
    return {
        props: {
            studyData: {
                id: selectStudy._id.toString(),
                title: selectStudy.title,
                address: selectStudy.address,
                image: selectStudy.image,
                description: selectStudy.description
            }
        }
    };
}
/* harmony default export */ const _studyId_ = (StudyId);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F%5BstudyId%5D&absolutePagePath=private-next-pages%2F%5BstudyId%5D%2Findex.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

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
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(7556)));
module.exports = __webpack_exports__;

})();
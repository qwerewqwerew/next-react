"use strict";
(() => {
var exports = {};
exports.id = 897;
exports.ids = [897];
exports.modules = {

/***/ 7653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ new_study)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/new-study.js

async function saveData(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        const { title , image , description , address  } = data;
        const client = await external_mongodb_namespaceObject.MongoClient.connect("mongodb+srv://admin:1234@study-cluster.q9t7mcx.mongodb.net/?retryWrites=true&w=majority");
        const db = client.db();
        const stydyCollection = db.collection("study");
        const result = await stydyCollection.insertOne(data);
        client.close();
        res.status(201).json({
            message: "studyList 추가!"
        });
    }
    const data = await response.json();
}
/* harmony default export */ const new_study = (saveData);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7653));
module.exports = __webpack_exports__;

})();
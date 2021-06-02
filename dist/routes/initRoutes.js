"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var uploadController_1 = require("../controllers/uploadController");
var multer_1 = __importDefault(require("../middlewares/multer"));
var router = express_1.Router();
var initRoutes = function (app) {
    router.post('/upload/multiple', multer_1.default.array('files'), uploadController_1.multipleUpload);
    return app.use(router);
};
exports.default = initRoutes;
//# sourceMappingURL=initRoutes.js.map
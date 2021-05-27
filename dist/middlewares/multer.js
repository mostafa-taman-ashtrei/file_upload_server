"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var fs_1 = __importDefault(require("fs"));
var uploadDir = 'uploads';
if (!fs_1.default.existsSync(uploadDir))
    fs_1.default.mkdirSync(uploadDir);
var storageEngine = multer_1.default.diskStorage({
    destination: function (_, __, cb) { return cb(null, uploadDir); },
    filename: function (_, file, cb) { return cb(null, Date.now() + "--" + file.originalname); },
});
var uploadEngine = multer_1.default({ storage: storageEngine });
exports.default = uploadEngine;
//# sourceMappingURL=multer.js.map
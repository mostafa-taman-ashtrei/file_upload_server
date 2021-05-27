"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multipleUpload = exports.singleUpload = void 0;
var singleUpload = function (req, res) {
    try {
        var file = req.file;
        return res.json({ msg: 'File uploaded ...', file: file });
    }
    catch (e) {
        throw new Error(e);
    }
};
exports.singleUpload = singleUpload;
var multipleUpload = function (req, res) {
    try {
        var files = req.files;
        return res.json({ msg: 'Files uploaded ...', files: files });
    }
    catch (e) {
        throw new Error(e);
    }
};
exports.multipleUpload = multipleUpload;
//# sourceMappingURL=uploadController.js.map
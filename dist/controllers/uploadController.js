"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multipleUpload = void 0;
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
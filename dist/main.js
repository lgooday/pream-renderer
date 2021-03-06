"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var pug = require("pug");
var less = require("less");
var pream_oneliner_1 = require("pream-oneliner"), PreamOneLinerConstant = pream_oneliner_1;
var PreamRenderer = /** @class */ (function () {
    function PreamRenderer(inlineTemplate, inlineStyle, wrapperClass) {
        this.inlineTemplate = inlineTemplate;
        this.inlineStyle = inlineStyle;
        this.wrapperClass = wrapperClass;
        if (this.wrapperClass) {
            var replacer = "" + PreamOneLinerConstant.NEWLINE + PreamOneLinerConstant.TAB;
            if (this.inlineTemplate) {
                this.inlineTemplate = "." + this.wrapperClass + PreamOneLinerConstant.NEWLINE + this.inlineTemplate;
                this.inlineTemplate = "" + this.inlineTemplate.replace(PreamOneLinerConstant.NEWLINE, replacer);
            }
            if (this.inlineStyle) {
                this.inlineStyle = "div." + this.wrapperClass + "{" + this.inlineStyle + "}";
                this.inlineStyle = "" + this.inlineStyle.replace(PreamOneLinerConstant.NEWLINE, replacer);
            }
        }
    }
    PreamRenderer.prototype.renderDom = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var domUnprocessor, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.inlineTemplate) {
                            return [2 /*return*/, Promise.resolve()];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, new pream_oneliner_1.default(this.inlineTemplate, PreamOneLinerConstant.OneLinerType.PUG, PreamOneLinerConstant.OneLinerDirection.UNPROCESS).process()];
                    case 2:
                        domUnprocessor = _a.sent();
                        this.dom = pug.render(domUnprocessor, { content: input.content });
                        return [2 /*return*/, Promise.resolve()];
                    case 3:
                        e_1 = _a.sent();
                        return [2 /*return*/, Promise.reject(new Error(e_1))];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PreamRenderer.prototype.renderStyle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var styleUnprocessor, lessRenderer, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.inlineStyle) {
                            return [2 /*return*/, Promise.resolve()];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, new pream_oneliner_1.default(this.inlineStyle, PreamOneLinerConstant.OneLinerType.LESS, PreamOneLinerConstant.OneLinerDirection.UNPROCESS).process()];
                    case 2:
                        styleUnprocessor = _a.sent();
                        return [4 /*yield*/, less.render(styleUnprocessor, { compress: true })];
                    case 3:
                        lessRenderer = _a.sent();
                        this.style = lessRenderer.css;
                        return [2 /*return*/, Promise.resolve()];
                    case 4:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [2 /*return*/, Promise.reject(new Error(e_2))];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PreamRenderer.prototype.process = function (input) {
        if (input === void 0) { input = { content: null }; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.race([this.renderDom(input), this.renderStyle()])];
            });
        });
    };
    PreamRenderer.prototype.struct = function () {
        return {
            style: this.style,
            dom: this.dom,
        };
    };
    return PreamRenderer;
}());
exports.default = PreamRenderer;
//# sourceMappingURL=main.js.map
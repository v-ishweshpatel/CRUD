"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const student_schema_1 = require("./schema/student.schema");
const student_service_1 = require("./services/student/student.service");
const student_controller_1 = require("./controller/student/student.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://VishweshPatel:vishwesh@cluster0.nykqjcu.mongodb.net/?retryWrites=true&w=majority'),
            mongoose_1.MongooseModule.forFeature([{ name: 'Student', schema: student_schema_1.StudentSchema }]),
        ],
        controllers: [app_controller_1.AppController, student_controller_1.StudentController],
        providers: [app_service_1.AppService, student_service_1.StudentService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
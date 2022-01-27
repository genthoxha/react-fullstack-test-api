"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
class Utils {
}
exports.Utils = Utils;
_a = Utils;
Utils.calculateDistance = (latitude1, longitude1, latitude2, longitude2) => {
    const R = 6371;
    const dLat = _a.toRad(latitude2 - latitude1);
    const dLon = _a.toRad(longitude2 - longitude1);
    const lat1 = _a.toRad(latitude1);
    const lat2 = _a.toRad(latitude2);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};
Utils.toRad = (Value) => {
    return (Value * Math.PI) / 180;
};
//# sourceMappingURL=utils.js.map
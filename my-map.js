export function myMap() {
  if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback) {
      /// проверка на массивоподобную сущность
      if (!(this instanceof Array || this instanceof String)) {
        throw new TypeError(`Array.prototype.myMap was called on wrong type`);
      }

      /// проверка на отстутствие колбека
      if (typeof callback !== 'function') {
        throw new TypeError(
          `Array.prototype.myMap ${callback} was called on wrong type!`
        );
      }

      const result = [];

      for (let i = 0; i < this.length; i++) {
        /**
         * this[i] - value,
         * i - index,
         * this - array;
         */

        result.push(callback(this[i], i, this));
      }

      return result;
    };
  }
}

import moment from 'moment'
// 為 moment.js format 的功能
function m() {
  var self = moment(...arguments);
  self.__proto__ = m.prototype;
  return self;
}
m.prototype.__proto__ = moment.prototype
// 計算年齡
Object.defineProperty(m.prototype, 'age', {
  get: function() {
    return m().diff(this, 'years', false)
  }
});
// 設置民國年格式
m.prototype.format = function(format){
  const formattingTokens = /Y{4,}|Y{3}|[^Y{3}]+/g
  const arr = format.match(formattingTokens)
  const ktformat = arr.map( x => x === 'YYY'
    ?(this._d.getFullYear() - 1911).toString().padStart(3,'0')
    :x
  ).join('')
  return new moment(this._d).format(ktformat)
}
Object.defineProperty(m.prototype, 'dte', {
  get: function(){
    return this.format("YYYMMDD")
  },
  set: function(v) {
    v = v.padStart(7, '0')
    const yyy = (parseInt(v.substring(0, 3)) + 1911)
    this._d.setFullYear(yyy)
    this._d.setMonth(parseInt(v.substring(3, 5))-1)
    this._d.setDate(parseInt(v.substring(5, 7)))
  }
});
Object.defineProperty(m.prototype, 'tme', {
  get: function(){
    return this.format("HHmmss")
  },
  set: function(v) {
    v = v.padEnd(6, '0')
    this._d.setHours(parseInt(v.substring(0,2)))
    this._d.setMinutes(parseInt(v.substring(2,4)))
    this._d.setSeconds(parseInt(v.substring(4,6)))
  }
});
export default m

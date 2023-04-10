import day from 'dayjs'
// 為 day.js format 的功能加入 YYY
function m() {
  var self = day(...arguments);
  self.__proto__ = m.prototype;
  return self;
}
m.prototype.__proto__ = day.prototype
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
    ?(this.$d.getFullYear() - 1911).toString().padStart(3,'0')
    :x
  ).join('')
  return new day(this.$d).format(ktformat)
}
Object.defineProperty(m.prototype, 'dte', {
  get: function(){
    return this.format("YYYMMDD")
  },
  set: function(v) {
    v = v.padStart(7, '0')
    const yyy = (parseInt(v.substring(0, 3)) + 1911)
    this.$d.setFullYear(yyy)
    this.$d.setMonth(parseInt(v.substring(3, 5))-1)
    this.$d.setDate(parseInt(v.substring(5, 7)))
  }
});
Object.defineProperty(m.prototype, 'tme', {
  get: function(){
    return this.format("HHmmss")
  },
  set: function(v) {
    v = v.padEnd(6, '0')
    this.$d.setHours(parseInt(v.substring(0,2)))
    this.$d.setMinutes(parseInt(v.substring(2,4)))
    this.$d.setSeconds(parseInt(v.substring(4,6)))
  }
});
export default m

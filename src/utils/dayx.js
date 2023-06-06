import day from 'dayjs'
const rocyyy = (dt)=>(dt.getFullYear() - 1911).toString().padStart(3, '0')
const prototype = Object.getPrototypeOf(day())
const handler = {
  get: function (target, prop, receiver) {
    // age, dte, tme
    if (prop === 'age') return day().diff(receiver, 'years', false)
    if (prop === 'dte') return receiver.format('YYYMMDD')
    if (prop === 'tme') return receiver.format('HHmmss')
    // format
    if (prop === 'format') return (format) =>{
        const formattingTokens = /Y{4,}|Y{3}|[^Y{3}]+/g
        const arr = format.match(formattingTokens)
        const ktformat = arr
          .map(x => x === 'YYY' ? rocyyy(target.$d) : x)
          .join('')
        return target.format(ktformat)
      }

    // Property is not function, else condition
    if (typeof target[prop] !== 'function') return target[prop]
    // Property is function, Wrap it
    return function (...args) {
      const result = target[prop].apply(target, args)
      const isReturnDayjs = Object.getPrototypeOf(result) === prototype
      return isReturnDayjs ? p(result, handler) : result
    }
  },
  set(obj, prop, v, receiver) {
    if (prop === 'dte') {
      v = v.padStart(7, '0')
      const yyy = parseInt(v.substring(0, 3)) + 1911
      obj.$d.setFullYear(yyy)
      obj.$d.setMonth(parseInt(v.substring(3, 5)) - 1)
      obj.$d.setDate(parseInt(v.substring(5, 7)))
      return receiver
    }
    if (prop === 'tme') {
      v = v.padEnd(6, '0')
      obj.$d.setHours(parseInt(v.substring(0, 2)))
      obj.$d.setMinutes(parseInt(v.substring(2, 4)))
      obj.$d.setSeconds(parseInt(v.substring(4, 6)))
      return receiver
    }
    return Reflect.set(...arguments)
  },
}
const p = (...args) => new Proxy(day(...args), handler)

export default p

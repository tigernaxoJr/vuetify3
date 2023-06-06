import day from 'dayjs'
const prototype = Object.getPrototypeOf(day())
const handler = {
  get: function (target, prop, receiver) {
    // age
    if (prop === 'age') return day().diff(receiver, 'years', false)
    if (prop === 'dte') return receiver.format('YYYMMDD')
    if (prop === 'tme') return receiver.format('HHmmss')
    // format
    if (prop === 'format') {
      return function (...args) {
        const format = args[0]
        const formattingTokens = /Y{4,}|Y{3}|[^Y{3}]+/g
        const arr = format.match(formattingTokens)
        const ktformat = arr
          .map(x =>
            x === 'YYY'
              ? (target.$d.getFullYear() - 1911).toString().padStart(3, '0')
              : x
          )
          .join('')
        return new day(target.$d).format(ktformat)
      }
    }

    // Check if the property is a function
    // Return the original property value
    if (typeof target[prop] !== 'function') return target[prop]
    // Wrap the original function with custom behavior
    return function (...args) {
      console.log(Calling function: ${prop})
      const result = target[prop].apply(target, args)
      if (Object.getPrototypeOf(result) === prototype) return p(result, handler)
      return result
    }
  },
  set(obj, prop, v) {
    if (prop === 'dte') {
      v = v.padStart(7, '0')
      const yyy = parseInt(v.substring(0, 3)) + 1911
      obj.$d.setFullYear(yyy)
      obj.$d.setMonth(parseInt(v.substring(3, 5)) - 1)
      obj.$d.setDate(parseInt(v.substring(5, 7)))
    }
    if (prop === 'tme') {
      v = v.padEnd(6, '0')
      obj.$d.setHours(parseInt(v.substring(0, 2)))
      obj.$d.setMinutes(parseInt(v.substring(2, 4)))
      obj.$d.setSeconds(parseInt(v.substring(4, 6)))
    } else {
      return Reflect.set(...arguments)
    }
  },
}
const p = (...args) => new Proxy(day(...args), handler)

export default p

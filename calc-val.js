+function ($) {
  'use strict'

  function calc(vaR, option, resEl) {
    vaR.each(function () {
      var val = $(this).val() 
      if(val === '') {
        val = '0'
      }
      option = option.replace('{'+ $(this).attr('data-attr') + '}', val)
    })
    
    // console.log(option)

    option = option.replace(/[^-()\d/*+.]/g, '')
    resEl.val(eval(option))
  }

  $.fn.calcVal = function (option) {
    this.each(function () {
      var varCalc = $(this).find('.var-calc'),
          resEl = $(this).find('.res-calc')
      varCalc.on('keyup', function () {
        calc(varCalc, option, resEl)
      })
    })
  }
}(jQuery)
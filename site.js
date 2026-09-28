/* Форма записи: радиус и выбранные услуги складываются в скрытые поля заявки. */
(function () {
  'use strict';
  var form = document.querySelector('form[data-lead]');
  if (!form) return;
  var radius = document.getElementById('f-radius');
  var need = document.getElementById('f-need');

  function sync() {
    var r = form.querySelector('input[name=r]:checked');
    radius.value = r ? r.value : '';
    need.value = [].map.call(form.querySelectorAll('.need input:checked'), function (i) { return i.value; }).join(', ');
  }
  form.addEventListener('change', sync);
  sync();
})();

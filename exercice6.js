function controle(form) {
  var first = document.form.premier_nombre.value;
  var second = document.form.deuxieme_nombre.value;
  var premier = Math.trunc(first);
  alert(premier % second);
};

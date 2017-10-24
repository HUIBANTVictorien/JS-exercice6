function display() {
  var first = document.getElementById('premier_nombre').value;
  var second = document.getElementById('deuxieme_nombre').value;
  var premier = Math.trunc(first);
  alert(premier % second);
};

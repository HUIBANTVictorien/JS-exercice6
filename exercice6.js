function display() {
  var first = document.getElementById('premier_nombre').value;
  var second = document.getElementById('deuxieme_nombre').value;
  var one = Math.trunc(first);
  alert(one % second);
};

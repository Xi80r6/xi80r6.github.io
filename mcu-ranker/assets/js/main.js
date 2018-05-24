// Enable list sorting courtesy: https://github.com/RubaXa/Sortable
if (typeof Sortable !== "undefined") {
    var list = document.querySelector('ol');
    console.log(list);
    var sortable = Sortable.create(list);
}
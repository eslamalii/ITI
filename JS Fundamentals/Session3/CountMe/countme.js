var obj = {
  class: "my-class",
  id: "my-id",
  name: "my-name",
};
var tag = "div";

var objMatch = (obj, tag) => {
  var classCount = document.querySelectorAll(`.${obj.class}`).length;
  var idCheck = !!document.getElementById(obj.id);
  var nameCount = document.getElementsByName(obj.name).length;
  var tagCount = document.getElementsByTagName(tag).length;
  return {
    All: classCount + tagCount + nameCount + Number(idCheck),
    Class: classCount,
    Id: idCheck,
    Name: nameCount,
  };
};

console.log(objMatch(obj, tag));

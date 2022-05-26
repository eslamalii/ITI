var fly = prompt("Do you fly? (Yes/No)").toLowerCase();

if (fly === "yes") {
  var wild = prompt("Are you wild? (Yes/No)");
  if (wild === "yes") {
    document.writeln("<h1>You are an Eagle</h1>");
  } else if (wild === "no") {
    document.writeln("<h1>You are a parrot</h1>");
  } else {
    document.writeln("<h1>Invaild</h1>");
  }
} else if (fly === "no") {
  var sea = prompt("Do you live under sea? (Yes/No)");
  if (sea === "yes") {
    var wild = prompt("Are you wild? (Yes/No)");
    if (wild === "yes") {
      document.writeln("<h1>You are a Shark</h1>");
    } else if (wild == "no") {
      document.writeln("<h1>You are a Dolphin</h1>");
    } else {
      document.writeln("<h1>Invaild</h1>");
    }
  } else if (sea === "no") {
    var wild = prompt("Are you wild? (Yes/No)");
    if (wild == "yes") {
      document.writeln("<h1>You are a Lion</h1>");
    } else if (wild == "no") {
      document.writeln("<h1>You are a Cat </h1>");
    } else {
      document.writeln("<h1>Invaild</h1>");
    }
  } else {
    document.writeln("<h1>Invaild</h1>");
  }
} else {
  document.writeln("<h1>Invaild</h1>");
}

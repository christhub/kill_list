$(document).ready(function() {
  $("#add-kill").click(function() {
    $("#new-kills").append(
      '<div class="new-kill">' +
      '<div class="form-group">' +
      '<label for="kill">Kill</label>' +
      '<input type="text" class="form-control kill">' +
      '</div>' +
      '<div class="form-group">' +
      '<label for="execution">Method of Kill</label>' +
      '<input type="text" class="form-control execution">' +
      '</div>' +
      '</div>'
    );
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    var house = $("input#house").val();
    var newKiller = { name: name, house: house, kills: [] };

    $(".new-kill").each(function() {
      var name = $(this).find("input.kill").val();
      var murder = $(this).find("input.execution").val();
      var newKill = { kill: name, execution: murder };
      newKiller.kills.push(newKill);
    });


    $("ul#killer").append("<li><span class='new-killer'>" + newKiller.name + " of House " + newKiller.house + "</span></li>");

    $("input#name").val("");
    $("input#house").val("");
    $('.new-kill').remove();
    $("#new-kills").append(
      '<div class="new-kill">' +
      '<div class="form-group">' +
      '<label for="kill">Kill</label>' +
      '<input type="text" class="form-control kill">' +
      '</div>' +
      '<div class="form-group">' +
      '<label for="execution">Method of Kill</label>' +
      '<input type="text" class="form-control execution">' +
      '</div>' +
      '</div>'
    );
    $("input.kill").val("");
    $("input.execution").val("");


    $(".new-killer").last().click(function() {
      $("#show-killer").show();
      $("#show-killer h2").text(newKiller.name + " of House " + newKiller.house);
      $(".name").text(newKiller.name);
      $(".house").text(newKiller.house);
      $('ul#kills').empty();
      newKiller.kills.forEach(function(kill) {
        $("ul#kills").append("<li>" + kill.kill + ", by " + kill.execution + "</li>");
      });
    });

  });
});

  // '<div id="new-kill">' +
  // +
  // '</div>'

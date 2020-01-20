(function () {

    let $createBtn, $updateBtn, $titleFld;
    let $tableBody, $templateRow;

    main = () => {
        // bind DOM elements to local variables
        $createBtn = $("#createBtn");
        $updateBtn = $("#updateBtn");
        $titleFld  = $("#titleFld");
        $templateRow = $("#templateRow");
        $tableBody = $("#tableBody");

        // bind buttons to event handlers
        $createBtn.click(createMovie);
    }

    createMovie = () => {
        // get and clear title
        const title = $titleFld.val();
        $titleFld.val("");

        // clone row and remove template specific id and style
        const templateRowClone = $templateRow.clone();
        templateRowClone.css("display", "table-row")
        templateRowClone.removeAttr("id");

        // configure clone specific display and bind event handler
        templateRowClone.find(".movieTitle").html(title);
        templateRowClone.find(".deleteBtn").click(deleteMovie);

        // add clone to DOM
        $tableBody.append(templateRowClone);
    }

    deleteMovie = (event) => {
        // get parent row and remove
        const $deleteBtn = $(event.currentTarget)
        const $row = $deleteBtn.parent().parent();
        $row.remove();
    }

    $(main);
})()

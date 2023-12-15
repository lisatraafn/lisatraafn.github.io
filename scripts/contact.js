$("#submitContactButton").on( "click", () =>
{
    let errors = ""
    if($("#cFName").val().length === 0)
    {
        errors +="First Name, "
    }
    if($("#cLName").val().length === 0)
    {
        errors +="Last Name, "
    }
    if($("#cEmail").val().length === 0)
    {
        errors +="E-mail, "
    }
    if($("#Cmessage").val().length === 0)
    {
        errors +="Message, "
    }

    if(errors.length === 0)
    {
        $("#contactError").hide();
        $("#contactSubmit").hide();
        $("#submitContactButton").hide();
        $("#contactSubmitted").show();
    }
    else 
    {
        $("#contactError").show();
        $("#contactError")
            .html(`<p>Missing required Fields ${errors.substring(0,errors.length-2)}</p>`);
    }
});
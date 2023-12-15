
let loadTemplate = async (url) =>
{
    const template = await fetch(url);
    return template.text();
}



let promises = 
[
    loadTemplate("templates/home.html"),
    loadTemplate("templates/about.html"),
    loadTemplate("templates/portfolio.html"),
    loadTemplate("templates/contact.html"),
    loadTemplate("templates/project1.html"),
]

let setEventHeaderButton = (id, template) =>
    {
        $(id).on( "click", () =>
            {
                $("#homeContent").html(template);
            });
    }

let deviceMode = ()=>
{
    let isMobile = $(window).width()/$(window).height() < 0.666;
    if(isMobile)
    {
        $("#normalHeader").hide();
        $("#mobileHeader").show();
    }
    else
    {
        $("#normalHeader").show();
        $("#mobileHeader").hide();
    }
}

$(document).ready( ()=>
    {
        Promise.allSettled(promises).then((results) =>
        {
            const homeTemplate = results[0].value;
            const aboutTemplate = results[1].value;
            const PortfolioTemplate = results[2].value;
            const ContactTemplate = results[3].value;

            $("#mainContent").html(homeTemplate);
            $("#homeContent").html(aboutTemplate);
            $("#PortfolioContent").html(PortfolioTemplate);
            $("#ContactTemplate").html(ContactTemplate);

            setEventHeaderButton("#aboutButton", aboutTemplate);
            setEventHeaderButton("#PortfolioButton", PortfolioTemplate);
            setEventHeaderButton("#ContactHeaderButton", ContactTemplate);
            setEventHeaderButton("#ContactButton", ContactTemplate);

            setEventHeaderButton("#aboutButton2", aboutTemplate);
            setEventHeaderButton("#PortfolioButton2", PortfolioTemplate);
            setEventHeaderButton("#ContactHeaderButton2", ContactTemplate);

            deviceMode();
            $(window).resize(()=>
            {
                deviceMode();
            })
        })
    })

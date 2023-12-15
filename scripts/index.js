
let loadTemplate = async (url) =>
{
    const template = await fetch(url);
    return template.text();
}


let promises = 
[
    loadTemplate("templates/home.html"),
    loadTemplate("templates/overview.html"),
    loadTemplate("templates/graphics.html"),
    loadTemplate("templates/about.html"),
    loadTemplate("templates/webDesign.html"),
]

let setEventHeaderButton = (id, template) =>
    {
        $(id).on( "click", () =>
            {
                $("#homeContent").html(template);
            });
    }

$(document).ready( ()=>
    {
        Promise.allSettled(promises).then((results) =>
        {
            const homeTemplate = results[0].value;
            const overviewTemplate = results[1].value;
            const graphicsTemplate = results[2].value;
            const aboutTemplate = results[3].value;
            const webDesignTemplate = results[4].value;

            $("#mainContent").html(homeTemplate);
            $("#homeContent").html(overviewTemplate);

            setEventHeaderButton("#graphicHeaderButton", graphicsTemplate);
            setEventHeaderButton("#aboutButton", aboutTemplate);
            setEventHeaderButton("#webDesignHeaderButton", webDesignTemplate);
        })
    })

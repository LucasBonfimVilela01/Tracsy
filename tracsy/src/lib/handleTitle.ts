export const handleTitle = (pageTitle: string | null) =>{
    let title = ""

    if (pageTitle!==null) {
        title = `Tracsy | ${pageTitle}`
    } else {
        title = "Tracsy"
    }

    document.title = title
}
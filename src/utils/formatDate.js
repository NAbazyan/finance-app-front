export  const formatDate = (d) => {
    const date = new Date(d);
    return date.toLocaleDateString("en-US", {
        month: "short", 
        day: "numeric",
    });
}


export  const formDate = (d) => {
    const date = new Date(d);
    return date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric", 
    });
}
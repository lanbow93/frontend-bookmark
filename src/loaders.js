const URL=" https://bookmarkd.onrender.com"

export const bookmarkdLoader = async () => {
    const response = await fetch (URL + "/bookmark");
    const bookmark = await response.json();
    return bookmark;

}

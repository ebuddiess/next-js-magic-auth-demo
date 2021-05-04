export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"
export const MAGIC_API_URL = process.env.NEXT_PUBLIC_MAGIC_API_URL || "pk_test_495D0D0F4246116F"

/** Given an Image return the url
 * works for local deployed strapi
 * @param {any} image 
 */

export const fromImageToUrl = (image) => {

    if(!image){
        return "/vercel.svg";
    }

    if(image.url.indexOf("/") === 0){
        return `${API_URL}${image.url}`
    }

    return image.url 
}
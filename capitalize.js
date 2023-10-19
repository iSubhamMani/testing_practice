export default function capitalize(text){
    return text.trim().length !== 0 ? `${(text.charAt(0).toUpperCase())}${text.substr(1)}` : null;
}
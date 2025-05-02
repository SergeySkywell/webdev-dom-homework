export const escapeHtml = (text) =>
    text.replaceAll("<", "&lt;").replaceAll(">", "&gt;");  
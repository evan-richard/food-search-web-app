export function toLowercaseNoDashes(text: string) {
    return text.trim().replace(new RegExp('-', 'g'), ' ').toLowerCase();
}

export function toLowercaseWithDashes(text: string) {
    return text.trim().replace(new RegExp(' ', 'g'), '-').toLowerCase();
}
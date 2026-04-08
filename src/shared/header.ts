export interface Header {
    name: string;
    navLinks: NavLinks[];
    language: string;
}

export interface NavLinks {
    id: string;
    name: string;
}
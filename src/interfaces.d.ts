export interface UserPrompts {
    projectName: string;
    tailwind: boolean;
    shadcn: boolean;
    router: boolean;
    redux: boolean;
    redirect: {
        netlify: boolean;
        vercel: boolean;
    };
}

import CivicsNav from "./civics-nav";

export default function CivicsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <CivicsNav />
            <main>{children}</main>
        </div>
    );
}

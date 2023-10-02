import { Loader2 } from "lucide-react";

export default function Loading() {
    // Or a custom loading skeleton component
    return <div className="w-full h-[300px] sm:h-[500px] flex justify-around items-center">
        <Loader2 className="animate-spin w-[80px] h-[80px] text-blue-500 "/>
    </div>
}
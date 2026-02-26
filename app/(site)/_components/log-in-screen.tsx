import { Button } from "@/components/ui/button";

export const LogInScreen = () => {
    return (
        <div className="bg-black h-full w-full flex items-center justify-center relative">
            <img src="./bg.jpg" className="h-full w-full absolute blur-sm" />
            <div className="flex flex-col absolute gap-5 z-50">
                <div className="text-4xl text-white">Welcome! User</div>
                <Button variant={"cosmosBranded"}>Sign In</Button>
            </div>
        </div>
    );
};